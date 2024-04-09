<script>
import FooterCopyright from "./partials/FooterCopyright.vue";
import FooterInfo from "./partials/FooterInfo.vue";
import FooterCard from "./partials/FooterCard.vue";
import { store } from "../data/store";
export default {
  components: {
    FooterInfo,
    FooterCopyright,
    FooterCard,
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
        <FooterInfo
          :phone="store.contactInfo.phone"
          :email="store.contactInfo.email"
          :address="store.contactInfo.address"
        />
      </div>
      <div class="row d-flex w-100" id="copyright">
        <FooterCopyright />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_general.scss";
#copyright {
  background-color: #0d0d11;
}
</style>
