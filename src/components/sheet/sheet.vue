<template>
  <el-container>
    <el-header>
      <sheet-header @op="op($event)"></sheet-header>
    </el-header>
    <el-main>
      <sheet-body ref="body" :options="options"></sheet-body>
    </el-main>
  </el-container>
</template>
<script>
import SheetBody from './sheet-body'
import SheetHeader from './sheet-header'
export default {
  name: 'm-sheet',
  components: {
    SheetBody,
    SheetHeader
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  methods: {
    op (data) {
      this.$refs.body.operate(data.type, data.data)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-main{
  overflow: auto;
}
</style>
