export const pathMapping = (path: string) => {
  if (path === "/") {
    return "home";
  }
  if (path === "/about") {
    return "about";
  }
  if (path === "/skills") {
    return "skills";
  }
  return "";
};
