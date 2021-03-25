<template>
  <el-aside :width="leftWidth + 'px'" class="left-menu">
    <div class="menu-box">
    <el-menu :default-openeds="['1']" :collapse="isShow">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">首页</span>
          </template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">运营管理</span>
          </template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
          </template>
      </el-submenu>

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
          id:1,
          path:"/operate",
          child:[]
      }]
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