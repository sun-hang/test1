<template>
  <el-aside :width="leftWidth + 'px'" class="left-menu">
    <div class="menu-box">
    <el-menu :default-openeds="['1']" :collapse="isShow">
      <template v-for="item in menuArray">
        <el-submenu :index="item.id" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <router-link slot="title" :to="item.path">{{item.title}}</router-link>
          <!-- <span ></span> -->
          </template>
      </el-submenu>
      </template>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
          </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>  
    </div>
  </el-aside>
</template>

<script>
export default {
data(){
    return {
      isShow:false,
      leftWidth:220,
      menuArray:[{
          icon:"el-icon-eleme",
          title:"首页",
          id:1,
          path:"/",
          child:[]
      },
      {
          icon:"el-icon-edit-outline",
          title:"运营管理",
          id:2,
          path:"/operate",
          child:[]
      },
      {
          icon:"el-icon-date",
          title:"用户管理",
          id:3,
          path:"/admin",
          child:[]
      },
      {
          icon:"el-icon-tickets",
          title:"雨伞免费",
          id:4,
          path:"/umbrella",
          child:[]
      },{
          icon:"el-icon-discover",
          title:"地图分布",
          id:5,
          path:"/map",
          child:[]
      },{
          icon:"el-icon-eleme",
          title:"伞架管理",
          id:6,
          path:"/umbrellaStand",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"商家管理",
          id:7,
          path:"/business",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"渠道管理",
          id:8,
          path:"/channel",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"优惠卷管理",
          id:9,
          path:"/coupon",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"消息管理",
          id:10,
          path:"/message",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"数据统计",
          id:11,
          path:"/dataCount",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"乐天订单",
          id:12,
          path:"/order",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"系统管理",
          id:11,
          path:"/system",
          child:[
              {
          icon:"el-icon-eleme",
          title:"数据统计",
          id:11,
          path:"/dataCount",
          child:[]
      },
      {
          icon:"el-icon-eleme",
          title:"乐天订单",
          id:12,
          path:"/order",
          child:[]
      }]
      },]
    }
  },
  methods:{
    showChange(){
        this.isShow = !this.isShow;
        if(!this.isShow){
          this.leftWidth = 220;
        }else{
          this.leftWidth = 65;
        }
    }
  }
}         
</script>

<style>
.left-menu{
    box-sizing: border-box;
    padding-top: 60px;
    background: rgb(2, 41, 76);
}
.left-menu .menu-box{
    height: 100%;
}
.left-menu .menu-box,ul.el-menu{
    background: rgb(2, 21, 40);
    color: #A6ADB4;
    border: none;
}
li.el-menu-item:hover,div.el-submenu__title:hover{
    background: rgb(2, 41, 76);
}
li.el-menu-item,div.el-submenu__title,li.el-menu-item a,div.el-submenu__title a,div.el-submenu__title li{
    color: #A4AAB0;
}
</style>