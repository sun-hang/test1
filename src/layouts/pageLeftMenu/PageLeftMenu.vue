<template>
  <el-aside :width="isShowLeftMenu ? '65px':'220px'" class="left-menu">
    <div class="menu-box">
      <el-menu
        :default-active="menuArray[0].path"
        :collapse="isShowLeftMenu"
        :router="true"
        active-text-color="#ffffff"
      >
        <template v-for="item in menuArray">
          <el-submenu
            :index="item.path"
            :key="item.id + item.path"
            v-if="item.child.length > 0"
            :style="{'padding-left':isShowLeftMenu ? '0px' : '20px'}"
          >
            <template slot="title">
              <i :class="item.icon" ></i>
              <span slot="title">{{ item.title }}</span>
            </template>
          </el-submenu>
          <el-menu-item
            :key="item.id + item.path"
            :index="item.path"
            style="padding-left:40px;"
            v-else
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </el-aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isShow: false,
      leftWidth: 220,
      menuArray: [
        {
          icon: "el-icon-eleme",
          title: "首页",
          id: 1,
          path: "/",
          child: [],
        },
        {
          icon: "el-icon-edit-outline",
          title: "运营管理",
          id: 2,
          path: "/operate",
          child: [],
        },
        {
          icon: "el-icon-date",
          title: "用户管理",
          id: 3,
          path: "/admin",
          child: [],
        },
        {
          icon: "el-icon-tickets",
          title: "雨伞免费",
          id: 4,
          path: "/umbrella",
          child: [],
        },
        {
          icon: "el-icon-discover",
          title: "地图分布",
          id: 5,
          path: "/map",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "伞架管理",
          id: 6,
          path: "/umbrellaStand",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "商家管理",
          id: 7,
          path: "/business",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "渠道管理",
          id: 8,
          path: "/channel",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "优惠卷管理",
          id: 9,
          path: "/coupon",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "消息管理",
          id: 10,
          path: "/message",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "数据统计",
          id: 11,
          path: "/dataCount",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "乐天订单",
          id: 12,
          path: "/order",
          child: [],
        },
        {
          icon: "el-icon-eleme",
          title: "系统管理",
          id: 11,
          path: "/system",
          child: [
            {
              icon: "el-icon-eleme",
              title: "数据统计",
              id: 11,
              path: "/dataCount",
              child: [],
            },
            {
              icon: "el-icon-eleme",
              title: "乐天订单",
              id: 12,
              path: "/order",
              child: [],
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState(['isShowLeftMenu'])
  },
  methods: {
    showChange() {
      this.isShow = !this.isShow;
      if (!this.isShow) {
        this.leftWidth = 220;
      } else {
        this.leftWidth = 65;
      }
    },
  },
};
</script>

<style>
.left-menu {
  box-sizing: border-box;
  padding-top: 60px;
  background: rgb(2, 41, 76);
}
.left-menu .menu-box {
  height: 100%;
}
.left-menu {
  position: relative;
}
.left-menu .menu-box,
ul.el-menu {
  background: rgb(2, 21, 40);
  color: #a6adb4;
  border: none;
}
li.el-menu-item:hover,
div.el-submenu__title:hover {
  background: rgb(2, 41, 76);
}
li.el-menu-item,
div.el-submenu__title,
li.el-menu-item a,
div.el-submenu__title a,
div.el-submenu__title li {
  color: #a4aab0;
  text-align: left;
}
li.el-submenu {
  /* padding-left: 20px; */
}
li.el-menu-item.is-active {
  background: rgb(6, 53, 94);
}
</style>
