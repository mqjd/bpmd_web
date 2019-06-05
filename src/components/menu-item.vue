<template>
  <el-submenu :index="item.name" v-if="item.children">
    <template slot="title">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>
    <menu-item
      v-for="child of filterItem(item.children)"
      :key="child.name"
      :item="child"
      :base-path="resolvePath(child.path)"
      >
    </menu-item>
  </el-submenu>
  <router-link :to="resolvePath(item.path)" v-else>
    <el-menu-item :index="item.name">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{item.meta.title}}</span>
    </el-menu-item>
  </router-link>
</template>
<script>
import path from 'path'
export default {
  name: 'menu-item',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String
    }
  },
  methods: {
    resolvePath (routePath) {
      if (this.item.children) {
        return path.resolve(this.basePath, routePath)
      } else {
        return this.basePath
      }
    },
    filterItem (items) {
      return items.filter(item => !item.hidden)
    }
  }
}
</script>
<style lang="scss" scoped>
a:focus,
a:active {
  outline: none;
}
a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
</style>
