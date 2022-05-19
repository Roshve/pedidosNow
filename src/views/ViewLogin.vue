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
          <b-form-group class="mb-3" id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Ingresa tu email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password"
            label-for="input-2"
            class="mb-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="Ingresa tu nombre"
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
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
