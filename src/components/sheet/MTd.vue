<template>
  <td class="m-td" :style="style" :rowspan="options.rowspan" :colspan="options.colspan">
    <div class="td-content">{{options.text}}</div>
  </td>
</template>
<script>
export default {
  name: 'm-td',
  props: {
    options: {
      type: Object
    }
  },
  computed: {
    style () {
      return {
        ...this.options.style,
        display: this.options.visible ? '' : 'none'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.m-td{
  border: 1px solid #e0e0e0;
  .td-content{
    overflow: hidden;
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
