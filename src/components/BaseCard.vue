<template>
  <b-card
    :title="product.title"
    :img-src="product.img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2 col-12 col-sm-6 col-md-6"
  >
    <b-card-text>
      {{ product.price }}
    </b-card-text>

    <b-button @click="addToCart" variant="primary">Añadir</b-button>
  </b-card>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    product: {
      type: Object,
      default: () => {},
      required: true,
    },
  },

  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product.id);
    },
  },
};
</script>
