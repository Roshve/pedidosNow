<template>
  <div id="app">
    <view-register />
  </div>
</template>

<script>
// import ChallengeTable from "./components/ChallengeTable.vue";
// import ViewInfo from '@/views/ViewInfo.vue';
// import ViewLogin from '@/views/ViewLogin.vue';
import ViewRegister from '@/views/ViewRegister.vue';
// import ViewHome from '@/views/ViewHome.vue';

export default {
  name: "App",
  components: {
    ViewRegister,
  },
};
</script>
