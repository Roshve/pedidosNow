Vue.component("challenge-table", {
  template: `
  <section>
    <table class="table" border="0" cellspacing="0" cellpadding="0">
      <tr class="table-header">
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Provincia</th>
      <tr/>
      <tr :class="tablePar(index)" v-for="(user, index) in users" :key="index">
        <th>{{ index + 1 }}</th>
        <th>{{ user.name }}</th>
        <th>{{ user.lastName }}</th>
        <th>{{ user.province }}</th>
      <tr/>
    </table>
  </section>`,
  props: {
    users: {
      type: Array,
      default: () => [],
      require: true
    },
  },
  methods: {
    tablePar(index) {
      return index % 2 === 0 ? 'table-content-par' : 'table-content-impar'
    }
  },
})

var app = new Vue({
  el: '#app',

  data: {
    users: [
      {
        id: 1,
        name: 'Jose',
        lastName: 'Velez',
        province: 'San Luis'
      },
      {
        id: 2,
        name: 'Ramon',
        lastName: 'Gomez',
        province: 'Santa Fe'
      },
      {
        id: 3,
        name: 'Marcelo',
        lastName: 'Godino',
        province: 'Buenos Aires'
      },
      {
        id: 4,
        name: 'Ramiro',
        lastName: 'Gimenez',
        province: 'Salta'
      }
    ]
  },

  template: `
  <main class="box">
    <challenge-table :users="users">
    </challenge-table>
  </main>`,
})
