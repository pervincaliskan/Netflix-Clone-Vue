import { get } from '@/utils/request';

export default class Movie {
  /**
   * 登录
   * @param {String} username 用户名
   * @param {String} password 密码
   * @returns
   */
  static async popular(page = 1) {
    return get('/movie/popular', {
      params: {
        page,
        language: 'en-US',
      },
    });
  }
}
