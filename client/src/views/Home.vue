<template>
  <div class="home">
    <TextFilter/>
    <TypeFilter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextFilter from "@/components/filter.feature/TextFilter.component";
import TypeFilter from "@/components/filter.feature/TypeFilter.component";

export default {
  name: 'home',
  components: {
    TypeFilter,
    TextFilter,
  }
}
</script>
