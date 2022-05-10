<template>
  <main id="app" class="box">
    <challenge-table :users="first.users" :titles="first.titles" header />
    <challenge-table :users="second.users" />
    <challenge-table :users="third.users" />
  </main>
</template>

<script>
import ChallengeTable from "./components/ChallengeTable.vue";

export default {
  name: "App",
  components: {
    ChallengeTable
  },

  data: () => ({
    first: {
      titles: ["ID", "Nombre", "Apellido", "Provincia"],
      users: [
        {
          id: 1,
          name: "Jose",
          lastName: "Velez",
          province: "San Luis",
        },
        {
          id: 2,
          name: "Ramon",
          lastName: "Gomez",
          province: "Santa Fe",
        },
        {
          id: 3,
          name: "Marcelo",
          lastName: "Godino",
          province: "Buenos Aires",
        },
        {
          id: 4,
          name: "Ramiro",
          lastName: "Gimenez",
          province: "Salta",
        },
      ],
    },
    second: {
      titles: ["ID", "Nombre", "Apellido", "Provincia"],
      users: [
        {
          id: 1,
          name: "Jose",
          lastName: "Velez",
          province: "San Luis",
        },
        {
          id: 2,
          name: "Ramon",
          lastName: "Gomez",
          province: "Santa Fe",
        },
        {
          id: 3,
          name: "Marcelo",
          lastName: "Godino",
          province: "Buenos Aires",
        },
        {
          id: 4,
          name: "Ramiro",
          lastName: "Gimenez",
          province: "Salta",
        },
      ],
    },
    third: {
      titles: ["ID", "Nombre", "Apellido", "Provincia"],
      users: [
        {
          id: 1,
          name: "Jose",
          lastName: "Velez",
          province: "San Luis",
        },
        {
          id: 2,
          name: "Ramon",
          lastName: "Gomez",
          province: "Santa Fe",
        },
        {
          id: 3,
          name: "Marcelo",
          lastName: "Godino",
          province: "Buenos Aires",
        },
        {
          id: 4,
          name: "Ramiro",
          lastName: "Gimenez",
          province: "Salta",
        },
      ],
    },
  }),
};
</script>
