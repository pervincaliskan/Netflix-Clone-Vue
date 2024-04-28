import { get } from '@/utils/request';

export default class Movie {
  static async popular(page = 1) {
    return get(
      // url
      '/movie/popular',
      // config
      {
        params: {
          page,
          language: 'en-US',
        },
      },
    );
  }

  static async top_rated(page = 1) {
    // discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200
    return get(
      '/movie/top_rated',

      {
        params: {
          page,
          language: 'en-US',
        },
      },
    );
  }

  static async upcoming(page = 1) {
    return get(
      '/movie/upcoming',

      {
        params: {
          page,
          language: 'en-US',
        },
      },
    );
  }
}
