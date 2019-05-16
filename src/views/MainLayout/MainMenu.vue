<template>
  <el-menu
    :collapse="isCollapse"
    :default-active="acitveKey"
    class="main-menu"
    unique-opened
  >
    <menu-item
      v-for="item of pages"
      :key="item.name"
      :base-path="item.path"
      :item="item"
    >
    </menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
import MenuItem from '@/components/MenuItem.vue'

export default {
  name: 'main-menu',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters([
      'perm',
      'sidemenu'
    ]),
    pages () {
      return this.perm.pages.filter(item => !item.hidden)
    },
    isCollapse () {
      return this.sidemenu.collapse
    },
    acitveKey () {
      return this.$route.name
    }
  }
}
</script>
<style lang="scss" scoped>
.main-menu{
  height: 100%;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
