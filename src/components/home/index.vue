<template>
  <div class="home-container">
    <Usage :data="usageData" />
    <Profit
      :profitChartData="profitChartData"
      @profitTextChange="profitTextChange"
      @profitDateChange="profitDateChange"
      :profitChartExtend="profitChartExtend"
    />
    <Statistics
      :chartData="statisticsChartData"
      @statisticsTagChange="statisticsTagChange"
      @statisticsDateChange="statisticsDateChange"
      :chartExtend="statisticsChartExtend"
    />
  </div>
</template>

<script>
import Usage from "./Usage/index";
import Statistics from "./Statistics/index";
import Profit from "./Profit/index";

export default {
  data() {
    return {
      usageData: [
        {
          title: "当月销售雨伞数",
          value: "126,560",
          company: "￥",
        },
        {
          title: "当月返还雨伞数",
          value: "126,560",
          company: "把",
        },
        {
          title: "当日使用人数",
          value: "126,560",
          company: "位",
        },
        {
          title: "平台余额",
          value: "126,560",
          company: "￥",
        },
        {
          title: "在线伞桩数",
          value: "126,560",
          company: "把",
        },
        {
          title: "当月伞桩投放数",
          value: "126,560",
          company: "把",
        },
        {
          title: "当月销售雨伞数",
          value: "126,560",
          company: "把",
        },
        {
          title: "平台总收益",
          value: "126,560",
          company: "￥",
        },
        {
          title: "当月使用人数",
          value: "126,560",
          company: "人",
        },
        {
          title: "注册用户总数",
          value: "126,560",
          company: "人",
        },
        {
          title: "当月新规注册用户",
          value: "126,560",
          company: "人",
        },
        {
          title: "当月雨伞投放数",
          value: "126,560",
          company: "把",
        },
        {
          title: "当月返还积分数",
          value: "126,560",
          company: "积分",
        },
      ],
      profitChartData: {
        columns: ["时间", "销售额"],
        rows: [
          { 时间: "10:00", 销售额: 1900 },
          { 时间: "11:00", 销售额: 700 },
          { 时间: "12:00", 销售额: 2800 },
          { 时间: "13:00", 销售额: 3104 },
          { 时间: "14:00", 销售额: 2200 },
          { 时间: "15:00", 销售额: 4300 },
          { 时间: "16:00", 销售额: 2200 },
        ],
      },
      profitChartExtend: {
        series: {
          label: {
            normal: {
              show: true,
              color: "#2b2b2b",
              fontSize: 18,
            },
          },
          symbolSize: 10,
          color: ["#2b2b2b"],
        },
        title: {
          show: true,
          text: "今天日收益总额：124,543,233元",
        },
      },
      statisticsChartData: {
        columns: ["日期", "用户数"],
        rows: [
          { 日期: "10月", 用户数: 300 },
          { 日期: "11月", 用户数: 760 },
          { 日期: "12月", 用户数: 1000 },
          { 日期: "1月", 用户数: 510 },
          { 日期: "2月", 用户数: 125 },
          { 日期: "3月", 用户数: 510 },
          { 日期: "4月", 用户数: 260 },
          { 日期: "5月", 用户数: 300 },
          { 日期: "6月", 用户数: 770 },
          { 日期: "7月", 用户数: 510 },
          { 日期: "8月", 用户数: 250 },
          { 日期: "9月", 用户数: 350 },
        ],
      },
      statisticsChartExtend: {
        series: {
          label: {
            normal: {
              show: false,
              color: "#2b2b2b",
              fontSize: 18,
            },
          },
          symbolSize: 10,
          barWidth: 30,
          color: ["#46A3FC"],
        },
        title: {
          show: true,
          text: "用户总数：2,090人",
        },
      },
    };
  },
  methods: {
    /**
     *监听收益实时统计的文本切换的事件，
     *根据改变的文本进行折线图数据切换
     */
    profitTextChange(text) {
      console.log(text);
    },
    /**
     * 监听收益实时统计的时间切换的事件，
     * 根据改变的时间来发送后台改变折线图的数据修改
     */
    profitDateChange(time) {
      console.log(time);
    },
    /**
     *监听用户数和订单数的文本切换的事件，
     *根据改变的文本进行柱状图的数据切换
     */
    statisticsTagChange(tag) {
      console.log(tag);
    },
    /**
     * 监听用户数和订单数的时间切换的事件，
     * 根据改变的时间来发送后台改变柱状图的数据修改
     */
    statisticsDateChange(time) {
      console.log(time);
    },
  },
  components: {
    Usage,
    Statistics,
    Profit,
  },
};
</script>

<style></style>
