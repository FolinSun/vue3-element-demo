<template>
  <div v-if="!menu.hidden">
    <!-- 一级菜单 -->
    <template
      v-if="
        hasOneShowingChild(menu.children, menu) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
      "
    >
      <applink :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <item :icon="onlyOneChild.icon" :title="onlyOneChild.name" />
        </el-menu-item>
      </applink>
    </template>
    <!-- 二级菜单 || 多级菜单 -->
    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(menu.path)"
      popper-append-to-body
    >
      <template #title>
        <applink v-if="!menu.noLink" :to="resolvePath(menu.path)">
          <el-menu-item :index="resolvePath(menu.path)">
            <item :icon="menu.icon" :title="menu.name" />
          </el-menu-item>
        </applink>
        <el-menu-item v-else>
          <item :icon="menu.icon" :title="menu.name" />
        </el-menu-item>
      </template>

      <sidebar-item
        class="nest-menu"
        v-for="child in menu.children"
        :key="child.id"
        :menu="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
  import path from 'path';
  import { defineComponent, ref } from 'vue';
  import { isExternal } from '@/utils/validate';
  import applink from './Link';
  import item from './Item';

  export default defineComponent({
    name: 'SidebarItem',
    components: {
      applink,
      item,
    },
    props: {
      menu: {
        type: Object,
        default() {
          return {};
        },
      },
      basePath: {
        type: String,
        default: '',
      },
    },
    setup() {
      return {
        onlyOneChild: ref(null),
      };
    },
    methods: {
      hasOneShowingChild(children = [], parent) {
        //需要显示的子菜单
        const showingChildren = children.filter((item) => {
          // 是否不显示当前菜单在导航上
          if (item.hidden) {
            return false;
          } else {
            this.onlyOneChild = item;
            return true;
          }
        });

        // console.log(showingChildren, _.get(showingChildren, 'length'));

        // 没有子级菜单
        if (_.get(showingChildren, 'length') === 0) {
          this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
          return true;
        }

        return false;
      },
      resolvePath(routePath) {
        // 是外部链接
        if (isExternal(routePath)) {
          return routePath;
        }
        if (isExternal(this.basePath)) {
          return this.basePath;
        }
        return path.resolve(
          this.basePath,
          this.basePath === routePath ? '' : routePath
        );
      },
    },
  });
</script>
