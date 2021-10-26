<template>
    <router-link class="container card my-2 pb-10 bg-gray-200 cursor-pointer
    shadow-md w-full flex flex-col items-center justify-center"
    :to="{ name: 'show-serie', params: { id: serie.id } }" 
    >
        <img :src="serie.image" class="w-full h-full">
        <h2 class="mt-10">{{ serie.title }}</h2>
        <div class="w-full">
            <button @click="toggleWatchList()" class="bg-red-700 text-white rounded-xl w-auto h-auto mx-12 my-2 px-10">
                {{ serie.watchlist ? 'Remover' : 'Adicionar'}} da watchlist
            </button>
            <button @click="toggleWatchedList()" class="bg-green-700 text-white rounded-xl w-auto h-auto mx-12 my-2 px-10">
                {{ serie.watchedlist ? 'Remover' : 'Adicionar'}} da watchedlist
            </button>
        </div>
    </router-link>
</template>
<script>
export default {
    methods:{
        toggleWatchList(){
            if(this.serie.watchlist){
                // remove da watch
            } else{
                // adiciona na watch
            }
        },
        toggleWatchedList(){
            if(this.serie.watchlist){
                // remove da watch
            } else{
                // adiciona na watch
            }
        }
    },
    props:{
        serie: { type: Object, required: true }
    }
}
</script>