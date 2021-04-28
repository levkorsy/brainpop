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

<style scoped lang="scss">
button {
  background: transparent;
  padding: 5px;
  border-radius: 4px;
  border: 2px solid #0ea999;
  color: #0ea999;
  font-weight: 700;
  margin: 2px;

  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>