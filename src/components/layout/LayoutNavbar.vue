<template>
    <nav class="navbar bg-gray-100 container-fluid p-10 flex flex-row">
       <router-link :to="{ name: 'home'}" class="font-bold uppercase">Series Wished</router-link>
        <div class="collapse">
            <ul class="navbar-nav">
                <router-link
                    exact
                    :key="i"
                    class="nav-item mx-10"
                    exact-active-class="active"
                    :to="{name: route.name}"
                    v-for="(route, i) in routes"
                >
                    <a href="#">
                        {{ route.meta.title }}
                    </a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    computed:{
        routes(){
            return this.$router.options.routes.filter(route => (
                route.meta && route.meta.showNavbar
            ))
        }
    }
}
</script>