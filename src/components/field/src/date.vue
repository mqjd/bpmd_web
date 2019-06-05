<template>
  <el-date-picker
    :disabled="disabled||options.disabled"
    v-model="options.value"
    :type="options.datetype"
    :placeholder="options.placeholder"
    :value-format="format"
  >
  </el-date-picker>
</template>
<script>
const prop = ['type', 'text', 'allrow', 'cols', 'required', 'hidden', 'disabled', 'value', 'datetype', 'placeholder']
const dateFormat = {
  year: 'yyyy',
  month: 'yyyy-MM',
  week: 'yyyy 第 WW 周',
  date: 'yyyy-MM-dd',
  datetime: 'yyyy-MM-dd HH:mm:ss'
}
export default {
  name: 'MDate',
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
  },
  computed: {
    format () {
      return dateFormat[this.options.datetype]
    }
  }
}
</script>
<style scoped>
.el-date-editor{
  width: 100%;
}
</style>
