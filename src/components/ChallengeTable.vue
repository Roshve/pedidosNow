<template>
  <section>
    <table class="table" border="0" cellspacing="0" cellpadding="0">
      <tr v-if="header" class="table-header">
        <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
      </tr>
      <tr />
      <tr :class="tablePar(index)" v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.province }}</td>
      </tr>

      <tr />
    </table>
  </section>
</template>
<script>
export default {
  name: 'ChallengeTable',

  props: {
    header: {
      type: Boolean,
      default: false,
      required: false,
    },
    titles: {
      type: Array,
      default: () => [],
      required: false,
    },
    users: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  methods: {
    tablePar(index) {
      return index % 2 === 0 ? "table-content-par" : "table-content-impar";
    },
  },
};
</script>