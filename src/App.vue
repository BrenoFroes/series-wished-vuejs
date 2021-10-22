<template>
  <div id="app">
    <layout-navbar v-if="showNavBar"></layout-navbar>
    <div class="content w-2/3 mx-auto">
      <router-view/>
    </div>
  </div>
</template>
<script>
import LayoutNavbar from './components/layout/LayoutNavbar.vue'
export default {
  components:{
    LayoutNavbar
  },
  computed:{
    showNavBar(){
      return this.$route.name != 'home' && this.$route.name != 'login' ? true : false
    }
  }
}
</script>
<style lang="scss">

</style>
