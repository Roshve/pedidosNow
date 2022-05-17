<template>
  <div>
    <b-card
      v-for="product in products"
      :key="product.id"
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

      <b-button @click="add(product.id)" variant="primary">Añadir</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    products: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  methods: {
    add(id) {
      this.$emit('click', id)
    }
  }
};
</script>
