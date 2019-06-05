<template>
  <el-form
    :label-position="options.labelPosition||'left'"
    :label-width="options.labelWidth+'px'"
  >
    <el-form-item
      v-for="(item, index) in options.fields"
      :key="index"
      class="form-item"
      :class="getItemClass(item)"
      :label="item.text"
    >
      <m-field :options="item"></m-field>
    </el-form-item>
  </el-form>
</template>
<script>
import MField from '../field/field'
export default {
  name: 'MForm',
  components: {
    MField
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  methods: {
    getItemClass (item) {
      var class_ = {
        allrow: item.allrow
      }
      class_['col' + item.cols] = true
      return class_
    }
  }
}
</script>
<style scoped>
.form-item{
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 25%;
  padding-right: 5px;
}
.form-item.col1{
  width: 25%;
}
.form-item.col2{
  width: 50%;
}
.form-item.col3{
  width: 75%;
}
.form-item.col4{
  width: 100%;
}
</style>
