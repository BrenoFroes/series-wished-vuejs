<template>
    <div class="container h-100 my-10 justify-center flex flex-col items-center">
        <h2 class="text-4xl font-bold text-center mb-5">Watchedlist</h2>
        <div class="container grid grid-cols-3 gap-2">
            <div class="container" v-for="item in watchedlist" :key="item.id">
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
    name: 'Watchedlist',
	components: { SerieBox },
    mounted(){
        this.ActionFindWatchedlist();
    },
    computed:{
        ...mapState('watchedlist', ['watchedlist'])
    },
    methods:{
        ...mapActions('watchedlist', ['ActionFindWatchedlist'])
    }
}
</script>


<style lang="scss" scoped>

</style>