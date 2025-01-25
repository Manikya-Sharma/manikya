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
  if (path === "/projects") {
    return "projects";
  }
  return "";
};
