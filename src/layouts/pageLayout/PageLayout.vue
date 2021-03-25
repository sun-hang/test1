<template>
    <el-container style="height: 100%;width:100%;">
        <page-left-menu/>
    <el-container class="container-right">
        <page-header/>
        
        <el-main>
            <router-view></router-view>
        </el-main>
  </el-container>
</el-container>
</template>

<script>
import PageHeader from '../pageHeader/PageHeader';
import PageLeftMenu from '../pageLeftMenu/PageLeftMenu';
export default {
    components:{
        PageHeader,
        PageLeftMenu
    }
}
</script>

<style>
.container-right{
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
}
</style>