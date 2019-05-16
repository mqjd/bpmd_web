<template>
  <div class="sheet-header">
    <div class="tool-group">
      <el-button-group>
        <el-button size="mini" icon="m-icon-dingbuduiqi" @click="alignCell({'vertical-align': 'top'})"></el-button>
        <el-button size="mini" icon="m-icon-chuizhijuzhongdefuben" @click="alignCell({'vertical-align': 'middle'})"></el-button>
        <el-button size="mini" icon="m-icon-dibu" @click="alignCell({'vertical-align': 'bottom'})"></el-button>
      </el-button-group>
      <el-button-group>
        <el-button size="mini" icon="m-icon-align-left" @click="alignCell({'text-align': 'left'})"></el-button>
        <el-button size="mini" icon="m-icon-align-center" @click="alignCell({'text-align': 'center'})"></el-button>
        <el-button size="mini" icon="m-icon-align-right" @click="alignCell({'text-align': 'right'})"></el-button>
      </el-button-group>
    </div>
    <div class="tool-group">
      <el-button-group>
        <el-button size="mini" icon="m-icon-merge-cell" @click="op('merge')"></el-button>
        <el-button size="mini" icon="m-icon-split-cell" @click="op('split')"></el-button>
      </el-button-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sheet-header',
  methods: {
    alignCell (data) {
      this.$emit('op', { type: 'align', data: data })
    },
    op (type) {
      this.$emit('op', { type: type })
    }
  }
}
</script>
<style lang="scss" scoped>
.sheet-header{
  .el-button{
    padding:2px;
    font-size: 20px;
    border: none;
  }
  .tool-group{
    display: inline-block;
    .el-button-group{
      display: block;
    }
  }
}

</style>
