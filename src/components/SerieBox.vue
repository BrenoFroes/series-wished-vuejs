<template>
    <router-link class="container card my-2 pb-10 bg-gray-200 cursor-pointer
    shadow-md w-full flex flex-col items-center justify-center"
    :to="{ name: 'show-serie', params: { id: serie.id } }" 
    >
        <img :src="serie.image" class="w-full h-full">
        <h2 class="mt-10">{{ serie.title }}</h2>
        <div class="w-full">
            <button @click.prevent="toggleWatchList()" class="bg-red-700 text-white rounded-xl w-auto h-auto mx-12 my-2 px-10">
                {{ serie.watchlist ? 'Remover' : 'Adicionar'}} da watchlist
            </button>
            <button @click.prevent="toggleWatchedList()" class="bg-green-700 text-white rounded-xl w-auto h-auto mx-12 my-2 px-10">
                {{ serie.watched ? 'Remover' : 'Adicionar'}} da watchedlist
            </button>
        </div>
    </router-link>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions('watchedlist', [
            'ActionFindWatchedlist',
            'ActionAddOnWatchedlist',
            'ActionDeleteFromWatchedlist'
        ]),
        ...mapActions('watchlist', [
            'ActionFindWatchlist',
            'ActionAddOnWatchlist',
            'ActionDeleteFromWatchlist'
        ]),
        async toggleWatchList(){
            try{
                if (this.serie.watched){
                    await this.ActionDeleteFromWatchedlist(this.serie.id)
                }
                if (this.serie.watchlist){
                    await this.ActionDeleteFromWatchlist(this.serie.id)
                } else{
                    await this.ActionAddOnWatchlist({ serieId: this.serie.id })
                }
                this.ActionFindWatchlist
                alert("Operação realizada com sucesso")
            } catch(err){
                alert("Falha na operação")
            }
        },
        async toggleWatchedList(){
            try{
                if (this.serie.watchlist){
                    await this.ActionDeleteFromWatchlist(this.serie.id)
                }
                if (this.serie.watched){
                    await this.ActionDeleteFromWatchedlist(this.serie.id)
                } else{
                    await this.ActionAddOnWatchedlist({ serieId: this.serie.id })
                }
                this.ActionFindWatchedlist
                alert("Operação realizada com sucesso")
            } catch(err){
                alert("Falha na operação")
            }
        }
    },
    props:{
        serie: { type: Object, required: true }
    }
}
</script>