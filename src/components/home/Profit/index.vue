<template>
  <div class="profit-container">
    <div class="profit-title">
      <h3>收益实时统计</h3>
      <div class="right">
        <el-button
          size="mini"
          @click="btnTextChange('今日')"
          :type="btnText === '今日' ? 'primary' : 'text'"
          >今日</el-button
        >
        <el-button
          size="mini"
          @click="btnTextChange('本周')"
          :type="btnText === '本周' ? 'primary' : 'text'"
          >本周</el-button
        >
        <el-button
          size="mini"
          @click="btnTextChange('本月')"
          :type="btnText === '本月' ? 'primary' : 'text'"
          >本月</el-button
        >
        <el-button
          @click="btnTextChange('本年')"
          :type="btnText === '本年' ? 'primary' : 'text'"
          size="mini"
          style="margin-right:15px;"
          >本年</el-button
        >
        <el-date-picker
          size="small"
          v-model="dateSelectVal"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="onChange"
        >
        </el-date-picker>
      </div>
    </div>
    <ve-line
      style="padding:0 10px;"
      :data="profitChartData"
      :extend="profitChartExtend"
    ></ve-line>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line.common";
import "echarts/lib/component/title";
// 收益实时统计  //业务逻辑就先没写，比如日期的切换后做的一些页面数据修改重新渲染
export default {
  porps: ["profitChartData", "profitChartExtend"],
  data() {
    return {
      count: "124,543,233",
      btnText: "今日",
      dateSelectVal: "",
    };
  },
  mounted(){
      console.log(this.chartData,this.chartExtend);
  },
  methods: {
    btnTextChange(val) {
      this.btnText = val;
      this.$emit("profitTextChange", this.btnText);
    },
    onChange() {
      this.$emit("profitDateChange", dateSelectVal);
    },
  },
  components: {
    VeLine,
  },
};
</script>

<style>
.profit-container {
  width: 98%;
  background: #fff;
  margin: 20px auto;
  padding: 5px 0px 10px;
  box-sizing: border-box;
}
.profit-title {
  padding: 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #ccc;
  margin-bottom: 30px;
  box-sizing: border-box;
}
.profit-title h3 {
  margin-left: 10px;
}
</style>
