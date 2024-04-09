<script>
export default {};
</script>

<template>
  <footer>
    <div class="container-xl">
      <div class="row w-100">
        <div class="col">
          <div class="card bg-transparent">
            <img
              src="../assets/img/logo-nexgen.svg"
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
        <div class="col">2</div>
        <div class="col">3</div>
        <div class="col">4</div>
      </div>
      <div class="row d-flex w-100">
        <div class="col-6">
          <span
            >Enjoy the low price. We are tracking any itention of piracy</span
          >
        </div>
        <div class="col-6 justify-content-end d-flex">
          <span
            >@2024 NEXGEN is Proudly Powered by <a href="#">Codings</a></span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_general.scss";
footer {
  .card {
    color: #bcbdbd;
    img {
      max-width: 150px;
    }
  }
  a {
    color: #097973;
  }
}
</style>
