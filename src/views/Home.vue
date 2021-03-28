<template>
  <div class="home">
    <MyHome />
  </div>
</template>

<script>
import MyHome from "../components/home/index";
import store from '../store/index';
export default {
  name: "Home",
  // beforeRouteEnter(to, from, next) {
  //   if(!store.state.userInfo){
  //     next('/login')
  //   }
  // },
  components: {
    MyHome,
  },
};
</script>
