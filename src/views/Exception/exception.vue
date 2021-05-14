<template>
  <el-result
    class="app-exception-page"
    :title="resultTitle"
    :subTitle="resultSubTitle"
  >
    <template #icon>
      <svg-icon :icon-class="resultStatus ? resultStatus : icon" />
    </template>
    <template #extra>
      <el-button type="primary" size="medium" @click="handler">
        {{ btnText }}
      </el-button>
    </template>
  </el-result>
</template>

<script>
  import { defineComponent, ref, computed, unref } from 'vue';
  import { useRoute } from 'vue-router';
  import {
    ExceptionEnum,
    exception,
    useGo,
    useRedo,
  } from './exceptionEnumConfig';

  export default defineComponent({
    name: 'ErrorPage',
    props: {
      // 状态码
      status: {
        type: Number,
        default: ExceptionEnum.PAGE_NOT_FOUND,
      },
      title: {
        type: String,
        default: '',
      },
      subTitle: {
        type: String,
        default: '',
      },
      // 是否全屏
      full: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      // 参数说明详见 exceptionEnumConfig
      const statusMapRef = ref(new Map());

      const { query } = useRoute();
      const go = useGo();
      const redo = useRedo();

      unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_ACCESS, {
        title: '403',
        status: `${ExceptionEnum.PAGE_NOT_ACCESS}`,
        subTitle: exception.subTitle403,
        btnText: props.full ? exception.backLogin : exception.backHome,
        handler: () => (props.full ? go('/login') : go()),
      });

      unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_FOUND, {
        title: '404',
        status: `${ExceptionEnum.PAGE_NOT_FOUND}`,
        subTitle: exception.subTitle404,
        btnText: props.full ? exception.backLogin : exception.backHome,
        handler: () => (props.full ? go('/login') : go()),
      });

      unref(statusMapRef).set(ExceptionEnum.ERROR, {
        title: '500',
        status: `${ExceptionEnum.ERROR}`,
        subTitle: exception.subTitle500,
        btnText: exception.backHome,
        handler: () => go(),
      });

      unref(statusMapRef).set(ExceptionEnum.NET_WORK_ERROR, {
        title: exception.networkErrorTitle,
        subTitle: exception.networkErrorSubTitle,
        btnText: exception.redo,
        handler: () => redo(),
        icon: 'netWorkSvg',
      });

      unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_DATA, {
        title: exception.noDataTitle,
        subTitle: '',
        btnText: exception.redo,
        handler: () => redo(),
        icon: 'notDataSvg',
      });

      const getStatus = computed(() => {
        const { status: routeStatus } = query;
        const { status } = props;
        return Number(routeStatus) || status;
      });

      // 获取当前错误码
      const getMapValue = computed(() => {
        return unref(statusMapRef).get(unref(getStatus));
      });

      const { title, subTitle, btnText, icon, handler, status } =
        unref(getMapValue) || {};

      return {
        resultTitle: props.title || title,
        resultSubTitle: props.subTitle || subTitle,
        btnText,
        icon,
        handler,
        resultStatus: status,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .app-exception-page {
    .svg-icon {
      font-size: 320px;
    }
  }
</style>
