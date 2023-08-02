<template>
  <div class="header">
    <div class="meau">
      <div class="hello">
        hello
      </div>
      <!-- 
        Vue 2中，<template> 标签不能拥有 key，不过可以为其每个子节点分别设置key ；
        Vue 3 中，key 则应该被设置在 <template> 标签，修改.eslintrc.js的配置，
          在rules的规则上添加：'vue/no-v-for-template-key': 'off'
      -->
      <div v-for="list of navlists" :key="list.nav_num" class="nav_item">
        <i :class="list.nav_icon"></i>
        <router-link :to="list.nav_path">{{list.nav_name}}</router-link>
      </div>
      <!-- 登录/我的 -->
      <div v-if="!isLogin" class="nav_item">
        <i class="el-icon-s-custom"></i>
        <router-link to="/login">登录</router-link>
      </div>
      <div v-else class="nav_item">
        <i class="el-icon-edit"></i>
        <router-link to="/myinfo">我的</router-link>
      </div>
    </div>
    <div class="theme_control">
      <i class="el-icon-sunny" v-show="isDark ? 'moon' : 'sun'"  @click="ChangeTheme()"></i>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isLogin:false,
      isDark:'moon',
      navlists:[
        {
          nav_icon:"el-icon-s-home",
          nav_name:"首页",
          nav_path:'/'
        },
        {
          nav_icon:"el-icon-menu",
          nav_name:"博客",
          nav_path:'/blogs'
        },
        {
          nav_icon:"el-icon-s-comment",
          nav_name:"留言板",
          nav_path:'/community'
        },
      ]
    }
  },
  methods:{
    ChangeTheme(){
      this.isDark='sun';
      console.log("a");
    }
  }
}
</script>

<style lang="less" scoped>
/* left */
.hello{
  width: 4rem;
}
.meau{
  display: flex;
  .nav_item{
    margin: 0 1rem 0 0;
    i{
      margin: 0 8px 0 2px;
    }
  }
}

</style>