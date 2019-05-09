<template>
  <tr class="m-tr">
    <m-td
      v-for="item in options"
      :key="item.key"
      :options="item"
    >
    </m-td>
  </tr>
</template>
<script>
import MTd from './MTd'
export default {
  name: 'm-tr',
  components: {
    MTd
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.m-tr{
  height: 30px;
}
</style>
