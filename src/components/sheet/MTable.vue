<template>
  <table
    class="m-table"
    cellpadding="0"
    cellspacing="0"
  >
    <colgroup>
      <col
        v-for="(item, index) in options.rowWidths"
        :key="index"
        :width="item"
      />
    </colgroup>
    <m-tr
      v-for="item in options.data"
      :key="item.key"
      :options="item"
    >
    </m-tr>
  </table>
</template>
<script>
import MTr from './MTr'
export default {
  name: 'm-table',
  components: {
    MTr
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.m-table{
  border-collapse: collapse;
  table-layout:fixed;
  width: initial;
}
</style>
