<template>
  <el-radio-group
    v-model="options.value"
    :disabled="disabled||options.disabled"
  >
    <el-radio v-for="(item,index) in options.data" :label="item.value" :key="index">{{item.text}}</el-radio>
  </el-radio-group>
</template>
<script>
const prop = ['type', 'text', 'allrow', 'cols', 'required', 'hidden', 'disabled', 'value', 'data', 'placeholder']
export default {
  name: 'MRadio',
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
.el-radio-group{
  width: 100%;
}
</style>
