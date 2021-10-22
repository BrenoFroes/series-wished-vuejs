<template>
    <router-link class="container card my-2 pb-10 bg-gray-200 cursor-pointer
    shadow-md w-full flex flex-col items-center justify-center"
    :to="{ name: 'show-serie', params: { id: serie.id } }" 
    >
        <img :src="serie.image" class="w-full h-full">
        <h2 class="mt-10">{{ serie.title }}</h2>
    </router-link>
</template>
<script>
export default {
    props:{
        serie: { type: Object, required: true }
    }
}
</script>