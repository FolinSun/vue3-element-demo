<template>
  <el-aside width="230px">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <router-link to="/">logo</router-link>
      <el-menu
        default-active="1"
        class="reset-menu"
        :unique-opened="false"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="menu-group" v-for="nav in navData" :key="nav.id">
          <div class="group-title">{{ nav.name }}</div>
          <SidebarItem
            v-for="menu in nav.menus"
            :Key="menu.id"
            :menu="menu"
            :basePath="menu.path"
          />
        </div>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import SidebarItem from './SidebarItem';

  export default defineComponent({
    name: 'Sidebar',
    components: {
      SidebarItem,
    },
    setup() {
      const store = useStore();
      const navData = store.state.permission.menu;

      return {
        navData,
      };
    },
    mounted() {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  });
</script>

<style lang="scss">
  $menubg: #0f4586;
  $submenubg: #0364ff;
  $activebg: #0054d9;
  $activeColor: #178bff;
  .el-aside {
    background: $menubg;

    .reset-menu.el-menu {
      background: $menubg;
      border: 0 none;
      .el-submenu__title i,
      .el-menu-item i {
        color: $white;
        margin-top: -2px;
      }
      .el-submenu__title,
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        padding: 0 15px !important;
        color: $white;
        &:hover,
        :focus {
          background: $menubg;
        }
        &.is-active {
          color: $white;
          background: $activebg;
        }
      }
      .svg-icon {
        color: $white;
        font-size: 18px;
        margin-right: 5px;
        vertical-align: middle;
      }

      .el-submenu {
        &.is-opened {
          background: $submenubg;
          border-radius: 4px;
          overflow: hidden;
          .el-submenu__title:hover,
          .el-submenu__title:focus {
            background: $submenubg;
          }
        }
        > .el-menu {
          background: $submenubg;
          .el-menu-item-group__title {
            display: none;
          }
          .el-menu-item {
            &:hover {
              background: $submenubg;
            }
            &.is-active {
              background: $activebg;
            }
          }
        }
      }

      .menu-group {
        margin-top: 30px;
        padding: 0 13px;
        .group-title {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: $activeColor;
        }
      }
    }
  }
</style>
