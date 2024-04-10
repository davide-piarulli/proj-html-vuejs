<script>
import FooterCopyright from "./partials/FooterCopyright.vue";
import FooterInfo from "./partials/FooterInfo.vue";
import { store } from "../data/store";
import FooterNav from "./partials/FooterNav.vue";
export default {
  components: {
    FooterInfo,
    FooterCopyright,
    FooterNav,
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
        <div class="col-3">
          <FooterInfo />
        </div>
        <div class="col-9">
          <FooterNav :navItem="store.footerNav" />
        </div>
      </div>
      <div class="row d-flex w-100" id="copyright"></div>
    </div>
    <FooterCopyright />
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_general.scss";
footer {
  width: 100%;
}
</style>
