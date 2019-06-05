<template>
  <el-form label-width="80px" class="field-pool">
    <draggable
      :group="group"
      ghost-class="ghost"
      v-model="fields"
      @start="onDragStart"
      class="field-pool"
    >
      <el-form-item
        v-for="(item, index) in fields"
        class="form-item"
        :class="getItemClass(item)"
        :key="index"
        :label="item.text"
      >
        <m-field :options="item"></m-field>
      </el-form-item>
    </draggable>
  </el-form>
</template>
<script>
import draggable from 'vuedraggable'
import MField from '../field/field'
export default {
  name: 'FieldPool',
  components: {
    draggable,
    MField
  },
  data () {
    return {
      fields: [],
      group: { name: 'fieldsPool', put: 'baseFields' },
      ghostClass: 'ghost'
    }
  },
  methods: {
    onDragStart () {
    },
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
<style lang="scss" scoped>
.field-pool{
  height: 100%;
}
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
