<script>
import { store } from "../../data/store.js";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <nav class="h-100">
    <ul
      class="h-100 d-flex list-unstyled align-items-center justify-content-end"
    >
      <li v-for="(element, index) in store.headerNav" :key="index">
        <a :href="element.url" class="text-decoration-none px-3">{{
          element.title
        }}</a>
      </li>
      <li class="h-100 align-items-center justify-content-center px-4">
        <i class="fa-regular fa-user"></i>
      </li>
      <li class="h-100 align-items-center justify-content-center px-4">
        <button class="btn rounded-1">GET IN TOUCH</button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
a {
  color: white;
}
</style>
