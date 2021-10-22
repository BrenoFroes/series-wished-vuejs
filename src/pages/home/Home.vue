<template>
  <div class="home w-full h-screen p-5 mx-auto my-20 text-center">
    <div class="user-info container">
      <h1 class="font-bold font-red-w600 text-xl">Olá, {{user.name}}</h1>
      <p>Sejam bem-vindo</p>
    </div>
    <div class="container home-links grid grid-cols-3 gap-1 mt-10">
      <router-link :key="i" v-for="(route, i) in routes" :to="{ name: route.name }"
        class="home-link mx-10 py-10 px-28 text-sm bg-red-500 flex items-center"
      >
        <i class="material-icons md-48">
          {{ route.meta.icon }}
        </i>
        <span>
          {{ route.meta.label }}
        </span>
      </router-link>
      <a href="#" class="home-link mx-10 py-10 px-28 text-sm bg-green-500 flex items-center">
        <i class="material-icons md-36">playlist_add_check</i>
        <span>Já assisti</span>
      </a>
      <a href="#" class="home-link mx-10 py-10 px-28 text-sm bg-blue-500 flex items-center">
        <i class="material-icons md-36">dvr</i>
        <span>Séries</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState('auth', ['user']),
    routes(){
      return this.$router.options.routes.filter(route => (
          route.meta && route.meta.showNavbar
      ))
    }
  }
}
</script>


<style lang="scss" scoped>
  @mixin flex-center($columns: false){
    display: flex;
    justify-content: center;
    align-items: center;

    @if columns {
      flex-direction: column;
    }
  }
  .home-link{
    transition: .4s;
    color: white;
    @include flex-center();
    &:hover{
      transform: scale(1.1);
      box-shadow: 0 3px 6px rgba(0,0,0,0.7);
    }
  }
  
</style>