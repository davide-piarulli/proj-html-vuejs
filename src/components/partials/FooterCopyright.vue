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
  <div class="row" id="copyright">
    <div class="col align-items-center">
      <p>Enjoy the low price. We are tracking any itention of piracy</p>
    </div>
    <div class="col d-flex align-items-center justify-content-end">
      <p>@2024 NEXGEN is Proudly Powered by <a href="#">Codings</a></p>
    </div>
    <div class="arrow">
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#copyright {
  background-color: #0d0d11;
}
.row {
  position: relative;
}
</style>
