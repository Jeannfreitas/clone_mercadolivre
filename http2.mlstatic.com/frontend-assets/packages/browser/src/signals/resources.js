import { Resource } from "@opentelemetry/resources";
import { ROOT_CONTEXT, trace, context } from "@opentelemetry/api";

export const getTraceparentMeta = (TRACE_PARENT_HEADER) => {
  const metaElement = Array.from(
    document.getElementsByTagName("meta") || []
  ).find((e) => e.getAttribute("name") === TRACE_PARENT_HEADER);

  return metaElement?.content || "";
};

export const getTraceparentAttributes = (TRACE_PARENT_HEADER) => {
  const metaElement = getTraceparentMeta(TRACE_PARENT_HEADER);

  if (!metaElement) {
    return {};
  }

  const [version, traceId, spanId, sampleDecision] = metaElement.split("-");

  const attributes = {};

  if (version) {
    attributes[`${TRACE_PARENT_HEADER}.version`] = version;
  }

  if (traceId) {
    attributes[`${TRACE_PARENT_HEADER}.trace_id`] = traceId;
  }

  if (spanId) {
    attributes[`${TRACE_PARENT_HEADER}.span_id`] = spanId;
  }

  if (sampleDecision) {
    attributes[`${TRACE_PARENT_HEADER}.sampled`] = sampleDecision;
  }

  return attributes;
};

export function getTraceparentMetaContext(TRACE_PARENT_HEADER) {
  const traceparentAttributes = getTraceparentAttributes(TRACE_PARENT_HEADER);
  const traceId = traceparentAttributes[`${TRACE_PARENT_HEADER}.trace_id`];
  const spanId = traceparentAttributes[`${TRACE_PARENT_HEADER}.span_id`];
  const sampleDecision =
    traceparentAttributes[`${TRACE_PARENT_HEADER}.sampled`];

  if (traceId && spanId) {
    const spanContext = {
      traceId,
      spanId,
      traceFlags: parseInt(sampleDecision, 16),
      isRemote: true,
    };

    return trace.setSpanContext(ROOT_CONTEXT, spanContext);
  }

  return context.active();
}

export function pickFromContext(attr, ctx) {
  return Object.entries(attr).reduce((acc, [key, value]) => {
    acc[key] = ctx[value] ?? (value !== key ? value : undefined);

    return acc;
  }, {});
}

export function getResources(localResources, ctx) {
  const resources = pickFromContext(localResources, ctx);

  return new Resource({
    ...resources,
  });
}
