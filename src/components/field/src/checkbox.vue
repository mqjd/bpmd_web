<template>
  <el-checkbox-group
    v-model="options.value"
    :disabled="disabled||options.disabled"
  >
    <el-checkbox v-for="(item,index) in options.data" :label="item.value" :key="index">{{item.text}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
const prop = ['type', 'text', 'allrow', 'cols', 'required', 'hidden', 'disabled', 'value', 'data']
export default {
  name: 'MCheckBox',
  props: {
    options: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created: function () {
    this.clearProps()
  },
  methods: {
    clearProps () {
      for (var i in this.options) {
        if (prop.indexOf(i) === -1) {
          delete this.options[i]
        }
      }
    }
  }
}
</script>
<style scoped>
.el-checkbox-group{
  width: 100%;
}
</style>
