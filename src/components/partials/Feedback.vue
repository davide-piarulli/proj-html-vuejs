<script>
export default {};
</script>

<template>
  <section id="feedback">
    <div class="container-xl">
      <div class="row top">
        <div class="col text-center">
          <span class="section-title">CUSTOMER TESTIMONIALS</span>
          <div class="title">
            <h2>Trusted <span>Feedback</span></h2>
          </div>
          <div class="description">
            <p>
              We work intensively in search of ideals that can add up in the
              lives of our customers. This is what moves us and we are grateful
              for the recognition.
            </p>
          </div>
        </div>
      </div>

      <div class="row bottom">
        <div class="col">
          <div class="card">
            <div class="quote">
              <i class="fa-solid fa-quote-right"></i>
            </div>
            <img src="../../assets/img/logo-1.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              voluptatum quia consequuntur praesentium provident illo maxime at
              a eveniet reprehenderit?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              nulla?
            </p>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="quote">
              <i class="fa-solid fa-quote-right"></i>
            </div>
            <img src="../../assets/img/logo-2.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              voluptatum quia consequuntur praesentium provident illo maxime at
              a eveniet reprehenderit?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              nulla?
            </p>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="quote">
              <i class="fa-solid fa-quote-right"></i>
            </div>
            <img src="../../assets/img/logo-3.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              voluptatum quia consequuntur praesentium provident illo maxime at
              a eveniet reprehenderit?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              nulla?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#feedback {
  background-color: #111117;
  height: 775px;
  color: white;
  .row.top {
    padding: 130px 0 50px;
    .section-title {
      color: #058283;
      font-weight: 500;
    }
    .title {
      h2 {
        margin-top: 10px;
        font-size: 3.5rem;
        font-weight: 700;
        span {
          background-color: #0e272d;
          padding: 0px 10px;
          border-radius: 5px;
        }
      }
    }
    .description {
      width: 80%;
      color: #c0c3d0;
    }
  }
  .row.bottom {
    .card {
      width: 350px;
      height: 310px;
      background-color: #19191f;
      padding: 40px;
      position: relative;
      img {
        // TODO: colore bianco logo
        width: 50%;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(210deg)
          brightness(109%) contrast(101%);
      }
      p {
        color: #c0c3d0;
      }
    }
    .quote {
      position: absolute;
      bottom: 35px;
      right: 25px;
      i {
        color: #47474c;
        font-size: 2rem;
      }
    }
  }
}
</style>
