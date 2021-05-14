<template>
  <el-container>
    <Sidebar />
    <el-main>
      <Header />
      <Breadcrumb />
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Sidebar, Header, Breadcrumb } from './components';

  export default defineComponent({
    name: 'Layout',
    components: {
      Sidebar,
      Header,
      Breadcrumb,
    },
    setup() {},
  });
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
    .el-main {
      // header + breadcrumb = 110px
      padding: 110px 0 0 0;
    }
  }
</style>
