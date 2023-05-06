export const getImgURL = (src: string) => {
  return new URL(`./assets/svg/${src}.svg`, import.meta.url).href;
};
