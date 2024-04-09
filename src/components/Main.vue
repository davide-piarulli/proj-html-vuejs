<script>
import { store } from "../data/store";
import Jumbotron from "./partials/Jumbotron.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Jumbotron,
  },
};
</script>

<template>
  <Jumbotron />
</template>

<style lang="scss" scoped>
.container {
  height: 1000px;
  img {
    width: 100%;
  }
}
</style>
