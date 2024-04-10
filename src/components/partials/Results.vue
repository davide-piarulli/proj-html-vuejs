<script>
export default {};
</script>

<template>
  <section id="results">
    <div class="container-xl">
      <div class="row main">
        <div class="col text-center">
          <span class="section-title">WHAT ARE WE DOING</span>
          <div class="title">
            <h2>
              <span>Results</span>
              in Numbers
            </h2>
          </div>
        </div>
      </div>
      <div class="row bottom">
        <div class="col text-center">
          <span>128</span>
          <h3>Certifications</h3>
        </div>
        <div class="col text-center">
          <span>230</span>
          <h3>Employees</h3>
        </div>
        <div class="col text-center">
          <span>517</span>
          <h3>Customers</h3>
        </div>
        <div class="col text-center">
          <span>94</span>
          <h3>Countries Served</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#results {
  background-color: #111117;
  height: 585px;
  color: white;
  background-image: url(../../assets/img/bg-10.jpg);
  background-position: center;
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
          color: white;
          background-color: #058283;
          padding: 0px 10px;
          border-radius: 5px;
        }
      }
    }
  }
  .row.bottom {
    .col {
      position: relative;
    }
    span {
      font-size: 2.8rem;
      color: #00a6a6;
      font-weight: 600;
    }
  }
}
</style>
