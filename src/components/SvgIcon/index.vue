<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`;
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className;
        } else {
          return 'svg-icon';
        }
      },
    },
    setup() {},
  });
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    font-size: 16px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    fill: white;
  }
</style>
