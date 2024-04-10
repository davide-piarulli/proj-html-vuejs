<script>
export default {};
</script>

<template>
  <section id="procedure">
    <div class="container-fluid">
      <div class="row main">
        <div class="col text-center">
          <span class="section-title">HOW IT WORKS IN PRATICE</span>
          <div class="title">
            <h2>
              <span>Logistical</span>
              Procedure
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              explicabo omnis deleniti, officia neque eveniet veniam suscipit?
              Sit, at ex!
            </p>
          </div>
        </div>
      </div>
      <div class="row bottom">
        <div class="col">
          <div class="number">
            <span>01</span>
          </div>
          <div class="col-info text-center">
            <h2>Collection of information</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="col">
          <div class="number">
            <span>02</span>
          </div>
          <div class="col-info text-center">
            <h2>Service invoice sending</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="col">
          <div class="number">
            <span>03</span>
          </div>
          <div class="col-info text-center">
            <h2>Withdrawal of Cargo</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="col">
          <div class="number">
            <span>04</span>
          </div>
          <div class="col-info text-center">
            <h2>Transport Customer Order</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div class="col">
          <div class="number">
            <span>05</span>
          </div>
          <div class="col-info text-center">
            <h2>Successfull Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#procedure {
  background-color: #eef4ed;
  height: 720px;
  .row.main {
    padding: 125px 0 50px;
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
          color: #058283;
          background-color: #daeced;
          padding: 0px 10px;
          border-radius: 5px;
        }
      }
    }
  }
  .row.bottom {
    border-top: 8px solid #cce3de;
    .col {
      position: relative;
    }
    .number {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      span {
        border-radius: 50%;
        padding: 10px;
        background-color: #daeced;
        font-size: 1.2rem;
        font-weight: 700;
        color: #058283;
      }
    }
    .col-info {
      margin-top: 40px;
    }
  }
}
</style>
