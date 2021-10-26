<template>
    <div class="container h-100 my-10 justify-center flex flex-col items-center">
        <h2 class="text-4xl font-bold text-center mb-5">Todas as séries</h2>
        <div class="container grid grid-cols-3 gap-2">
            <div class="container" v-for="item in seriesList" :key="item.id">
                <serie-box :serie="item"></serie-box>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import SerieBox from '@/components/SerieBox.vue';

export default {
    name: 'Series',
	components: { SerieBox },
    mounted(){
        this.ActionFindSeriesList();
    },
    computed:{
        ...mapState('seriesList', ['seriesList'])
    },
    methods:{
        ...mapActions('seriesList', ['ActionFindSeriesList'])
    }
}
</script>


<style lang="scss" scoped>

</style>