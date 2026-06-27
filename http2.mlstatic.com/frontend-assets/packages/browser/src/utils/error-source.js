/**
 * Utility for identifying the source of JavaScript errors based on exception stacktraces
 * This helps determine if errors come from first-party code, third-party libraries,
 * browser extensions, add-ons, or other sources.
 */
import { globalScope } from "../window/browser";
import { FIRST_PARTY_DOMAIN_PATTERNS } from "./mercado-domains";

// Error source categories
export const ERROR_SOURCES = {
  FIRST_PARTY: "first-party",
  THIRD_PARTY: "third-party",
  BROWSER_EXTENSION: "browser-extension",
  PLUGIN: "plugin",
  ADDON: "addon",
  BACKGROUND_SERVICE: "background-service",
  INLINE_SCRIPT: "inline-script",
  UNKNOWN: "unknown",
  WEBKIT_BRIDGE: "webkit-bridge",
};

// Common patterns for identifying browser extensions
const EXTENSION_PATTERNS = [
  /^chrome-extension:\/\//i,
  /^moz-extension:\/\//i,
  /^safari-extension:\/\//i,
  /^extension:\/\//i,
  /^chrome:\/\/extensions/i,
  /^resource:\/\/extension/i,
];

// Common patterns for identifying browser plugins
const PLUGIN_PATTERNS = [/^plugin:\/\//i, /\/plugins\//i, /plugin\.js$/i];

// Common patterns for identifying background services
const BACKGROUND_SERVICE_PATTERNS = [
  /^service-worker\.js/i,
  /^worker\.js/i,
  /^background\.js/i,
  /^background-service/i,
  /\/workers\//i,
];

// Common patterns for identifying add-ons
const ADDON_PATTERNS = [/^addon:\/\//i, /\/addons\//i, /addon\.js$/i];

// Common patterns for identifying inline JavaScript
const INLINE_SCRIPT_PATTERNS = [
  // Anonymous or eval function names are common for inline scripts
  /^eval /i,
  /^<anonymous>$/i,
  /eval at <anonymous>/i, // Matches eval at <anonymous> pattern
  // Script tags in HTML
  /<script>/i,
  // VM-based errors (from eval or console execution)
  /^VM\d+:/i,
  // No file name or showing as the current page URL
  /^$/,
];

// First-party domain patterns are imported from mercado-domains.js

/**
 * Checks if a filename appears to be an HTML page URL
 * @param {string} fileName - The filename to check
 * @returns {boolean} True if the filename appears to be an HTML page URL
 */
function isHtmlPageUrl(fileName) {
  if (!fileName || typeof fileName !== "string") {
    return false;
  }

  // Check if it's an HTTP/HTTPS URL
  const isHttpUrl =
    fileName.startsWith("http://") || fileName.startsWith("https://");

  // Check if it ends with .html or .html#something
  const hasHtmlExtension = fileName.includes(".html");

  return isHttpUrl && hasHtmlExtension;
}

/**
 * Gets the current domain for first-party code identification
 * @returns {string} The current domain
 */
export function getCurrentDomain() {
  try {
    return globalScope.location?.hostname || "";
  } catch (e) {
    return "";
  }
}

/**
 * Extracts a stack trace string from various error formats
 * @param {Error|string|Object} error - The error to extract stack trace from
 * @returns {string|null} The stack trace string or null if not available
 */
export function extractStackTrace(error) {
  if (!error) {
    return null;
  }

  // If error is already a string, assume it's a stack trace
  if (typeof error === "string") {
    return error;
  }

  // Handle Error objects
  if (error instanceof Error) {
    return error.stack;
  }

  // Handle objects with stack property (like event.error)
  if (typeof error === "object" && error.stack) {
    return error.stack;
  }

  if (typeof error === "object" && error.reason && error.reason.stack) {
    return error.reason.stack;
  }

  // Handle error event objects from window.onerror
  if (typeof error === "object" && error.error && error.error.stack) {
    return error.error.stack;
  }

  return null;
}

/**
 * Parses a stack trace string into structured frame objects
 * @param {string} stackTrace - The stack trace string to parse
 * @returns {Array<Object>} Array of parsed stack frames
 */
export function parseStackTrace(stackTrace) {
  if (!stackTrace) {
    return [];
  }

  // Different browsers format stack traces differently
  // This handles Chrome, Firefox, Safari, and Edge formats

  const frames = [];

  // Split the stack trace into lines
  const lines = stackTrace.split("\n").filter((line) => line.trim().length > 0);

  // Skip the first line if it contains the error message (common in Chrome/Firefox)
  const startIndex = lines[0].includes("Error:") ? 1 : 0;

  // Use forEach instead of for loop to avoid linting issues
  lines.slice(startIndex).forEach((currentLine) => {
    const trimmedLine = currentLine.trim();

    // Skip empty lines
    if (!trimmedLine) {
      return;
    }

    // Chrome/Edge format: "    at FunctionName (file:line:column)"
    // Firefox format: "FunctionName@file:line:column"
    // Safari format: "FunctionName@file:line:column" or "file:line:column"

    const frame = {};

    // Chrome/Edge format
    const chromeMatch =
      /^\s*at\s+([^(]+)\s*\(([^)]+)\)$/.exec(trimmedLine) ||
      /^\s*at\s+([^(]+)$/.exec(trimmedLine) ||
      /^\s*at\s+(.+):(\d+):(\d+)$/.exec(trimmedLine);

    if (chromeMatch) {
      if (chromeMatch[2]) {
        // Format: "at FunctionName (file:line:column)"
        frame.functionName = chromeMatch[1].trim();

        const locationParts = chromeMatch[2].split(":");

        if (locationParts.length >= 3) {
          // Using array destructuring to fix linting issues
          const [columnNumber, lineNumber] = [
            locationParts.pop(),
            locationParts.pop(),
          ];

          frame.fileName = locationParts.join(":");
          frame.lineNumber = parseInt(lineNumber, 10);
          frame.columnNumber = parseInt(columnNumber, 10);
        } else {
          const [fileName] = [chromeMatch[2]];

          frame.fileName = fileName;
        }
      } else if (chromeMatch[1]) {
        // Format: "at file:line:column" or "at FunctionName"
        const parts = chromeMatch[1].split(":");

        if (parts.length >= 3) {
          // Using array destructuring to fix linting issues
          const [columnNumber, lineNumber] = [parts.pop(), parts.pop()];

          frame.fileName = parts.join(":");
          frame.lineNumber = parseInt(lineNumber, 10);
          frame.columnNumber = parseInt(columnNumber, 10);
          frame.functionName = "anonymous";
        } else {
          frame.functionName = chromeMatch[1].trim();
          frame.fileName = "unknown";
        }
      }
    } else {
      // Firefox/Safari format
      const firefoxMatch =
        /^([^@]+)@(.+):(\d+):(\d+)$/.exec(trimmedLine) ||
        /^(.+):(\d+):(\d+)$/.exec(trimmedLine);

      if (firefoxMatch) {
        if (firefoxMatch.length === 5) {
          // Format: "FunctionName@file:line:column"
          frame.functionName = firefoxMatch[1].trim();

          const [, , fileName] = firefoxMatch;

          frame.fileName = fileName;
          frame.lineNumber = parseInt(firefoxMatch[3], 10);
          frame.columnNumber = parseInt(firefoxMatch[4], 10);
        } else if (firefoxMatch.length === 4) {
          // Format: "file:line:column"
          frame.functionName = "anonymous";

          const [, fileName] = firefoxMatch;

          frame.fileName = fileName;
          frame.lineNumber = parseInt(firefoxMatch[2], 10);
          frame.columnNumber = parseInt(firefoxMatch[3], 10);
        }
      } else {
        // If we can't parse the line, store it as is
        frame.raw = trimmedLine;
        frame.fileName = trimmedLine;
      }
    }

    frames.push(frame);
  });

  return frames;
}

/**
 * Analyzes stack frames to determine the most likely source of the error
 * @param {Array<Object>} frames - Parsed stack frames
 * @param {Object} options - Analysis options
 * @param {Array<string>} options.firstPartyDomains - List of first-party domains
 * @param {Array<RegExp>} options.additionalThirdPartyPatterns - Additional patterns for third-party domains
 * @returns {Object} Source identification result
 */
export function analyzeErrorSource(frames, options = {}) {
  const { firstPartyDomains = [], additionalThirdPartyPatterns = [] } = options;

  // No need for a separate variable here as we'll use FIRST_PARTY_DOMAIN_PATTERNS directly

  if (!frames || frames.length === 0) {
    return {
      source: ERROR_SOURCES.UNKNOWN,
      confidence: 0,
      metadata: {
        reason: "No stack frames available",
      },
    };
  }

  // Convert user-provided firstPartyDomains to simple string patterns
  // This avoids using complex regex patterns that might trigger security warnings
  const userDomainPatterns = firstPartyDomains.map((domain) =>
    domain.toLowerCase()
  );

  // Combine predefined patterns with user-provided ones
  const allDomainPatterns = [
    ...FIRST_PARTY_DOMAIN_PATTERNS,
    ...userDomainPatterns,
  ];

  // Check for browser extension patterns
  const frameResults = frames.map((frame) => {
    const fileName = frame.fileName || "";

    // Check for browser extensions
    if (EXTENSION_PATTERNS.some((pattern) => pattern.test(fileName))) {
      return {
        frame,
        source: ERROR_SOURCES.BROWSER_EXTENSION,
        confidence: 0.95,
        reason: "Stack trace contains browser extension URL pattern",
      };
    }

    // Check for plugins
    if (PLUGIN_PATTERNS.some((pattern) => pattern.test(fileName))) {
      return {
        frame,
        source: ERROR_SOURCES.PLUGIN,
        confidence: 0.8,
        reason: "Stack trace contains plugin pattern",
      };
    }

    // Check for add-ons
    if (ADDON_PATTERNS.some((pattern) => pattern.test(fileName))) {
      return {
        frame,
        source: ERROR_SOURCES.ADDON,
        confidence: 0.8,
        reason: "Stack trace contains add-on pattern",
      };
    }

    // Check for inline JavaScript
    if (
      INLINE_SCRIPT_PATTERNS.some((pattern) => pattern.test(fileName)) ||
      isHtmlPageUrl(fileName)
    ) {
      return {
        frame,
        source: ERROR_SOURCES.INLINE_SCRIPT,
        confidence: 0.85,
        reason: "Stack trace indicates inline JavaScript",
      };
    }

    // Check for inline JavaScript by examining function name and other characteristics
    if (
      // Anonymous functions often indicate inline scripts
      (frame.functionName === "anonymous" ||
        frame.functionName === "eval" ||
        (frame.functionName &&
          frame.functionName.includes("eval at <anonymous>"))) &&
      // If the fileName is the same as the current page URL or empty
      (fileName === "" ||
        (globalScope.location && fileName === globalScope.location.href) ||
        fileName === "unknown")
    ) {
      return {
        frame,
        source: ERROR_SOURCES.INLINE_SCRIPT,
        confidence: 0.8,
        reason: "Stack frame characteristics match inline JavaScript",
      };
    }

    let hostnameToCheck = (fileName ?? "").toLowerCase();
    try {
      hostnameToCheck = new URL(fileName).hostname.toLowerCase();
    } catch (_) {
      // not a valid URL, fall back to raw string
    }

    const isFirstParty = allDomainPatterns.some((domainPattern) =>
      hostnameToCheck.includes(domainPattern)
    );

    if (isFirstParty) {
      return {
        frame,
        source: ERROR_SOURCES.FIRST_PARTY,
        confidence: 0.9,
        reason: "Stack frame matches first-party domain",
      };
    }

    // Check for background services (only after ruling out first-party).
    if (BACKGROUND_SERVICE_PATTERNS.some((pattern) => pattern.test(fileName))) {
      return {
        frame,
        source: ERROR_SOURCES.BACKGROUND_SERVICE,
        confidence: 0.7,
        reason: "Stack trace contains background service pattern",
      };
    }

    // Check for third-party patterns
    const thirdPartyPatterns = [
      ...additionalThirdPartyPatterns,
      // Common third-party library patterns
      /node_modules/,
      /cdn\./,
      /\.min\.js$/,
      /vendor\//,
      /\.cdn\./,
      /\/dist\//,
    ];

    if (thirdPartyPatterns.some((pattern) => pattern.test(fileName))) {
      return {
        frame,
        source: ERROR_SOURCES.THIRD_PARTY,
        confidence: 0.8,
        reason: "Stack frame matches third-party pattern",
      };
    }

    return {
      frame,
      source: ERROR_SOURCES.UNKNOWN,
      confidence: 0.1,
      reason: "Could not determine source",
    };
  });

  // Find the highest confidence result
  const highConfidenceResults = frameResults.filter(
    (result) => result.confidence >= 0.7
  );

  if (highConfidenceResults.length > 0) {
    // Sort by confidence (highest first)
    highConfidenceResults.sort((a, b) => b.confidence - a.confidence);

    const bestResult = highConfidenceResults[0];

    return {
      source: bestResult.source,
      confidence: bestResult.confidence,
      metadata: {
        matchedFrame: bestResult.frame,
        reason: bestResult.reason,
      },
    };
  }

  const firstPartyFrame = frameResults.find(
    (result) => result.source === ERROR_SOURCES.FIRST_PARTY
  );

  if (firstPartyFrame) {
    return {
      source: ERROR_SOURCES.FIRST_PARTY,
      confidence: firstPartyFrame.confidence,
      metadata: {
        matchedFrame: firstPartyFrame.frame,
        reason: "At least one frame matches first-party domain",
      },
    };
  }

  // If no high confidence results, count frames by category
  const frameCounts = {
    [ERROR_SOURCES.FIRST_PARTY]: 0,
    [ERROR_SOURCES.THIRD_PARTY]: 0,
    [ERROR_SOURCES.INLINE_SCRIPT]: 0,
    [ERROR_SOURCES.UNKNOWN]: 0,
  };

  frameResults.forEach((result) => {
    if (Object.prototype.hasOwnProperty.call(frameCounts, result.source)) {
      frameCounts[result.source] += 1;
    }
  });

  // Determine most likely source based on frame counts
  const totalFrames = frames.length;
  const firstPartyRatio = frameCounts[ERROR_SOURCES.FIRST_PARTY] / totalFrames;
  const thirdPartyRatio = frameCounts[ERROR_SOURCES.THIRD_PARTY] / totalFrames;

  if (firstPartyRatio > thirdPartyRatio && firstPartyRatio > 0.3) {
    return {
      source: ERROR_SOURCES.FIRST_PARTY,
      confidence: firstPartyRatio,
      metadata: {
        frameCounts,
        reason: "Majority of frames match first-party patterns",
      },
    };
  }

  if (thirdPartyRatio > firstPartyRatio && thirdPartyRatio > 0.3) {
    return {
      source: ERROR_SOURCES.THIRD_PARTY,
      confidence: thirdPartyRatio,
      metadata: {
        frameCounts,
        reason: "Majority of frames match third-party patterns",
      },
    };
  }

  // If we still can't determine, return unknown
  return {
    source: ERROR_SOURCES.UNKNOWN,
    confidence: 0.1,
    metadata: {
      frameCounts,
      reason: "Could not confidently determine error source",
    },
  };
}

/**
 * Identifies the source of a JavaScript error based on its stack trace
 * @param {Error|string} error - The error object or stack trace string
 * @param {Object} options - Configuration options
 * @param {string[]} options.firstPartyDomains - List of domains considered first-party (e.g., ['myapp.com'])
 * @param {RegExp[]} options.additionalThirdPartyPatterns - Additional patterns to identify third-party code
 * @returns {Object} An object containing the identified source and additional metadata
 */
export function identifyErrorSource(error, options = {}) {
  const {
    firstPartyDomains = [],
    additionalThirdPartyPatterns = [],
    stack: preFilteredStack,
  } = options;

  if (error?.webkitBridgeError) {
    return {
      source: ERROR_SOURCES.WEBKIT_BRIDGE,
    };
  }

  // Use pre-filtered stack if provided, otherwise extract from error
  const stackTrace = preFilteredStack ?? extractStackTrace(error);

  if (!stackTrace) {
    return {
      source: ERROR_SOURCES.UNKNOWN,
      confidence: 0,
      metadata: {
        reason: "No stack trace available",
        originalError: error,
      },
    };
  }

  // Special case for eval stack traces that might not parse well
  if (stackTrace.includes("eval at <anonymous>")) {
    return {
      source: ERROR_SOURCES.INLINE_SCRIPT,
      confidence: 0.85,
      metadata: {
        reason: "Stack trace contains eval at anonymous pattern",
        stackTrace,
        originalError: error,
      },
    };
  }

  // Parse the stack trace into individual frames
  const frames = parseStackTrace(stackTrace);

  // If we couldn't parse any frames, return unknown
  if (!frames || frames.length === 0) {
    return {
      source: ERROR_SOURCES.UNKNOWN,
      confidence: 0,
      metadata: {
        reason: "Could not parse stack trace",
        stackTrace,
        originalError: error,
      },
    };
  }

  // Analyze the frames to determine the most likely source
  return analyzeErrorSource(frames, {
    firstPartyDomains,
    additionalThirdPartyPatterns,
  });
}

/**
 * Helper function to create an error source identifier with default options
 * @param {Object} options - Default options for the identifier
 * @returns {Function} A configured error source identifier function
 */
export function createErrorSourceIdentifier(options = {}) {
  const defaultOptions = {
    firstPartyDomains: [getCurrentDomain()],
    additionalThirdPartyPatterns: [],
    ...options,
  };

  return (error) => identifyErrorSource(error, defaultOptions);
}
