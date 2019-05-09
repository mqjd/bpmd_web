<template>
  <td class="m-td">
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
  }
}
</script>
<style lang="scss" scoped>
.m-td{
  border: 1px solid $border-color;
  .td-content{
    overflow: hidden;
    display: inline-block;
  }
}
</style>
