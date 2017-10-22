<template>
  <div class="tmpl">
    <!-- 职责就是编写:
                        1 左边菜单
                        2 顶部 -->
    <el-row>
      <!-- 1.0 左边菜单 -->
      <el-col :span="leftcol">
        <img src="/statics/img/logo.png" alt="" width="100%">
        <div class="layout menu">
          <el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="iscollapse">
            <!-- 购物商城 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>购物商城</template>
<el-menu-item-group>
    <router-link to="/admin/goodslist">
        <el-menu-item index="1-1">商品列表</el-menu-item>
    </router-link>
    <el-menu-item index="1-2">类别管理</el-menu-item>
    <el-menu-item index="1-3">评论管理</el-menu-item>
</el-menu-item-group>
</el-submenu>

<!-- 订单管理 -->
<el-submenu index="2">
    <template slot="title">
         <i class="el-icon-message"></i>订单管理</template>
    <el-menu-item-group>
        <el-menu-item index="2-1">订单列表</el-menu-item>
    </el-menu-item-group>
</el-submenu>
</el-menu>
</div>
</el-col>

<!-- 2.0 右边区域 -->
<el-col :span="rightcol">
    <!-- 2.0.1 顶部区域 -->
    <el-row>
        <el-col :span="24">
            <div class="topbg">
                <el-row>
                    <el-col :span="1" class="textAlign">
                        <!-- 控制菜单的展开和收缩图标 -->
                        <!-- 图标直接用ui自带的图标 -->
                        <i @click="showhide" class="el-icon-menu"></i>
                    </el-col>
                    <el-col :span="23">
                        <span>您好,admin</span>
                        <el-dropdown>
                            <span class="el-dropdown-link"><i class="el-icon-caret-bottom el-icon--right"></i>更多
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>预览网址</el-dropdown-item>
                                <el-dropdown-item>修改密码</el-dropdown-item>
                                <el-dropdown-item>注销登陆</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
    <!-- 2.0.2 内容锚 -->
    <el-row>
        <el-col :span="24">
            <!-- 利用vue-router进行填充 -->
            <router-view></router-view>
        </el-col>
    </el-row>
</el-col>

</el-row>
</div>
</template>

<script>
    export default {
        data() {
            return {
                // 这个属性主要是用来控制el-menu菜单的展开和收缩的
                // false: 展开  true:收缩
                iscollapse: false,
                // 控制左边菜单栏的宽度的
                leftcol: 4,
                // 控制右边菜单栏的宽度的
                rightcol: 20
            }
        },
        methods: {
            showhide() {
                this.iscollapse = !this.iscollapse;
                if (this.iscollapse) {
                    this.leftcol = 1;
                    this.rightcol = 23;
                } else {
                    this.leftcol = 4;
                    this.rightcol = 20;
                }
            }
        }
    }
</script>
<style scoped>
    .textAlign {
        text-align: center;
    }
</style>