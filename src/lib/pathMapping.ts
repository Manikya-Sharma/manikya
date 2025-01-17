export const pathMapping = (path: string) => {
  if (path === "/") {
    return "home";
  }
  if (path === "/about") {
    return "about";
  }
  return "";
};
