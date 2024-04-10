<script>
export default {
  props: {
    navItem: Array,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="row row-cols-3">
    <div class="col" v-for="(item, index) in navItem" :key="index">
      <div class="footer-card">
        <h5 :id="`${index}`">{{ item.title }}</h5>
        <ul>
          <li v-for="(element, index) in item.submenu" :key="index">
            <p class="">{{ element.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_general.scss";
.footer-card {
  padding: 45px;
  background-color: #19191f;
  border-radius: 10px;
}
li {
  p::before {
    font-family: fontawesome;
    content: "\f054";
    margin-right: 10px;
  }
}
</style>
