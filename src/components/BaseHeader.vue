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
          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-icon-cart2 variant="light" />
            </template>
            <b-dropdown-item href="#">aqui iria un v-for</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>
