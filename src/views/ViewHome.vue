<template>
  <main>
    <base-header />
    <div class="container">
      <div class="row">
        <base-card class="col-4"/>
        <base-card class="col-4" />
        <base-card class="col-4" />
        <base-card class="col-4" />
        <base-card class="col-4" />
        <base-card class="col-4" />
        <base-card class="col-4" />
        <base-card class="col-4"/>
        <base-card class="col-4"/>
      </div>
    </div>
  </main>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: "ViewHome",

  components: {
    BaseHeader,
    BaseCard,
  },
};
</script>
