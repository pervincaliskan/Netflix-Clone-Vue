import { get } from '@/utils/request';

export default class Movie {
  static async popular(page = 1) {
    return get('/movie/popular', {
      params: {
        page,
        language: 'en-US',
      },
    });
  }
}
