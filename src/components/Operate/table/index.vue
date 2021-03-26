<template>
  <div class="table-container">
    <el-table
      :data="data"
      style="width:100%;"
      :header-cell-style="{ background: '#eee' }"
    >
      <el-table-column label="用户ID" prop="userId" />
      <el-table-column label="头像">
        <template slot-scope="item">
          <el-avatar
            shape="square"
            size="small"
            :src="item.row.avatar"
          ></el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="昵称" prop="nickName" />
      <el-table-column label="性别" prop="sex" />
      <el-table-column label="注册来源" prop="operation" />
      <el-table-column label="手机号/用户名" prop="phone" />
      <el-table-column label="状态" prop="status" />
      <el-table-column label="注册时间" prop="regTime" />
      <el-table-column label="操作">
        <template slot-scope="item">
          <el-dropdown placement="bottom">
            <span class="el-dropdown-link" style="color:#2A95FC;">
              操作
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>冻结</el-dropdown-item>
              <el-dropdown-item>升级会员</el-dropdown-item>
              <el-dropdown-item>详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.el-table__header-wrapper {
  border: 1px solid #eee;
  background-color: #000;
  box-sizing: border-box;
}
</style>
