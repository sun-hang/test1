<template>
  <div class="statistics-container">
    <div class="statistics-title">
      <div class="tags">
        <div
          class="item line"
          :style="{ transform: `translateX(${tagX}px)` }"
        ></div>
        <div class="item" @click="tagChageClick(0, '用户数')">用户数</div>
        <div class="item" @click="tagChageClick(80, '订单数')">订单数</div>
      </div>
      <div class="right">
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
    <ve-histogram
      style="padding:0 10px;"
      :data="chartData"
      :extend="chartExtend"
    ></ve-histogram>
  </div>
</template>

<script>
import VeHistogram from "v-charts/lib/histogram.common";
import "echarts/lib/component/title";
// 收益实时统计  //业务逻辑就先没写，比如日期的切换后做的一些页面数据修改重新渲染
export default {
  props: ["chartData", "chartExtend"],
  data() {
    return {
      count: "124,543,233",
      dateSelectVal: "",
      tagX: 0,
    };
  },

  methods: {
    tagChageClick(val, text) {
      this.tagX = val;
      this.$emit("statisticsTagChange", text);
    },
    onChange() {
      this.$emit("statisticsDateChange", this.dateSelectVal);
    },
  },
  components: {
    VeHistogram,
  },
};
</script>

<style>
.statistics-container {
  width: 98%;
  background: #fff;
  margin: 20px auto;
  padding: 5px 0px 10px;
  box-sizing: border-box;
}
.statistics-title {
  padding: 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.tags {
  position: relative;
  display: flex;
  height: 100%;
}
.tags .item {
  width: 80px;
  height: 100%;
  cursor: pointer;
}
.tags::after {
  position: absolute;
  content: "";
  left: -5%;
  bottom: -20px;
  width: 105%;
  height: 5px;
  background: #fff;
}
.tags .line {
  position: absolute;
  bottom: -19px;
  left: 0;
  width: 80px;
  height: 3px;
  background: #46a3fc;
  z-index: 1;
  transform: translateX(0px);
  transition: all 0.2s linear;
}
</style>
