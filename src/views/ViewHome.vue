<template>
  <main>
    <base-header :carts="carts" />
    <div class="container">
      <div class="row justify-content-center mt-5 gy-3">
        <base-card
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addCart"
        />
      </div>
    </div>
    <base-footer />
  </main>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import products from "@/api/service.json"

export default {
  name: "ViewHome",

  components: {
    BaseHeader,
    BaseCard,
    BaseFooter,
  },

  data() {
    return {
      products,
      carts: [],
    };
  },

  methods: {
    addCart(id) {
      let result = this.products.find((prod) => {
        return prod.id === id;
      });
      this.carts.push(result);
    },
  },
};
</script>
