<template>
  <div class="paging">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :pager-count="pagerCount"
      background
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["total", "pageSize", "page", "pagerCount"],
  data() {
    return {};
  },
  methods: {
    handleCurrentChange(index) {
      this.$emit("searchChange", { page: index });
    },
  },
};
</script>

<style>
.paging{
  margin-top: 20px;
}
</style>
