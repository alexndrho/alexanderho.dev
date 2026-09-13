export const stripTrailingSlash = (path: string): string => (path === "/" ? path : path.replace(/\/$/, ""));

export const stripUrlProtocol = (url: string): string => {
  return url.replace(/^https?:\/\//, "");
};
