<template>
  <div class="icon-wrapper" :style="{...style}">
    <svg class="icon" aria-hidden="true">
      <use :href="href"></use>
    </svg>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  id: String,
  prefix: {
    type: String,
    default: "icon",
  },
  style:Object
});

const href = ref(`#${props.prefix}-${props.id}`);
console.log(href)
console.log(props.style)
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
