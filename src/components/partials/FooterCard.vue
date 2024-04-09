<script>
import { store } from "../../data/store.js";
export default {
  props: {
    title: String,
    list: Array,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="card">
    <h5 v-for="(item, index) in title" :key="index">{{ item }}</h5>
    <ul>
      <li v-for="(item, index) in about" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
