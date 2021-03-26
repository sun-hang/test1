<template>
  <div class="operate-container">
    <MySearch
      :queryValue="search.queryValue"
      :statusValue="search.statusValue"
      :identityValue="search.identityValue"
      :sexValue="search.sexValue"
      :vipValue="search.vipValue"
      @searchChange="selectDownChangeHandle"
      @queryButtonClick="searchButtonClickHandle"
    />
    <MyTable :data="currentTableData" />
    <MyPaging
      :total="paging.total"
      :pageSize="paging.size"
      :page="paging.page"
      :pagerCount="paging.pagerCount"
      @searchChange="selectDownChangeHandle"
    />
  </div>
</template>

<script>
import MyTable from "./table/index";
import MySearch from "./search/index";
import MyPaging from "./paging/index";
import tableData from "../../../mockData/tableData.json";
/**
 * 这里表格数据可以做成只修改操作点击只请求数据的，
 * 我这里做成了改变地址栏参数的，根据参数在改变数据，这样可以复制地址栏url，
 * 复原页面
 */
export default {
  data() {
    return {
      userArray: tableData.data,
      currentTableData: [],
      paging: {
        size: 5, //每页显示几条数据
        pagerCount: 9, //显示几个页码
        total: tableData.data.length, //总页数
        page: 1, //当前页码
      },
      search: {
        queryValue: "", //搜索框值
        statusValue: "全部", //状态下拉框的值
        identityValue: "全部", //身份下拉框的值
        sexValue: "全部", // 性别下拉框的值
        vipValue: "全部", // 会员下拉框的值
      },
    };
  },
  mounted() {
    let search = {
      ...this.search,
      ...this.$route.query,
    };
    this.search = search;
    this.paging.page = search.page ? Number(search.page) : 1;
    this.paging.size = search.size ? Number(search.size) : 5;
    // 这里根据地址栏和默认配置进行请求数据
    let queryString = "?";
    for (const key in search) {
      if (Object.hasOwnProperty.call(search, key)) {
        queryString += `${key}=${search[key]}`;
      }
    }
    /**
     * 伪代码,这里请求服务器数据并修改表格数据
     * axios.get(localtion + queryString).then(res =>{
     *      this.userArray = res.result.data;
     * })
     */

    /**
     * 这里没有服务器方面支持，对模拟数据进行筛选，进行渲染
     */
    let condition = {}; //条件对象，对search对象有值的挑出来然后在对数据进行筛选
    // 判断性别
    if (search.sexValue) {
      condition.sex = search.sexValue;
    }
    // 判断状态
    if (search.statusValue) {
      condition.status = search.statusValue;
    }
    // 忘了给模拟数据加了，这个就先不管了，还有会员的筛选，过程和前两个是差不多的
    if (search.identityValue) {
    }

    let tableData = this.userArray.filter((item) => {
      for (const key in condition) {
        if (Object.hasOwnProperty.call(condition, key)) {
          if (item[key] !== condition[key] && condition[key] !== "全部") {
            return false;
          }
        }
      }
      return true;
    });
    /**
     * 如果存在搜索框的值，再次进行筛选,这里感觉名称或者id进行查询了
     */
    if (search.queryValue) {
      tableData = tableData.filter((item) => {
        return (
          item.userId.toString().indexOf(search.queryValue) >= 0 ||
          item.nickName.indexOf(search.queryValue) >= 0
        );
      });
    }
    /**
     * 根据分页再次进行筛选
     */

    let start = (this.paging.page - 1) * +this.paging.size;
    tableData = tableData.slice(start, start + +this.paging.size);
    this.currentTableData = tableData; //得到最终的值，赋值给data里的currentTableData，传递给table
  },

  methods: {
    /**下拉框切换处理函数
     *@param {object} value
     */
    selectDownChangeHandle(value) {
      this.search = {
        ...this.search,
        page: this.paging.page,
        ...value,
        size: this.paging.size,
      };
      this.search.page = +this.search.page;
      this.search.size = +this.search.size;
      this.$router.push({ path: "/operate", query: this.search });
    },
    searchButtonClickHandle(key) {
      // if (key) {/
        this.search.queryValue = key;
        this.$router.push({ path: "/operate", query: this.search });
      // }
    },
  },
  computed: {},
  components: {
    MyTable,
    MySearch,
    MyPaging,
  },
};
</script>

<style>
.operate-container {
  width: 98%;
  margin: 20px auto 0;
  background: #fff;
  box-sizing: border-box;
  padding: 30px 20px 40px;
}
</style>
