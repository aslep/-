// 入口文件
import Vue from 'vue';
import App from './App.vue';

// 1.0  路由的写法
//1.0.0 导包
import vueRouter from 'vue-router';

//1.0.2 将vueRouter和vue绑定起来
Vue.use(vueRouter);

//1.0.3 定义路由规则
// 导入login.vue组件对象
import login from './components/admin/account/login.vue';
// 导入后台管理系统的整体布局组件
import layout from './components/admin/layout.vue';
// 导入goodslist.vue
import goodslist from './components/admin/goods/goodslist.vue';
// 导入goodsadd.vue
import goodsadd from './components/admin/goods/goodsadd.vue';

var router = new vueRouter({
    routes: [
        { name: 'login', path: '/login', component: login },
        {
            name: 'layout',
            path: '/admin',
            component: layout,
            children: [
                { name: 'goodslist', path: 'goodslist', component: goodslist },
                { name: 'goodsadd', path: 'goodsadd', component: goodsadd }
            ]
        }
    ]
});

// 2.0 axios使用
//2.0.1 导入axios包
import axios from 'axios';
//2.0.2 设定axios的基本请求前缀
axios.defaults.baseURL = "http://157.122.54.189:9095";
//2.0.3 将axios对象挂载到vue的原型属性$http上
Vue.prototype.$http = axios;

//3.0 elmentUI导入
import elementUi from 'element-ui';
// 3.0.2 导入elemeui的css控制样式
// 由于项目的样式和elementui的css样式有些不一样，那么修改了这个样式以后，要利用自己的样式替换原来的原有样式
import '../statics/theme_rms/index.css';
// 将此项目的全局样式导入到elementui中的css之后
import '../statics/css/site.css';
Vue.use(elementUi);

// 定义公有过滤器(全局过滤器)来实现日期字符串的格式化操作
Vue.filter('datefmt', (input, fmtstring) => {
    var myDate = new Date(input);
    var y = myDate.getFullYear();
    var mon = myDate.getMonth() + 1;
    var d = myDate.getDay();
    var h = myDate.getHours();
    var min = myDate.getMinutes();
    var s = myDate.getSeconds();
    mon = mon >= 10 ? mon : ('0' + mon);
    d = d >= 10 ? d : ('0' + d);
    if (fmtstring == 'YYYY-MM-DD') {
        return y + '-' + mon + '-' + d;
    } else if (fmtstring == 'YYYY-MM-DD HH:mm:ss') {
        h = h >= 10 ? h : ('0' + h);
        min = min >= 10 ? min : ('0' + min);
        s = s >= 10 ? s : ('0' + s);
        return y + '-' + mon + '-' + d + ' ' + h + ':' + min + ':' + s;
    }
})

new Vue({
    el: '#app',
    router,
    // 使用app这个组件对象
    // 将app当做根组件替换index.html这个模板中的<div id="app"></div>内容
    render: create => create(App)
})