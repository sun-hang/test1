<template>
  <div class="search-container">
    <el-row>
      <el-col :span="4">
        <span>状态：</span>
        <el-select
          size="small"
          @change="selectChange"
          v-model="status"
          :placeholder="statusSelectArr[0].value"
        >
          <el-option
            v-for="item in statusSelectArr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <span>身份：</span>
        <el-select size="small" v-model="identity" placeholder="全部">
          <el-option
            v-for="item in []"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="4">
        <span>性别：</span>
        <el-select
          size="small"
          v-model="sex"
          @change="selectChange"
          :placeholder="sexSelectArr[0].value"
        >
          <el-option
            v-for="item in sexSelectArr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :span="5">
        <span>会员类型：</span>
        <el-select size="small" v-model="vip" placeholder="全部">
          <el-option
            v-for="item in []"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="7">
        <el-input
          type="text"
          v-model="query"
          size="small"
          style="width:70%;margin-right:5%;"
          placeholder="请输入内容"
        ></el-input>
        <el-button @click="queryBtn" type="primary" size="small"
          >查询</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["queryValue", "statusValue", "identityValue", "sexValue", "vipValue"],
  data() {
    return {
      sexSelectArr: [
        { value: "全部", label: "全部" },
        { value: "男", label: "男" },
        { value: "女", label: "女" },
        { value: "其他", label: "其他" },
      ],
      statusSelectArr: [
        { value: "全部", label: "全部" },
        { value: "正常", label: "正常" },
        { value: "冻结", label: "冻结" },
      ],
      status: "",
      query: "",
      identity: "",
      sex: "",
      vip: "",
    };
  },
  mounted() {
    this.status = this.statusValue;
    this.identity = this.identityValue;
    this.sex = this.sexValue;
    this.vip = this.vipValue;
    this.query = this.$route.query.queryValue
      ? this.$route.query.queryValue
      : "";
  },
  //   computed:{
  //       status(){
  //           return this.statusValue
  //       }
  //   },
  methods: {
    selectChange(value) {
      this.$emit("searchChange", {
        queryValue: this.query, //搜索框值
        statusValue: this.status, //状态下拉框的值
        identityValue: this.identity, //身份下拉框的值
        sexValue: this.sex, // 性别下拉框的值
        vipValue: this.vip, // 会员下拉框的值
      });
    },
    queryBtn() {
      this.$emit("queryButtonClick", this.query.trim());
    },
  },
};
</script>

<style>
.search-container {
  margin-bottom: 20px;
}
.el-select {
  width: 62%;
}
</style>
