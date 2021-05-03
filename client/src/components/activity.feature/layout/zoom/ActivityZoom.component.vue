<template>
    <div class="zoom-container main-color-green" @click="openModal(activity.id)">
        <span><i class="far fa-eye"></i></span>
        <span class="title">View work</span>
    </div>
</template>

<script>
    import openModal from "@/utils/modalUtils";

    export default {
        name: "ActivityZoom",
        props: {
            activity: {
                type: Object
            }
        },
        mixins: [openModal],
    }
</script>

<style scoped>
    .zoom-container {
        flex: 2;
        color: #0ea999;
        font-weight: 700;
        cursor: pointer;
    }

    .title {
        white-space: nowrap;
        margin-left: 0.5rem;
    }
    .title:hover{
      opacity: 0.9;
    }
</style>