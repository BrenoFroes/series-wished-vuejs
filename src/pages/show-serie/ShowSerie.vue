<template>
    <div class="serie">
        <div  v-if="loading" class="loading text-3xl text-blue-600 text-center my-20 font-bold">
            Aguarde um momento...
        </div>
        <div v-else class="content">
            <h2  class="font-bold text-red-600 text-2xl text-center my-10">
                {{ serie.title }}
            </h2>
            <img :src="serie.image" alt="Poster da serie" loading="lazy" class="h-full w-1/2 mx-auto">
        </div>
    </div>
</template>
<script>
import { mapActions, mapState} from 'vuex'
export default {
    name: 'ShowSerie',
    data:() =>({
        loading: true
    }),
    mounted () {
        this.getData()
    },
    computed:{
        ...mapState('showSerie', ['serie'])
    },
    methods:{
        ...mapActions('showSerie', ['ActionFindSerie']),
        async getData(){
            try{
                await this.ActionFindSerie(this.$route.params.id);
            }catch(err){
                alert('Não foi possível carregar a página');
            }finally{
                this.loading = false;
            }
        }
    }
}
</script>