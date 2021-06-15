<template>
  <section class="testimonial-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 testi-img">
          <div class="img-box">
            <div class="circle"></div>
            <div class="img-box-inner">
              <img src="../assets/img/testimonial/111.png" alt="testi img" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            id="myCarousel"
            class="carousel slide"
            data-bs-interval="5000"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item testi-item active"
                data-color="#fb9c9a"
                data-img="../assets/img/testimonial/111.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nobis ratione, harum doloremque aspernatur aliquid quaerat
                  dolores voluptates recusandae qui repellat illum, amet ipsa
                  debitis fugiat commodi nemo suscipit ad!
                </p>
                <h3>john doe 1 - <span>web developer</span></h3>
              </div>
              <div
                class="carousel-item testi-item"
                data-color="#fbd39a"
                data-img="../assets/img/testimonial/222.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nobis ratione, harum doloremque aspernatur aliquid quaerat
                  dolores voluptates recusandae qui repellat illum, amet ipsa
                  debitis fugiat commodi nemo suscipit ad!
                </p>
                <h3>john doe 2 - <span>web developer</span></h3>
              </div>
              <div
                class="carousel-item testi-item"
                data-color="#9ab0fb"
                data-img="../assets/img/testimonial/333.png"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nobis ratione, harum doloremque aspernatur aliquid quaerat
                  dolores voluptates recusandae qui repellat illum, amet ipsa
                  debitis fugiat commodi nemo suscipit ad!
                </p>
                <h3>john doe 3 - <span>web developer</span></h3>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <img src="../assets/img/icons/left-arrow.png" alt="prev" />
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <img src="../assets/img/icons/right-arrow.png" alt="prev" />
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <router-link to="/">
        <button class="btn">Atras</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  mounted: {
    click() {
      const myCarousel = document.getElementById("myCarousel");
      myCarousel.addEventListener("slid.bs.carousel", function () {
        const activeItem = this.querySelector(".active");
        document.querySelector(".testi-img img").src =
          activeItem.getAttribute("data-img");
        document.querySelector(".testi-img .circle").style.backgroundColor =
          activeItem.getAttribute("data-color");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.btn {
  @include button();
  position: absolute;
  bottom: 25px;
  right: 5px;
  opacity: 1;
}

.testimonial-section {
  background-color: $white;
  padding: 5rem 0;
  min-height: 100vh;
}
.testi-img .img-box {
  max-width: 22.5rem;
  margin: auto;
  text-align: center;
  position: relative;
}
.testi-img .circle {
  height: 22.5rem;
  width: 22.5rem;
  background-color: $Tomato;
  position: absolute;
  border-radius: 50%;
  left: 0;
  bottom: 0;
  transition: all 0.5s ease;
}
.testi-img .img-box-inner {
  position: relative;
  border-radius: 0 0 11.25rem 11.25rem;
  overflow: hidden;
}
.testi-img .img-box-inner img {
  max-width: 19.375rem;
}
.testimonial-section .carousel-inner {
  margin-bottom: 1.25rem;
}
.testimonial-section .carousel-control-prev {
  margin-right: 0.625rem;
}
.testimonial-section .carousel-control-next,
.testimonial-section .carousel-control-prev {
  position: relative;
  height: 2.1875rem;
  width: 2.1875rem;
  background-color: $Tomato;
  display: inline-flex;
  border-radius: 50%;
}
.testimonial-section .carousel-control-prev img,
.testimonial-section .carousel-control-next img {
  width: 0.9375rem;
}
.testi-item h3,
.testi-item p {
  font-size: 1.125rem;
}
.testi-item h3 {
  text-transform: capitalize;
}

@media (max-width: $desktop_width) {
  .testi-img .img-box {
    max-width: 18.75rem;
  }
  .testi-img .circle {
    height: 18.75rem;
    width: 18.75rem;
  }
  .testi-img .img-box-inner {
    border-radius: 0 0 150px 150px;
  }
  .testi-img .img-box-inner img {
    max-width: 14.375rem;
  }
}
@media (max-width: $large_desktop) {
  .testi-img {
    margin-bottom: 1.5625rem;
  }
}
</style>