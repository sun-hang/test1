<template>
  <!-- 头部 -->
  <el-header class="container-header">
    <!-- 左侧导航收缩按钮 -->
    <el-button
      class="isShowButton"
      type="text"
      :icon="!isShowLeftMenu ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="changeIsShow"
    ></el-button>
    <span class="el-icon-search icon"></span>
    <span class="el-icon-bell icon"></span>
    <!-- 登录登出 -->
    <template v-if="userInfo">
      <!-- 有用户信息展示 -->
      <el-dropdown>
        <el-avatar class="avatar" size="small" :src="avatarUrl"></el-avatar>
        <span class="el-dropdown-link user-name">
          {{ userInfo.name }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><span @click="outLogin">退出登录</span></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </template>
    <!-- 没有用户信息展示 -->
    <template v-else>
      <router-link to="/">注册</router-link>/
      <router-link to="/">登录</router-link>
    </template>
  </el-header>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
/**
 * 头像目前使用本地图片
 */
import avatarUrl from "../../assets/logo.png";
export default {
  data() {
    return {
      avatarUrl,
    };
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
    outLogin() {
      this.$store.commit("getUserInfo", null);
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.container-header {
  box-sizing: border-box;
  position: relative;
  line-height: 60px;
  text-align: right;
  width: 100%;
  font-size: 12px;
  min-width: 650px;
}
.container-header a {
  color: #2b2b2b;
  margin: 0 5px;
}
.container-header .isShowButton {
  position: absolute;
  left: 10px;
  top: 5px;
  font-size: 24px;
  /* border: 1px solid #ccc; */
}
.container-header .user-name {
  margin-right: 40px;
}
.container-header .avatar {
  line-height: 60px;
  vertical-align: middle;
  margin-right: 5px;
}
.container-header .icon {
  font-size: 20px;
  line-height: 60px;
  vertical-align: middle;
  margin-right: 15px;
  cursor: pointer;
}
</style>
