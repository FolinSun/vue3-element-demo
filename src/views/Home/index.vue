<template>
  <div class="home-page">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <div>
      <p>
        If Element Plus is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>

      home
      <el-button type="primary">el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld,
    },
    setup() {},
  });
</script>

<style lang="scss" scoped>
  .home-page {
    height: 1200px;
  }
</style>
