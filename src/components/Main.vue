<script>
import { store } from "../data/store";
import Jumbotron from "./partials/Jumbotron.vue";
import About from "./partials/About.vue";
import Services from "./partials/Services.vue";
import Procedure from "./partials/Procedure.vue";
import Results from "./partials/Results.vue";
import Feedback from "./partials/Feedback.vue";
import Contact from "./partials/Contact.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Jumbotron,
    About,
    Services,
    Procedure,
    Results,
    Feedback,
    Contact,
  },
};
</script>

<template>
  <Jumbotron />
  <About />
  <Services />
  <Procedure />
  <Results />
  <Feedback />
  <Contact />
</template>

<style lang="scss" scoped>
.container {
  height: 1000px;
  img {
    width: 100%;
  }
}
</style>
