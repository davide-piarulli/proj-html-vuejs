<script>
import { store } from "../../data/store.js";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    address: String,
    phone: String,
    email: String,
  },
};
</script>

<template>
  <div class="col ">
    <div class="card bg-transparent">
      <img
        src="../../assets/img/logo-nexgen.svg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p class="card-text">
          A Functional HTML Template for Corporate & Business.
        </p>
        <div class="phone d-flex">
          <i class="fa-solid fa-phone"></i>
          <span>+1 (305) 1234-5678</span>
        </div>
        <div class="email d-flex">
          <i class="fa-solid fa-envelope"></i>
          <span>hello@example.com</span>
        </div>
        <div class="location d-flex">
          <i class="fa-solid fa-location-pin"></i>
          <span>Main Avenue, 987</span>
        </div>
        <a href="#" class="btn btn-primary border-success bg-transparent"
          >GET IN TOUCH</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
  color: #bcbdbd;
  img {
    max-width: 150px;
  }
}
a {
  color: #097973;
}
</style>
