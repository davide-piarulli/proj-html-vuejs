<script>
import FooterCopyright from "./partials/FooterCopyright.vue";
import FooterInfo from "./partials/FooterInfo.vue";
import { store } from "../data/store";
export default {
  components: {
    FooterInfo,
    FooterCopyright,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <footer>
    <div class="container-xl">
      <div class="row w-100">
        <FooterInfo />
      </div>
      <div class="row d-flex w-100">
        <FooterCopyright />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_general.scss";
</style>
