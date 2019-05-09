<template>
  <m-sheet :options="options"></m-sheet>
</template>
<script>
import MSheet from '@/components/sheet/MSheet'
export default {
  name: 'sheet',
  components: {
    MSheet
  },
  data () {
    return {
      options: {
        rows: 5,
        cols: 5
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
