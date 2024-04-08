<script>
import { store } from "../data/store";
export default {};
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="row w-100">
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
              <span>hello@example.com</span>
            </div>
            <div class="social-icons">
              <i class="fa-brands fa-facebook-f px-3"></i>
              <i class="fa-brands fa-x-twitter px-3"></i>
              <i class="fa-brands fa-linkedin-in px-3"></i>
            </div>
          </div>
        </div>
        <!-- /RIGHT COLUMN -->
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #21333e;
  color: #bcbdbd;
}
</style>
