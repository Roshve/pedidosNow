var app = new Vue({
  el: "#app",
  data: {
    tituloCounter: 'Contador',
    counter: 20,
    validator: './hqdefault.jpg',
  },

  computed: {
    counterMayor() {
      return this.counter >= 30
    },
  },

  methods: {
    suma() {
      return this.counter++
    },
    resta() {
      return this.counter--
    },
  }
})