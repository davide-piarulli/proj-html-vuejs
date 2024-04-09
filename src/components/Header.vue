<script>
import { store } from "../data/store";
import NavbarVue from "./partials/Navbar.vue";
export default {
  components: {
    NavbarVue,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <!-- topbar -->
    <div class="contact-info">
      <div class="container">
        <div class="row">
          <!-- LEFT COLUMN -->
          <div class="col-6 d-flex p-2">
            <i class="fa-solid fa-clock"></i>
            <p>Open Hours: Mon - Sat - 9:00 - 18:00</p>
          </div>
          <!-- /LEFT COLUMN -->

          <!-- RIGHT COLUMN -->
          <div
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
              <i
                v-for="(element, index) in store.socialIcons"
                :key="index"
                class="px-3"
              >
                <a :href="element.url" v-html="element.name"></a
              ></i>
            </div>
          </div>
          <!-- /RIGHT COLUMN -->
        </div>
      </div>
    </div>
    <!-- topbar -->

    <div class="container">
      <div class="row h-100 align-items-center justify-content-center py-2">
        <div class="col-4 h-100">
          <div class="logo">
            <img src="../assets/img/logo-nexgen.svg" alt="" />
          </div>
        </div>
        <div class="col-8 h-100 align-items-center">
          <NavbarVue />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  // position: fixed;
  background-color: black;
  color: white;
  .contact-info {
    background-color: #21333e;
    color: #bcbdbd;
  }
  
  img {
    width: 150px;
  }
  button {
    background-color: #038384;
    color: white;
  }
}
</style>
