<template>
  <main class="d-flex flex-column justify-content-between vh-100">
    <base-header />
    <div class="container">
      <div class="row justify-content-center">
        <b-form
          class="col-12 col-lg-4 border rounded-3 py-5 px-5"
          @submit.prevent="onSubmit"
          @reset.prevent="onReset"
          v-if="show"
        >
          <b-form-group
            id="groupUserName"
            label="Nombre"
            label-for="userName"
            class="mb-3"
          >
            <b-form-input
              id="userName"
              v-model="form.name"
              type="text"
              placeholder="Ingresa tu nombre"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="groupUserLastName"
            label="Apellido"
            label-for="userLastName"
            class="mb-3"
          >
            <b-form-input
              id="userLastName"
              v-model="form.lastName"
              type="text"
              placeholder="Ingresa tu apellido"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="mb-3"
            id="groupUserEmail"
            label="Email:"
            label-for="userEmail"
          >
            <b-form-input
              id="userEmail"
              v-model="form.email"
              type="email"
              placeholder="Ingresa tu email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="mb-3"
            id="groupUserPassword"
            label="Contraseña"
            label-for="userPassword"
          >
            <b-form-input
              id="userPassword"
              v-model="form.password"
              type="password"
              placeholder="Ingresa tu contraseña"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
    <base-footer />
  </main>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "ViewLogin",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        lastName: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.form));
    },
    onReset() {
      this.form.email = "";
      this.form.name = "";
      this.form.lastName = "";
      this.form.password = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
