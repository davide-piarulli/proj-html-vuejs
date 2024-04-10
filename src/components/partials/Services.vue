<script>
export default {};
</script>

<template>
  <section id="services" class="container-fluid">
    <div class="container-xl h-100">
      <div class="row top">
        <div class="col">
          <span class="section-title">ROAD TRANSPORT</span>
          <div class="title">
            <h2>Main <span>Services</span></h2>
          </div>
          <div class="description d-flex">
            <p>
              With all of this expertise and capability comes an unrivalled
              commitment to customer service. We will work hard to understand
              your needs in order to develop a productive, long-term
              partnership.
            </p>
            <button>SEE ALL</button>
          </div>
        </div>
      </div>

      <div class="row bottom">
        <div class="col">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-truck-ramp-box"></i>
            </div>
            <div class="arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <h3>Technology</h3>
            <p>
              We are continually focused on developing technology solutions
              adapted to our client's needs.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-temperature-low"></i>
            </div>
            <div class="arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <h3>Technology</h3>
            <p>
              We are continually focused on developing technology solutions
              adapted to our client's needs.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-boxes-stacked"></i>
            </div>
            <div class="arrow">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
            <h3>Technology</h3>
            <p>
              We are continually focused on developing technology solutions
              adapted to our client's needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#services {
  background-color: #111117;
  color: white;
  height: 100%;
  .container-xl {
    padding-bottom: 160px;
  }
  .row.top {
    padding: 135px 0;
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
      button {
        width: 115px;
      }
    }
  }
  .row.bottom {
    .card {
      width: 350px;
      height: 310px;
      background-color: #19191f;
      padding: 40px;
      position: relative;
      .icon {
        i {
          color: #058283;
          background-color: #16282e;
          padding: 15px;
          border-radius: 50%;
          font-size: 2rem;
        }
      }
      h3 {
        color: white;
      }
      p {
        color: #c0c3d0;
      }
    }
    .arrow {
      position: absolute;
      top: 40px;
      right: 40px;
      i {
        color: #0f4e51;
        font-size: 1.7rem;
      }
    }
  }
}
</style>
