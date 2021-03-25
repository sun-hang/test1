<template>
  <div id="app">
    <PageLayout/>
  </div>
</template>

<script>
import PageLayout from './layouts/pageLayout/PageLayout'
export default {
  data(){
    return {
      isShow:false,
      leftWidth:220
    }
  },
  components:{
    PageLayout
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
:root,body{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
