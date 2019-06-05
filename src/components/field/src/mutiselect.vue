<template>
  <el-select
    filterable
    v-model="options.value"
    :placeholder="options.placeholder"
    multiple
    :disabled="disabled||options.disabled"
  >
    <el-option
      v-for="(item,index) in options.data"
      :key="index"
      :label="item.text"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
const prop = ['type', 'text', 'allrow', 'cols', 'required', 'hidden', 'disabled', 'value', 'data', 'placeholder']
export default {
  name: 'MMutiSelect',
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
.el-select{
  width: 100%;
}
</style>
