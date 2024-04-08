<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <!-- <nav class="navbar">
      <div class="container">
        <div class="row w-100"> -->
    <!-- LEFT COLUMN -->
    <!-- <div class="col-6 d-flex p-2">
            <i class="fa-solid fa-clock"></i>
            <p>Open Hours: Mon - Sat - 9:00 - 18:00</p>
          </div> -->
    <!-- /LEFT COLUMN -->

    <!-- RIGHT COLUMN -->
    <!-- <div
            class="col-6 d-flex justify-content-end align-content-center p-2"
          >
            <div class="phone d-flex px-4">
              <i class="fa-solid fa-phone"></i>
              <span>+1 (305) 1234-5678</span>
            </div>
            <div class="email d-flex px-4">
              <i class="fa-solid fa-envelope"></i>
              <span>hello@example.com</span>
            </div>
            <div class="social-icons">
              <i class="fa-brands fa-facebook-f px-3"></i>
              <i class="fa-brands fa-x-twitter px-3"></i>
              <i class="fa-brands fa-linkedin-in px-3"></i>
            </div>
          </div>
        </div> -->
    <!-- /RIGHT COLUMN -->
    <!-- </div>
    </nav> -->

    <div class="container h-100">
      <div class="row">
        <div class="col">
          <div class="logo">
            <img src="../assets/img/logo-nexgen.svg" alt="" />
          </div>
        </div>
        <div class="col">
          <nav>
            <ul class="d-flex list-unstyled ">
              <li
                v-for="(element, index) in store.headerNav"
                :key="index"
                >
                <a :href="element.url" class=" text-decoration-none px-2 ">{{ element.title }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  // background-color: #21333e;
  // color: #bcbdbd;
  background-color: black;
  a{
    color: white;
  }
  img {
    width: 150px;
  }
}
</style>
