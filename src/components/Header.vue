<script>
import { store } from "../data/store";
import Navbar from "./partials/Navbar.vue";
import Topbar from "./partials/Topbar.vue";
export default {
  components: {
    Topbar,
    Navbar,
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
      <div class="container-xl">
        <div class="row">
          <Topbar />
        </div>
      </div>
    </div>
    <!-- topbar -->

    <div class="container-xl">
      <div class="row h-100 align-items-center justify-content-center py-2">
        <div class="col-4 h-100">
          <div>
            <img src="../assets/img/logo-nexgen.svg" alt="logo" class="logo" />
          </div>
        </div>

        <div class="col-8 h-100 align-items-center">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_general.scss";
header {
  .contact-info {
    background-color: #21333e;
    color: #bcbdbd;
  }
  .logo {
    width: 150px;
  }
}
</style>
