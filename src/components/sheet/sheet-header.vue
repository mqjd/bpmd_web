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
      <el-color-picker size="small" @change="bgcolor" :predefine="predefineColors"></el-color-picker>
      <el-color-picker size="small" @change="textcolor" :predefine="predefineColors"></el-color-picker>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sheet-header',
  data () {
    return {
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
    }
  },
  methods: {
    alignCell (data) {
      this.$emit('op', { type: 'style', data: data })
    },
    op (type) {
      this.$emit('op', { type: type })
    },
    bgcolor (val) {
      this.$emit('op', { type: 'style', data: { 'background-color': val } })
    },
    textcolor (val) {
      this.$emit('op', { type: 'style', data: { 'color': val } })
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
