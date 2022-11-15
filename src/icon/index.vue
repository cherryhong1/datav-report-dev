<template>
  <div class="icon-wrapper" :style="{...style}">
    <svg class="icon" aria-hidden="true">
      <use :href="symbolId"></use>
    </svg>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  prefix: {
    type: String,
    default: "icon",
  },
  style:Object
});

const symbolId = computed(()=>(`#${props.prefix}-${props.name}`));
</script>

<style lang="scss" scoped>
.icon-wrapper{
  display: inline-block;
}
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
