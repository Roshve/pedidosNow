<template>
  <div id="app">
    <view-home />
  </div>
</template>

<script>
// import ChallengeTable from "./components/ChallengeTable.vue";
import ViewHome from "./views/ViewHome.vue";

export default {
  name: "App",
  components: {
    ViewHome,
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
