<template>
  <div class="home-page">
    <div class="common-block">教育培训数据总览</div>
    <div class="flex-row">
      <div class="flex flex-column">
        <div class="common-block">计划培训完成情况</div>
        <div class="common-block">各类培训分布情况</div>
      </div>
      <div class="flex flex-column">
        <div class="common-block">培训完成整体展示</div>
        <div class="common-block">培训历史</div>
      </div>
      <div class="flex common-block">今日事项</div>
    </div>
    <div class="common-block">列表</div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Home',
    setup() {},
  });
</script>

<style lang="scss" scoped>
  .home-page {
    padding: 15px 22px;
    height: 1200px;
  }
</style>
