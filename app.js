var app = new Vue({
  el: "#app",
  data: {
    message: '¡Hola Mundo!',
    counter: 0,
    validator: 'Alto ahi velocista'
  },

  computed: {
    hola() {
      return this.message.split('').reverse().join('')
    },

    counterMayor() {
      return this.counter >= 5
    },
  },

  methods: {
    suma() {
      return this.counter++
    },
    resta() {
      return this.counter--
    },
    multipl() {
      return this.counter * 2
    },
  }
})