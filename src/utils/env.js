/**
 * 是否为开发环境
 * @returns {Boolean}
 */
export const isDev = () => {
  return import.meta.env.DEV;
};

/**
 * 是否为生产环境
 * @returns {Boolean}
 */
export const isProd = () => {
  return import.meta.env.PROD;
};

/**
 * @returns {String}
 */
export const tmdbAccessToken = () => {
  return import.meta.env.VITE_TMDB_ACCESS_TOKEN;
};
