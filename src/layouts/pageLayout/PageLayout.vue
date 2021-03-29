<template>
  <el-container>
    <page-left-menu />
    <el-container class="container-right">
      <page-header />

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PageHeader from "../pageHeader/PageHeader";
import PageLeftMenu from "../pageLeftMenu/PageLeftMenu";
export default {
  components: {
    PageHeader,
    PageLeftMenu,
  },
};
</script>

<style>
.el-container {
  height: 100%;
  width: 100%;
}
.el-main,.page-header{
  min-width:650px;
}
.container-right {
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
}
.el-main {
  background-color: #f0f2f5;
  width: 100%;
  height: calc(100% - 60px);
}
</style>
