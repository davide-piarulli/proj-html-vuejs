<script>
export default {};
</script>

<template>
  <section id="contact">
    <div class="container-xl">
      <div class="row main">
        <div class="col-7">
          <span class="section-title">SEND A MESSAGE</span>
          <div class="title">
            <h2>
              Get in
              <span>Touch</span>
            </h2>
          </div>
          <div class="body">
            <p>We will respond to your message you as soon as possible</p>

            <form class="row g-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="tel"
                  class="form-control"
                  id="inputPhone"
                  placeholder="Phone"
                />
              </div>

              <div class="col-md-6">
                <select id="moreInfo" class="form-select">
                  <option selected>More Info</option>
                  <option>Info1</option>
                  <option>Info2</option>
                  <option>Info3</option>
                </select>
              </div>

              <div class="mb-2">
                <textarea
                  class="form-control"
                  id="textArea"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn" type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-5">
          <div class="corporation">
            <h4>Example Inc.</h4>
            <div class="corporation-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ut.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ut.
              </p>
              <div class="phone d-flex mb-3">
                <i class="fa-solid fa-phone"></i>
                <span class="align-content-center m-2">+1 (305) 1234-5678</span>
              </div>
              <div class="email d-flex mb-3">
                <i class="fa-solid fa-envelope"></i>
                <span class="align-content-center m-2">hello@example.com</span>
              </div>
              <div class="location d-flex mb-3">
                <i class="fa-solid fa-location-pin"></i>
                <span class="align-content-center m-2">Main Avenue, 987</span>
              </div>
              <button>VIEW MAP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#contact {
  background-color: white;
  .row.main {
    padding: 135px 0 135px;
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
      .btn {
        background-color: #058283;
        color: white;
        padding: 5px 20px;
      }
      .form-control,
      .form-select {
        background-color: #ececec;
      }
    }
    .corporation {
      padding: 15px 0 15px;
      .corporation-body {
        i {
          color: #058283;
          background-color: #daeced;
          padding: 15px;
          border-radius: 50%;
        }
        span {
          color: #198ea0;
        }
        button {
          padding: 5px 10px;
          border-radius: 3px;
          border: 1px solid #249292;
          color: #248b87;
          background-color: white;
        }
      }
    }
  }
}
</style>
