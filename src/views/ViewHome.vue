<template>
  <main>
    <base-header :carts="carts" />
    <div class="container">
      <base-card
        :products="products"
        @add="addCart"
        class="row justify-content-center mt-5 gy-3"
      />
    </div>
    {{ carts }}
    <base-footer />
  </main>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseFooter from '@/components/BaseFooter.vue';

export default {
  name: "ViewHome",

  components: {
    BaseHeader,
    BaseCard,
    BaseFooter,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          img: "https://bangho.vtexassets.com/arquivos/ids/160273-300-300?v=637721612250300000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 2,
          img: "https://bangho.vtexassets.com/arquivos/ids/160890-300-300?v=637795821123330000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 3,
          img: "https://bangho.vtexassets.com/arquivos/ids/161038-300-300?v=637853575984600000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 4,
          img: "https://bangho.vtexassets.com/arquivos/ids/160323-300-300?v=637726026898900000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 5,
          img: "https://bangho.vtexassets.com/arquivos/ids/161005-300-300?v=637846788902170000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 6,
          img: "https://bangho.vtexassets.com/arquivos/ids/160225-300-300?v=637709454927900000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 7,
          img: "https://bangho.vtexassets.com/arquivos/ids/160889-300-300?v=637795820476770000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 8,
          img: "https://bangho.vtexassets.com/arquivos/ids/160894-300-300?v=637795823961970000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
        {
          id: 9,
          img: "https://bangho.vtexassets.com/arquivos/ids/160148-300-300?v=637697596798300000&width=300&height=300&aspect=true",
          title: "Lorem ipsum dolor sit amet consectetur",
          price: "$200",
        },
      ],
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
