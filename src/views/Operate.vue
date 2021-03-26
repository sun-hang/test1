<template>
  <MyTableComponent :key="key" />
</template>

<script>
import MyTableComponent from "../components/Operate/index";
export default {
  data() {
    return {
      key: 0,
    };
  },
  components: {
    MyTableComponent,
  },
  beforeRouteUpdate(to, from, next) {
    this.key = this.key + 1;
    next();
  },
};
</script>

<style></style>
