<template>
  <el-container class="form-design">
    <el-aside class="field-side">
      <field-tree></field-tree>
    </el-aside>
    <el-container class="form-container">
      <el-header class="option-tool">Header</el-header>
      <el-main>
        <field-pool></field-pool>
      </el-main>
    </el-container>
    <el-aside class="option-side">1212</el-aside>
  </el-container>
</template>
<script>
import FieldTree from './field-tree/field-tree'
import FieldPool from './field-pool'
export default {
  name: 'FormDesign',
  components: {
    FieldTree,
    FieldPool
  }
}
</script>
<style lang="scss" scoped>
.form-design{
  height: 100%;
  .field-side{
    width: 200px !important;
  }
  .form-container{
    height: 100%;
    border: 1px solid #e0e0e0;
    border-bottom: none;
    .el-main{
      padding-top: 5px;
    }
    .option-tool{
      height: initial!important;
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
</style>
