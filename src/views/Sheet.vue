<template>
  <m-sheet :options="options"></m-sheet>
</template>
<script>
import MSheet from '@/components/sheet/sheet'
export default {
  name: 'sheet',
  components: {
    MSheet
  },
  data () {
    return {
      options: {
        rows: 50,
        cols: 26
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
