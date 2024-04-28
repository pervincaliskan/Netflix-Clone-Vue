<script>
import * as bootstrap from 'bootstrap';
import Movie from '@/api/movie';

export default {
  // local state
  // data() vue methodu
  data() {
    // obje {} donmek zorunda RETURN TYPE OBJECT
    // objenin elemanı da popular
    return {
      popular: {
        isLoading: true,
        data: [],
        error: null,
      },
      top_rated: {
        isLoading: true,
        data: [],
        error: null,
      },
      upcoming: {
        isLoading: true,
        data: [],
        error: null,
      },
    };
  },

  created() {
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getUpComingMovies();
  },

  mounted() {
    document.addEventListener('scroll', () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;

      const netflixNavbar = document.querySelector('.netflix-navbar');
      if (scroll > 100) {
        netflixNavbar.style.background = '#0C0C0C';
      } else {
        netflixNavbar.style.background = 'transparent';
      }
    });

    new bootstrap.Carousel('#carouselExampleIndicators', {
      ride: 'carousel',
    });

    new bootstrap.Carousel('#carouselExampleIndicators2', {
      ride: 'carousel',
    });

    new bootstrap.Carousel('#carouselExampleIndicators3', {
      ride: 'carousel',
    });
  },

  // KENDI METODLARIM
  methods: {
    async getPopularMovies() {
      // getPopularMovies adında bir asenkron fonksiyon tanımladım
      try {
        const { data } = await Movie.popular();
        /* Movie adındaki bir nesnenin popular adındaki metodu çağırırız.
         Bu metod, popüler filmleri getiren bir HTTP isteği yapar ve
         sonucu { data } adındaki  değişkene atar. */
        this.popular.data = data.results;
        this.popular.error = null;
      } catch (e) {
        this.popular.data = [];
        this.popular.error = e;
      } finally {
        this.popular.isLoading = false;
      }
    },
    async getTopRatedMovies() {
      // getPopularMovies adında bir asenkron fonksiyon tanımladım
      try {
        const { data } = await Movie.top_rated();
        /* Movie adındaki bir nesnenin topRated adındaki metodu çağırırız.
         Bu metod, popüler filmleri getiren bir HTTP isteği yapar ve
         sonucu { data } adındaki  değişkene atar. */
        this.top_rated.data = data.results;
        this.top_rated.error = null;
      } catch (e) {
        this.top_rated.data = [];
        this.top_rated.error = e;
      } finally {
        this.top_rated.isLoading = false;
      }
    },
    async getUpComingMovies() {
      // getPopularMovies adında bir asenkron fonksiyon tanımladım
      try {
        const { data } = await Movie.upcoming();
        /* Movie adındaki bir nesnenin upcoming adındaki metodu çağırırız.
         Bu metod, popüler filmleri getiren bir HTTP isteği yapar ve
         sonucu { data } adındaki  değişkene atar. */
        this.upcoming.data = data.results;
        this.upcoming.error = null;
      } catch (e) {
        this.upcoming.data = [];
        this.upcoming.error = e;
      } finally {
        this.upcoming.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div style="position: relative">
    <!-- header -->
    <nav class="navbar navbar-expand-lg netflix-navbar netflix-padding-left netflix-padding-right">
      <div class="container-fluid">
        <!--netflix-row"-->
        <div class="netflix-row">
          <div class="left d-flex align-items-center">
            <RouterLink to="/" class="navbar-brand">
              <img src="../assets/img/main/logo.png" alt="" />
            </RouterLink>
            <div class="netflix-nav">
              <section>
                <button class="px-3 py-1">Home</button>
                <button class="px-3 py-1">TV Shows</button>
                <button class="px-3 py-1">Movies</button>
                <button class="px-3 py-1">News & Popular</button>
                <button class="px-3 py-1">My List</button>
              </section>
            </div>
            <!--Browse-->
            <!--dropdown-menu-->
            <div class="netflix-dropdown-box dropdown">
              <button
                id="dropdownMenuButton1"
                class="netflix-dropdown dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Browse
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Home</a></li>
                <li><a class="dropdown-item" href="#">TV Shows</a></li>
                <li><a class="dropdown-item" href="#">Movies</a></li>
                <li><a class="dropdown-item" href="#">News & Popular</a></li>
                <li><a class="dropdown-item" href="#">My List</a></li>
              </ul>
            </div>
          </div>
          <div class="right d-flex align-items-center">
            <!--Bootstrap icons-->
            <i class="bi bi-search"></i>
            <i class="bi bi-bell-fill"></i>
            <section class="netflix-profile"></section>
          </div>
        </div>
      </div>
    </nav>
    <!-- /header -->

    <!-- video netflix-home-video-->
    <div class="">
      <section class="netflix-home-video">
        <div class="top"></div>
        <div class="bottom"></div>
        <video src="../assets/video/video.mp4" autoplay muted loop></video>
        <div class="content">
          <!-- AFTER WE CALLIDED -->
          <section class="left">
            <img src="../assets/img/image2.webp" alt="" />

            <div class="d-flex mt-2">
              <button class="btn btn-light m-2">
                <i class="bi bi-play-fill" style="padding: 0%; color: black"></i>
                Play Now
              </button>
              <button class="btn btn-secondary m-2">
                <i class="bi bi-info-circle" style="padding: 0%"></i> More Info
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
    <!-- video -->

    <!-- sliders -->
    <div class="slider-box">
      <div class="container-fluid slider">
        <section class="d-flex justify-content-between margin-right">
          <p class="text-white"><b>Popular</b></p>
          <div class="">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active tab-change-btn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              class="tab-change-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              class="tab-change-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </section>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" style="position: relative; overflow: visible">
            <!-- Ekranda 1 satırda(trending) 3 carousel var ve bu 3 carousel'in for döngüsü  -->
            <div v-for="(list, index) in 3" :key="list" class="carousel-item" :class="{ active: index === 0 }">
              <!-- CARD -->
              <!-- 0 ->   6 => 0 1 2 3 4 5 -->
              <!-- 6 ->  12 -->
              <!-- 12 -> 18 -->
              <!-- Bir carousel içinde ki 6 kartın for döngüsü -->
              <section class="d-flex" style="">
                <div v-for="movie in popular.data.slice(index * 6, index * 6 + 6)" :key="movie.id" class="card">
                  <img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" class="card-img-top" alt="..." />
                  <!-- resmin baseUrl ile backtick (```) içinde yer alan $ süslü parantez içinde olunca js yazabiliyoruz bun
                  Vue'da binding denir.  -->
                  <div class="card-body">
                    <section class="d-flex justify-content-between">
                      <div>
                        <i class="bi bi-play-circle-fill card-icon"></i>
                        <i class="bi bi-plus-circle card-icon"></i>
                      </div>
                      <div>
                        <i class="bi bi-arrow-down-circle card-icon"></i>
                      </div>
                    </section>
                    <section class="d-flex align-items-center justify-content-between">
                      <!-- {{}} iki süslü işaret interpolation  -->
                      <!-- movie de oy ortalamasını çektik-->
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">{{ movie.vote_average }}% match</p>
                      <!--  movie de title -->
                      <span class="m-2 netflix-card-text text-white">{{ movie.title }}</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <!-- gendre(film kategori)'ler bir array (27ya da 878 gibi),
                      ve bu arrayleri dümdüz ekrana basamadığımız için js join fonk. kullanarak string yaptık -->
                    <span class="netflix-card-text text-white">{{ movie.genre_ids.join(' • ') }}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container-fluid slider2">
        <section class="d-flex justify-content-between margin-right">
          <p class="text-white"><b>Top Rated</b></p>
          <div class="">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              class="active tab-change-btn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              class="tab-change-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              class="tab-change-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </section>
        <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" style="position: relative; overflow: visible">
            <!-- Ekranda 1 satırda(trending) 3 carousel var ve bu 3 carousel'in for döngüsü  -->
            <div v-for="(list, index) in 3" :key="list" class="carousel-item" :class="{ active: index === 0 }">
              <!-- CARD -->
              <!-- 0 ->   6 => 0 1 2 3 4 5 -->
              <!-- 6 ->  12 -->
              <!-- 12 -> 18 -->
              <!-- Bir carousel içinde ki 6 kartın for döngüsü -->
              <section class="d-flex" style="">
                <div v-for="movie in top_rated.data.slice(index * 6, index * 6 + 6)" :key="movie.id" class="card">
                  <img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" class="card-img-top" alt="..." />
                  <!-- resmin baseUrl ile backtick (```) içinde yer alan $ süslü parantez içinde olunca js yazabiliyoruz bun
                  Vue'da binding denir.  -->
                  <div class="card-body">
                    <section class="d-flex justify-content-between">
                      <div>
                        <i class="bi bi-play-circle-fill card-icon"></i>
                        <i class="bi bi-plus-circle card-icon"></i>
                      </div>
                      <div>
                        <i class="bi bi-arrow-down-circle card-icon"></i>
                      </div>
                    </section>
                    <section class="d-flex align-items-center justify-content-between">
                      <!-- {{}} iki süslü işaret interpolation  -->
                      <!-- movie de oy ortalamasını çektik-->
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">{{ movie.vote_average }}% match</p>
                      <!--  movie de title -->
                      <span class="m-2 netflix-card-text text-white">{{ movie.title }}</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <!-- gendre(film kategori)'ler bir array (27ya da 878 gibi),
                      ve bu arrayleri dümdüz ekrana basamadığımız için js join fonk. kullanarak string yaptık -->
                    <span class="netflix-card-text text-white">{{ movie.genre_ids.join(' • ') }}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container-fluid slider3">
        <section class="d-flex justify-content-between margin-right">
          <p class="text-white"><b>Upcoming</b></p>
          <div class="">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators3"
              data-bs-slide-to="0"
              class="active tab-change-btn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              class="tab-change-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators3"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              class="tab-change-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators3"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </section>
        <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" style="position: relative; overflow: visible">
            <!-- Ekranda 1 satırda(trending) 3 carousel var ve bu 3 carousel'in for döngüsü  -->
            <div v-for="(list, index) in 3" :key="list" class="carousel-item" :class="{ active: index === 0 }">
              <!-- CARD -->
              <!-- 0 ->   6 => 0 1 2 3 4 5 -->
              <!-- 6 ->  12 -->
              <!-- 12 -> 18 -->
              <!-- Bir carousel içinde ki 6 kartın for döngüsü -->
              <section class="d-flex" style="">
                <div v-for="movie in upcoming.data.slice(index * 6, index * 6 + 6)" :key="movie.id" class="card">
                  <img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" class="card-img-top" alt="..." />
                  <!-- resmin baseUrl ile backtick (```) içinde yer alan $ süslü parantez içinde olunca js yazabiliyoruz bun
                  Vue'da binding denir.  -->
                  <div class="card-body">
                    <section class="d-flex justify-content-between">
                      <div>
                        <i class="bi bi-play-circle-fill card-icon"></i>
                        <i class="bi bi-plus-circle card-icon"></i>
                      </div>
                      <div>
                        <i class="bi bi-arrow-down-circle card-icon"></i>
                      </div>
                    </section>
                    <section class="d-flex align-items-center justify-content-between">
                      <!-- {{}} iki süslü işaret interpolation  -->
                      <!-- movie de oy ortalamasını çektik-->
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">{{ movie.vote_average }}% match</p>
                      <!--  movie de title -->
                      <span class="m-2 netflix-card-text text-white">{{ movie.title }}</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators3"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators3"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <!-- sliders-end -->

    <!-- footer  -->
    <div class="container footer">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-3">
              <ul>
                <li>Audio and Subtitle</li>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Audio description</li>
                <li>Investor Relation</li>
                <li>Terms and Conditions</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Gift card</li>
                <li>Subscription</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto">
          <div class="row">
            <div class="col">
              <p class="copy-right">@netflix copyright</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../style/landing.css"></style>
<style src="../style/responsive.css"></style>

<!--
  index.html
  style.css
  main.js

  Dosyaadi.vue
    - <script></script> tagi icerisinde javascript kodlarimiz
    - <template></template> tagi icerisinde html kodlarimiz
    - <style></style> tagi icerisinde style kodlarimiz

  v-for: loop
-->
