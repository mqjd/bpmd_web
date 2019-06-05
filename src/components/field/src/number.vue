<template>
  <el-input-number
    v-model="options.value"
    label="请输入内容"
    :min="options.min"
    :max="options.max"
    :precision="options.numberPrecision"
    :disabled="disabled||options.disabled"
  >
  </el-input-number>
</template>

<script>
const prop = ['type', 'text', 'allrow', 'cols', 'required', 'hidden', 'disabled', 'value', 'numberPrecision', 'min', 'max']
export default {
  name: 'MNumber',
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
.el-input-number{
  width: 100%;
}
</style>
