<template>
  <div> 
    <div class="bgimages home"></div>
    <div class="home_main">
      <div class="main_contain">
        <!-- 首页左边博客 -->
        <div class="main_left">
          <div class="block">
            <el-carousel height="200px" style="border-radius: 5%;">
              <el-carousel-item v-for="item in rightImgs" :key="item">
                <img :src="item" class="image">
              </el-carousel-item>
            </el-carousel>
            <BlogItem></BlogItem>
          </div>
        </div>

        <!-- 首页右边个人信息/公告/-->
        <div class="main_right">
          <HomeSide></HomeSide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/BlogItem.vue'
import HomeSide from '@/components/HomeSide.vue';

export default {
  data(){
    return{
      rightImgs:[
        //Vue的export中的data中的路径只会被当做普通的字符串，因此无法获取图片
        //需要加require
        require('../assets/images/bg2.png'),
        require('../assets/images/bg3.png'),
        require('../assets/images/bg4.png'),
      ],
    }
  },
  components:{
    BlogItem,HomeSide
  }
}
</script>

<style lang="less" scoped>
 img{
  /*设置图片宽度和浏览器宽度一致*/
   width:100%;
   height:inherit;
 }
 .home{
  background-image: url('@/assets/images/bg1.png');
 }
</style>