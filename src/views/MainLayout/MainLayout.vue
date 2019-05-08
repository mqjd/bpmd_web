<template>
  <el-container class="main-layout">
    <el-aside style="width:initial">
      <main-menu></main-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MainMenu from './MainMenu.vue'
export default {
  name: 'main-layout',
  components: {
    MainMenu
  }
}
</script>
<style lang="scss" scoped>
.main-layout{
  @include full;
}
</style>
