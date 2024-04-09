<script>
export default {};
</script>

<template>
  <section id="about">
    <div class="container-xl">
      <div class="row main">
        <div class="col-8">
          <span class="section-title">WHO WE ARE</span>
          <div class="title">
            <h2>
              <span><i class="fa-regular fa-gem"></i> Excellence</span>
              in Transport
            </h2>
          </div>
          <div class="body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              consequatur necessitatibus in natus ut odio facere nulla quia
              consectetur nemo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              consequatur necessitatibus in natus ut odio facere nulla quia
              consectetur nemo.
            </p>
            <p class="indent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              consequatur necessitatibus in natus ut odio facere nulla quia
              consectetur nemo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              autem?
            </p>
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="vehicles">
            <h4>Vehicle Types</h4>
            <div class="vehicle d-flex">
              <img src="../../assets/img/truck-1.png" alt="vehicle" />
              <div class="vehicle-info">
                <h4>Light</h4>
                <p>Max Weight 1200kg</p>
              </div>
            </div>
            <div class="vehicle d-flex">
              <img src="../../assets/img/truck-1.png" alt="vehicle" />
              <div class="vehicle-info">
                <h4>Light</h4>
                <p>Max Weight 1200kg</p>
              </div>
            </div>
            <div class="vehicle d-flex">
              <img src="../../assets/img/truck-1.png" alt="vehicle" />
              <div class="vehicle-info">
                <h4>Light</h4>
                <p>Max Weight 1200kg</p>
              </div>
            </div>
          </div>
          <div class="certs">
            <h4>Certifications</h4>
            <div class="certs-logo">
              <img src="../../assets/img/certificate.png" alt="" />
              <img src="../../assets/img/certificate.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  background-color: white;
  height: 100vh;
  .row.main {
    padding: 135px 0 150px;
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
    .body {
      .indent {
        padding: 10px 30px;
        border-left: 5px solid #daeced;
      }
    }
    .vehicle {
      border-bottom: 1px solid black;
      padding: 15px 0 15px;
      img {
        width: 120px;
        background-color: #daeced;
        padding: 5px;
        border-radius: 5px;
        margin-right: 20px;
      }
    }
    .certs {
      margin: 50px 0;
      img {
        width: 150px;
        margin-right: 20px;
      }
    }
  }
}
</style>
