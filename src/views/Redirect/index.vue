<script>
  import { defineComponent, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'Redirect',
    setup() {
      //初始化路由
      const router = useRouter();
      console.log(router);

      // mounted
      onMounted(() => {
        console.log('Component is mounted!');
        // const { params, query } = this.$route;
        // const { path } = params;
        // this.$router.replace({ path: '/' + path, query }).catch((err) => {
        //   console.warn(err);
        // });
      });
      return {};
    },
    render: function (h) {
      return h(); // avoid warning message
    },
  });
</script>
