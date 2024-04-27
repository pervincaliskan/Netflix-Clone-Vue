<script>
import Movie from '@/api/movie';

export default {
  data() {
    return {
      popular: {
        isLoading: true,
        data: [],
        error: null,
      },
    };
  },

  created() {
    this.getPopularMovies();
  },

  methods: {
    async getPopularMovies() {
      try {
        const { data } = await Movie.popular();
        this.popular.data = data;
        this.popular.error = null;
      } catch (e) {
        this.popular.data = [];
        this.popular.error = e;
      } finally {
        this.popular.isLoading = false;
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
            <a class="navbar-brand" href="#">
              <img src="../assets/img/main/logo.png" alt="" />
            </a>
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
          <p class="text-white"><b>Trending</b></p>
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
            <div class="carousel-item active">
              <!-- CARD -->
              <section class="d-flex" style="">
                <div class="card">
                  <img src="../assets/img/trending/img6.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img7.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
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
      <div class="container-fluid slide2">
        <section class="d-flex justify-content-between margin-right margin-title">
          <p class="text-white"><b>Hollywood</b></p>
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
            <div class="carousel-item active">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img6.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img7.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
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
      <div class="container-fluid slide3">
        <section class="d-flex justify-content-between margin-right margin-title2">
          <p class="text-white"><b>Bollywood</b></p>
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
            <div class="carousel-item active">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img6.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
              </section>
            </div>
            <div class="carousel-item">
              <section class="d-flex">
                <div class="card">
                  <img src="../assets/img/trending/img7.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img3.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img4.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img1.webp" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
                      <span class="border netflix-card-text p-1 text-white">HD</span>
                    </section>
                    <span class="netflix-card-text text-white">Provocative • Psychological • Thriller</span>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/trending/img2.jpeg" class="card-img-top" alt="..." />
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
                      <p class="netflix-card-text m-0" style="color: rgb(0 186 0)">97% match</p>
                      <span class="m-2 netflix-card-text text-white">Limited Series</span>
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
