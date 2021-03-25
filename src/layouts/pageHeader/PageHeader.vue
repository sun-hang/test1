<template>
  <el-header
    class="container-header"
    style="text-align: right;width:100%; font-size: 12px"
  >
    <el-button
      class="isShowButton"
      type="text"
      :icon="!isShowLeftMenu ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="changeIsShow"
    ></el-button>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </el-header>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getUserInfo();
  },
  computed: {
    ...mapState(["userInfo", "isShowLeftMenu"]),
  },
  methods: {
    ...mapActions(["getUserInfo"]),
    ...mapMutations(["getIsShowLeftMenu"]),
    changeIsShow() {
      this.getIsShowLeftMenu(!this.isShowLeftMenu);
    },
  },
};
</script>

<style>
.container-header {
  box-sizing: border-box;
  position: relative;
}
.isShowButton {
  position: absolute;
  left: 10px;
  top: 10px;
  /* border: 1px solid #ccc; */
}
</style>
