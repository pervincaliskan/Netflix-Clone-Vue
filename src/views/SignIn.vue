<script>
import { setUserToLocalStorage, getUserFromLocalStorage } from '@/utils/localStorage';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSignIn() {
      const user = {
        email: this.email,
        password: this.password,
      };

      setUserToLocalStorage(user);
      console.log('getUserFromLocalStorage', getUserFromLocalStorage());
      this.$router.push('/landing');
    },
  },
};
</script>

<template>
  <div>
    <RouterLink to="/" class="login-top">
      <img src="../assets/img/main/logo.png" alt="" />
    </RouterLink>

    <div class="d-flex justify-content-center align-items-center" style="width: 100vw">
      <!--Login-Box-->
      <section class="login-box">
        <h2 class="text-white">Sign In</h2>
        <form class="mt-4">
          <!--Email or Phone Number Bootstrap forms-->
          <div class="mb-3 bg-white rounded px-2">
            <label for="exampleInputEmail1" class="form-label small-text">Email or Phone Number</label>
            <input
              id="exampleInputEmail1"
              v-model="email"
              type="email"
              class="form-control border-0 p-0"
              aria-describedby="emailHelp"
            />
          </div>
          <!--Password-->
          <div class="mb-3 bg-white rounded px-2">
            <label for="exampleInputPassword1" class="form-label small-text">Password</label>
            <input id="exampleInputPassword1" v-model="password" type="password" class="form-control border-0 p-0" />
          </div>
          <!--Sign In Button-->
          <a class="btn btn-danger mx-0 mt-3" style="width: 100%" @click="handleSignIn">Sign In</a>
          <div class="mb-3 mt-3 form-check">
            <input id="exampleCheck1" type="checkbox" class="form-check-input" />
            <label class="form-check-label text-white small-text" for="exampleCheck1">Remember Me</label>
          </div>

          <div class="mt-3 d-flex">
            <img style="width: 20px" width="20" src="../assets/img/fb.png" alt="" />
            <p class="m-0 small-text text-white mx-2">Login with Facebook</p>
          </div>
          <div class="mt-3">
            <!-- <img width="20px" src="./images/fb.png" alt=""> -->
            <p class="m-0 text-white">
              <span style="color: rgb(212 212 212 / 75%)">New to Netflix?</span> Sign up now.
            </p>
            <p class="m-0 small-text text-white mt-2">
              <span style="color: rgb(212 212 212 / 75%)"
                >This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#"> Learn more.</a>
              </span>
            </p>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
