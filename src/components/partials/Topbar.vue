<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- LEFT COLUMN -->
  <div class="col-6 h-100 p-2">
    <div class="content d-flex h-100 align-items-center">
      <i class="fa-solid fa-clock px-2 "></i>
      <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
    </div>
  </div>
  <!-- /LEFT COLUMN -->

  <!-- RIGHT COLUMN -->
  <div class="col-6 d-flex justify-content-end align-content-center p-2">
    <div class="phone d-flex px-4 h-100 align-items-center">
      <i class="fa-solid fa-phone px-2 "></i>
      <span>+1 (305) 1234-5678</span>
    </div>
    <div class="email d-flex px-4 h-100 align-items-center">
      <i class="fa-solid fa-envelope px-2 "></i>
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
</template>

<style lang="scss" scoped>
.content {
  p {
    line-height: 100%;
  }
}
</style>
