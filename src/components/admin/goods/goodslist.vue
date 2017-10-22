<template>
  <div class="arttmpl">
    <el-row>
      <el-col :span="24">
         <!-- 1.0 面包屑导航 -->
          <div class="abread bt-line">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>购物商场</el-breadcrumb-item>
                <el-breadcrumb-item>商品列表</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
          <!-- 2.0操作区域 -->
          <div class="operation">
             <el-row>
               <el-col :span="6">
                 <!-- 新增，删除，全选按钮 -->
                 <router-link to="/admin/goodsadd">
                  <el-button size="small" icon="plus">新增</el-button>
                </router-link>
                  <el-button size="small" icon="check">全选</el-button>
                  <el-button  size="small" icon="delete">删除</el-button>
               </el-col>
               <!-- 搜索框 -->
               <el-col :span="4" :offset="14">
                  <el-input
                  placeholder="请输入搜索内容"
                  icon="search"
                  v-model="searchValue"
                  :on-icon-click="getList">
                </el-input>
               </el-col>
             </el-row>
          </div>
          <!-- 3.0 列表区域 -->
          <er-row>
            <el-col :spam="24">
                <el-table ref="multipleTable" :data="list"  border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
<el-table-column type="selection" width="55"> </el-table-column>
<el-table-column label="标题" >
    <template scope="scope">
        {{scope.row.title}}
    </template>
</el-table-column>
<el-table-column prop="categoryname" label="所属类别" width="100">
</el-table-column>
<el-table-column label="发布人/发布时间" width="180">
    <template scope="scope">
    {{scope.row.user_name}} / {{scope.row.add_time | datefmt('YYYY-MM-DD')}}
</template>
</el-table-column>
<el-table-column prop="name" label="属性" width="180">
    <template scope="scope">
        <el-tooltip class="item" effect="dark" content="轮播图" placement="bottom"><i class="el-icon-picture"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="置顶" placement="bottom"><i class="el-icon-upload"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="推荐" placement="bottom"><i class="el-icon-star-on"></i>
          </el-tooltip>
  </template>
</el-table-column>
<el-table-column label="操作" width="80">
    <template scope="scope">
  <a href="javascript:;">修改</a>
</template>
</el-table-column>

</el-table>
</el-col>
</er-row>
</el-col>
</el-row>
</div>
</template>

<script>
    export default {
        data() {
            return {
                // 搜索框绑定属性
                searchValue: '',
                list: [],
                // 获取删除数据的商品id字符串，多个id之间使用逗号分隔
                ids: ''
            }
        },
        created() {
            this.getList();
        },
        methods: {
            // 用axios去发出具体的url的请求获取到数据后绑定到表格中
            getList() {
                var url = "/admin/goods/getlist?pageIndex=1&pageSize=10&searchvalue="
                this.$http.get(url).then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message);
                        return;
                    }
                    this.list = res.data.message;
                })
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
<style scoped>

</style>