<script>
export default {};
</script>

<template>
  <!-- JUMBOTRON -->
  <section id="jumbotron">
    <div class="layer"></div>
    <img src="../../assets/img/bg-9.jpg" alt="background image" />
    <div class="container">
      <div class="jumbo-info">
        <span>LOGISTICS SERVICES</span>
        <h1>CARGO TRANSPORT</h1>
        <p>
          Fractional or exclusive road cargo transportation to all regions with
          small, medium and large vehicles.
        </p>
        <div class="buttons">
          <button class="btn btn-d rounded-1">GET IN TOUCH</button>
          <button class="btn btn-d rounded-1">READ MORE</button>
        </div>
      </div>
    </div>
  </section>
  <!-- JUMBOTRON -->
</template>

<style lang="scss" scoped>
#jumbotron {
  height: 100vh;
  position: relative;
  .layer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 95%;
  }
  img {
    opacity: 50%;
  }
  .jumbo-info {
    position: absolute;
    width: 25%;
    top: 100px;
    span {
      color: #52bbbb;
      font-size: 0.9rem;
    }
    h1 {
      font-size: 3.5rem;
      color: white;
      font-weight: 800;
    }
    p {
      color: #bcbdbd;
    }
    button {
      background-color: #038384;
      color: white;
    }
    .btn-d {
      margin-right: 20px;
    }
  }
}
</style>
