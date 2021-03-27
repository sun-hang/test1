<template>
  <div class="home-container">
    <Usage :data="usageData" />
    <Profit />
    <Statistics />
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
          company:"￥"
        },
        {
          title: "当月返还雨伞数",
          value: "126,560",
          company:"把"
        },
        {
          title: "当日使用人数",
          value: "126,560",
          company:"位"
        },
        {
          title: "平台余额",
          value: "126,560",
           company:"￥"
        },
        {
          title: "在线伞桩数",
          value: "126,560",
          company:"把"
        },
        {
          title: "当月伞桩投放数",
          value: "126,560",
          company:"把"
        },
        {
          title: "当月销售雨伞数",
          value: "126,560",
          company:"把"
        },
        {
          title: "平台总收益",
          value: "126,560",
          company:"￥"
        },
        {
          title: "当月使用人数",
          value: "126,560",
          company:"人"
        },
        {
          title: "注册用户总数",
          value: "126,560",
          company:"人"
        },
        {
          title: "当月新规注册用户",
          value: "126,560",
          company:"人"
        },
        {
          title: "当月雨伞投放数",
          value: "126,560",
          company:"把"
        },
        {
          title: "当月返还积分数",
          value: "126,560",
          company:"积分"
        },
      ],
    };
  },
  methods: {},
  components: {
    Usage,
    Statistics,
    Profit,
  },
};
</script>

<style></style>
