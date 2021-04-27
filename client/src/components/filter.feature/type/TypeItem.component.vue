<template>
    <button>{{ filterType.title }}</button>
</template>

<script>
    export default {
        name: "TypeItem",
        props:{
            filterType:{
                type:Object,
                required: true,
                default: null
                }
        }
    }
</script>

<style scoped>

</style>