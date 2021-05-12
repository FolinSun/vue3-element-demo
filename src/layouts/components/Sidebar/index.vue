<template>
  <el-aside width="230px">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <router-link to="/">logo</router-link>
      <el-menu
        :uniqueOpened="true"
        default-active="1"
        class="reset-menu"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="menu-group">
          <div class="group-title">驾驶舱</div>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <template #title>综合看板</template>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>工作任务</template>
          </el-menu-item>
        </div>
        <div class="menu-group">
          <div class="group-title">双重预防</div>
          <!-- submenu start -->
          <el-submenu index="3">
            <template #title>
              <i class="el-icon-location"></i>
              <span>隐患排查</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- submenu end  -->
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <template #title>风险控制</template>
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {},
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
