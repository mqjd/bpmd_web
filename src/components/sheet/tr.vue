<template>
  <tr class="m-tr">
    <td :style="{height:height + 'px'}"></td>
    <m-td
      v-for="(item, index) in options"
      :key="index"
      :options="item"
    >
    </m-td>
  </tr>
</template>
<script>
import MTd from './td'
export default {
  name: 'm-tr',
  components: {
    MTd
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
