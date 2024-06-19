/**
 * ganerate a page title form path
 */
export const ganeratePageTilte = (path) => {
  const title = path.replace(/-/g, " ").replace(/\//g, " ");
  return title;
};
