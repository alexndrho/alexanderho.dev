export const stripTrailingSlash = (path: string): string => (path === "/" ? path : path.replace(/\/$/, ""));

export const stripUrlProtocol = (url: string): string => {
  return url.replace(/^https?:\/\//, "");
};

export const uppercaseFirst = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
