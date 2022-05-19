<template>
  <header>
    <b-navbar class="px-5 py-3" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">PedidosNow</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">
          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-icon-person-circle variant="light" />
              <span class="ms-2">Iniciar Sesion</span>
            </template>
            <b-dropdown-item href="#">Iniciar Sesión</b-dropdown-item>
            <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right no-caret class="me-5 pe-5">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-icon-cart2 variant="light" />
              <span class="ms-2 p-1 px-2 cart-shopping-counter">{{ cartlist }}</span>
            </template>
            <b-dropdown-item
              class="cart-shopping"
              v-for="(cart, index) in carts"
              :key="index"
            >
              <img class="cart-shopping-img" :src="cart.img" alt="" />
              <span class="cart-shopping-title">{{ cart.title }}</span>
              <span class="cart-shopping-price ms-auto mt-2 fw-bold">{{ cart.price }}</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "BaseHeader",

  props: {
    carts: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  computed:{
    cartlist() {
      return this.carts.length
    }
  }
};
</script>
<style>
.cart-shopping {
  border-radius: 8px;
  background: #fff;
}

.cart-shopping a {
  display: flex;
  flex-direction: column;
}

.cart-shopping-img {
  height: 120px;
}

.cart-shopping-title {
  white-space: pre-wrap;
}

.cart-shopping-counter {
  color: #fff;
  background: rgb(244, 85, 85);
  border-radius: 4px;
}
</style>
