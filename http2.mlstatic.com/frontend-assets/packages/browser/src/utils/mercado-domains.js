/**
 * Mercado domains configuration for first-party domain identification
 * This file contains domain definitions for the Mercado Libre ecosystem
 */

// Main domains for Mercado Libre ecosystem
export const MERCADO_DOMAINS = [
  "mercadolibre",
  "mercadopago",
  "mercadolivre",
  "mercadoclics",
  "mercadoshops",
  "mlstatic",
  "mercadolivreexperience",
];

// Country TLDs
export const COUNTRY_TLDS = [
  "com",
  "com.ar",
  "com.br",
  "com.mx",
  "com.co",
  "com.ve",
  "com.pe",
  "com.ec",
  "com.uy",
  "com.pa",
  "com.do",
  "com.cr",
  "cl",
  "com.pt",
];

/**
 * Generates domain patterns for first-party domain identification
 * @returns {Array<string>} Array of domain patterns
 */
export function generateFirstPartyDomainPatterns() {
  const patterns = [];

  // Generate simple patterns for each domain and TLD combination
  MERCADO_DOMAINS.forEach((domain) => {
    // For mercadolivre, only use specific TLDs
    const applicableTlds =
      domain === "mercadolivre" ? ["com", "com.br", "com.pt"] : COUNTRY_TLDS;

    applicableTlds.forEach((tld) => {
      // Create a simple string pattern that can be safely checked with String.includes
      const domainPattern = `${domain}.${tld}`;

      patterns.push(domainPattern);
    });
  });

  return patterns;
}

// Pre-generated patterns for direct import
export const FIRST_PARTY_DOMAIN_PATTERNS = generateFirstPartyDomainPatterns();
