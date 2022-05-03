Vue.component("challenge-table", {
  template: `
  <section>
    <table class="table" border="0" cellspacing="0" cellpadding="0">
      <tr v-if="header" class="table-header">
        <th v-for="(title, index) in titles" :keys="index">{{ title }}</th>
      <tr/>
      <tr :class="tablePar(index)" v-for="(user, index) in users" :key="index">
        <th>{{ user.id}}</th>
        <th>{{ user.name }}</th>
        <th>{{ user.lastName }}</th>
        <th>{{ user.province }}</th>
      <tr/>
    </table>
  </section>`,
  props: {
    header: {
      type: Boolean,
      default: false,
      require: false,
    },
    titles: {
      type: Array,
      default: () => [],
      require: false
    },
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
    first: {
      titles: ['ID', 'Nombre', 'Apellido', 'Provincia'],
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
      ],
    },
    second: {
      titles: ['ID', 'Nombre', 'Apellido', 'Provincia'],
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
      ],
    },
    third: {
      titles: ['ID', 'Nombre', 'Apellido', 'Provincia'],
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
      ],
    },
  },

  template: `
  <main class="box">
    <challenge-table :users="first.users" :titles="first.titles" header />
    <challenge-table :users="second.users" />
    <challenge-table :users="third.users" />
  </main>`,
})
