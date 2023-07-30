export default defineEventHandler((event) => {
  const userAgent = getHeader(event, "user-agent");
  const headers = getHeaders(event);
  const flags = generateFlags(headers, userAgent ?? "");

  event.context.$device = flags;

  if (flags.isMobile) {
    // 这里做判断
    return "mobile";
  }
});
