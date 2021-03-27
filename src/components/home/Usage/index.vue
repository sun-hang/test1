<template>
  <div class="usage-container">
    <div class="title-text">
      <h3>使用情况实时统计</h3>
    </div>
    <div class="usage-box">
      <el-row v-for="(item, index) in tableData" :key="item.length + index">
        <el-col :span="6" v-for="(t, index) in item" :key="index">
          <div class="item" v-if="t">
            <div class="title">{{ t.title }}</div>
            <div class="value">{{ t.value }}<span>{{t.company}}</span></div>
          </div>
          <div class="item" v-else></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 使用情况统计
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    tableData() {
      const tableData = [];
      let line = 4;
      let len = Math.ceil(this.data.length / line);
      for (let i = 0; i < len; i++) {
        tableData[i] = [];
        for (let j = 0; j < line; j++) {
          tableData[i][j] = this.data[line * i + j];
        }
      }
      return tableData;
    },
  },
};
</script>

<style>
.usage-container {
  width: 98%;
  background: #fff;
  margin: 10px auto;
}
.usage-container .title-text{
  border-bottom: 2px solid #ccc;
}
.usage-container .title-text h3 {
  /* font-weight: 300; */
  text-align: left;
  /* font-size: 1em; */
  padding: 15px 15px 0;
  color: #2c3e50;
}
.usage-container .usage-box {
  width: 100%;
}
.usage-container .usage-box .item {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  height: 110px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.usage-container .usage-box .item div{
    width: 100%;
    margin: 10px auto -5px;
    text-align: left;
    padding-left:20% ;
}
.usage-container .usage-box .item .title{
    margin-left: 10px;
    font-size: 14px;
    color: #aaa;
}
.usage-container .usage-box .item .value{
    font-size: 24px;
    font-weight: bold;
    color: #646363;
}
.usage-container .usage-box .item .value span{
    font-size: 18px;
}
</style>
