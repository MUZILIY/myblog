<template>
  <div id="app" >
    <header>
        <NavBar></NavBar>
    </header>
    <!-- router -->
    <router-view></router-view>

  </div>
</template>

<!-- <script src="https://at.alicdn.com/t/c/font_4189743_m1cy1oe3aif.js"></script> -->
<script>
//header
import NavBar from '@/components/NavBar.vue'

export default {
    components:{
      NavBar,
    }
}
</script>
<style scoped>

</style>
