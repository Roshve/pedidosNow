<template>
  <main class="d-flex flex-column justify-content-between vh-100">
    <base-header />
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-md-6">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="First Slide"
              img-src="https://picsum.photos/1024/480/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              img-src="https://picsum.photos/1024/480/?image=12"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              img-src="https://picsum.photos/1024/480/?image=22"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <div class="col-12 col-md-6">
          <div class="d-flex flex-column">
            <h4>El titulo del producto</h4>
            <h5>Subtitulo del producto</h5>
            <p><span>estrellas</span> <span>Escribe una review</span></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              veritatis vel error neque eligendi mollitia quod at, enim
              dignissimos inventore rem modi harum expedita optio numquam
              provident ullam sed tempora?
            </p>
            <span class="mb-5">precio $200</span>
            <b-button variant="primary">Agregar al carrito</b-button>
          </div>
        </div>
      </div>
    </div>
    <base-footer />
  </main>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "../components/BaseFooter.vue";

export default {
  name: "ViewInfo",

  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
