<template>
  <el-input
    resize = "none"
    :disabled="disabled||options.disabled"
    v-model="options.value"
    :placeholder="options.placeholder"
    type="textarea"
    :autosize="{ minRows: 2, maxRows: 4}"
  >
  </el-input>
</template>
<script>
const prop = ['type', 'text', 'allrow', 'cols', 'required', 'hidden', 'disabled', 'value', 'placeholder']
export default {
  name: 'MTextarea',
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
</style>
