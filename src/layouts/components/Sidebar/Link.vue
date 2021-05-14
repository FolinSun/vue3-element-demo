<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
  import { defineComponent, computed } from 'vue';
  import { isExternal } from '@/utils/validate';

  export default defineComponent({
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const external = computed(() => {
        return isExternal(props.to);
      });

      const type = computed(() => {
        if (external.value) {
          return 'a';
        }
        return 'router-link';
      });

      return {
        isExternal: external,
        type,
      };
    },
    methods: {
      linkProps(to) {
        if (this.isExternal) {
          return {
            href: to,
            target: '_blank',
            rel: 'noopener',
          };
        }
        return {
          to: to,
        };
      },
    },
  });
</script>
