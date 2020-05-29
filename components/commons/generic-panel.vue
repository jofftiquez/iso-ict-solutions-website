<template lang="pug">
  div(v-bind="wrapperBindings")
    v-container(:class="{ 'fill-height': fullHeight }" :style="{ height: fullHeight ? '100vh' : '' }")
      v-row(v-bind="headRowBindings")
        slot(name="head")
      v-row(v-bind="contentRowBindings")
        slot(name="content")
      v-row(v-bind="footerRowBindings")
        slot(name="footer")
</template>

<script>
export default {
  props: {
    wrapperBindings: {
      type: Object,
      default: () => ({}),
    },
    headRowBindings: {
      type: Object,
      default: () => ({}),
    },
    contentRowBindings: {
      type: Object,
      default: () => ({}),
    },
    footerRowBindings: {
      type: Object,
      default: () => ({}),
    },
    fullHeight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
