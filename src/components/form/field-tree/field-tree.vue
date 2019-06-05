<template>
  <el-menu
    class="field-tree"
    unique-opened
  >
    <el-submenu v-for="(items, index) in fields" :index="index+''" :key="index">
      <template slot="title">{{items.text}}</template>
      <draggable
        v-model="items.child"
        :group="group"
        ghost-class="ghost"
        :sort="false"
        @end="onDragEnd"
        @start="onDragStart"
      >
        <el-menu-item v-for="(item, index_) in items.child" :index="index+'-'+index_" :key="index+'-'+index_">
          {{item.text}}
        </el-menu-item>
      </draggable>
    </el-submenu>
  </el-menu>
</template>
<script>
import draggable from 'vuedraggable'
import fields from './fields'
export default {
  name: 'FieldTree',
  components: {
    draggable
  },
  data () {
    return {
      fields: fields,
      group: { name: 'baseFields', pull: 'clone' }
    }
  },
  methods: {
    onDragStart () {
    },
    onDragEnd () {
    }
  }
}
</script>
<style lang="scss" scoped>
.field-tree{
  border-right: none;
}
</style>
