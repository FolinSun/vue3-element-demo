<template>
  <el-container>
    <Sidebar />
    <el-container>
      <el-main>
        <Header />
        <transition name="fade">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Sidebar, Header } from './components';

  export default defineComponent({
    name: 'Layout',
    components: {
      Sidebar,
      Header,
    },
    setup() {},
  });
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
  }
</style>
