<template>
  <table
    class="m-table"
    cellpadding="0"
    cellspacing="0"
  >
    <colgroup>
      <col width="0"/>
      <col
        v-for="(item, index) in options.rowWidths"
        :key="index"
        :width="item"
      />
    </colgroup>
    <tbody>
      <m-tr
        v-for="(item, index) in options.data"
        :key="item.key"
        :options="item"
        :height="options.rowHeights[index]"
      >
      </m-tr>
    </tbody>
  </table>
</template>
<script>
import MTr from './tr'
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
  table-layout: fixed;
  word-wrap: break-word;
  word-break: break-all;
  --webkit-touch-callout: none;
  --webkit-user-select: none;
  --khtml-user-select: none;
  --moz-user-select: none;
  --ms-user-select: none;
  user-select: none;
}
</style>
