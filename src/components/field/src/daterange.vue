<template>
  <el-date-picker
    :disabled="disabled||options.disabled"
    v-model="options.value"
    :type="options.daterange"
    range-separator="至"
    start-placeholder="开始"
    end-placeholder="结束"
    :value-format="format"
  >
  </el-date-picker>
</template>
<script>
const prop = ['type', 'text', 'allrow', 'cols', 'required', 'hidden', 'disabled', 'value', 'daterange']
const dateFormat = {
  daterange: 'yyyy-MM-dd',
  datetimerange: 'yyyy-MM-dd HH:mm:ss'
}
export default {
  name: 'MDateRange',
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
      return dateFormat[this.options.daterange]
    }
  }
}
</script>
<style scoped>
.el-date-editor{
  width: 100%;
}
</style>
