<template>
  <el-header>
    <div class="welcome">欢迎使用知安™生产安全管理平台</div>
    <div class="navbar">
      <el-input
        placeholder="请输入关键字"
        prefix-icon="el-icon-search"
        v-model="input1"
      ></el-input>
      <div class="btn-bell">
        <router-link to="">
          <svg-icon icon-class="bell" class-name="icon-bell"></svg-icon>
          <span class="btn-bell-info">10</span>
        </router-link>
      </div>
      <div class="btn-warn">
        <router-link to="">
          <svg-icon icon-class="warn" class-name="icon-warn"></svg-icon>
          <span class="btn-warn-info">5</span>
        </router-link>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="46" :src="circleUrl"></el-avatar>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const circleUrl = ref(
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      );
      const input1 = ref('');

      return {
        circleUrl,
        input1,
      };
    },
  });
</script>

<style lang="scss">
  .el-header {
    position: fixed;
    top: 0;
    left: 230px;
    right: 0;
    height: 70px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e6e8ec;
    background: #fff;
    .navbar {
      display: flex;
      align-items: center;
      .el-input,
      .btn-warn,
      .btn-bell {
        margin-right: 3rem;
      }
      .el-input {
        min-width: 400px;
        .el-input__inner {
          border-radius: 50px;
          &::placeholder {
            font-size: 12px;
            color: #535875;
          }
        }
        .el-input__prefix {
          color: #535875;
          font-size: 18px;
        }
      }
      .btn-warn,
      .btn-bell {
        position: relative;
        .svg-icon {
          font-size: 26px;
        }
        .btn-warn-info,
        .btn-bell-info {
          position: absolute;
          top: -9px;
          right: -9px;
          font-size: 12px;
          color: #fff;
          width: 18px;
          height: 18px;
          font-family: Rubik;
          text-align: center;
          line-height: 18px;
          border-radius: 50%;
        }
        .btn-warn-info {
          background: #ffa926;
        }
        .btn-bell-info {
          background: #e44d14;
        }
      }
      .el-dropdown-link {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
