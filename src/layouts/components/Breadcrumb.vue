<template>
  <div class="breadcrumb">
    <span class="refresh">
      <i class="el-icon-refresh-right"></i>
    </span>
    <el-divider direction="vertical"></el-divider>
    <router-link :to="{ path: '/' }">
      <svg-icon icon-class="home" class-name="icon-home" />
    </router-link>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">安全管理</el-breadcrumb-item>
      <el-breadcrumb-item>教育培训</el-breadcrumb-item>
      <el-breadcrumb-item>fdsf</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss">
  .breadcrumb {
    position: fixed;
    padding: 0 20px;
    top: 70px;
    left: 230px;
    right: 0;
    height: 40px;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 2px solid #e6e8ec;
    box-sizing: border-box;
    .refresh {
      margin-top: 2px;
      .el-icon-refresh-right {
        font-size: 20px;
        color: #093d7d;
      }
    }
    .el-breadcrumb {
      margin-left: 0.8rem;
      .el-breadcrumb__inner.is-link,
      .el-breadcrumb__inner a {
        color: #093d7d;
        font-weight: normal;
      }
      .el-breadcrumb__inner,
      .el-breadcrumb__item:last-child .el-breadcrumb__inner {
        color: #999;
      }
      // .el-breadcrumb__inner.is-link:hover,
      // .el-breadcrumb__inner a:hover {
      //   color: $primary;
      // }
    }
  }
</style>
