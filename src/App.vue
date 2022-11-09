<template>
  <div>
    <topView></topView>
    <saleView></saleView>
    <bottomView></bottomView>
    <mapView></mapView>
  </div>
</template>
<script setup>
import topView from "@/components/topView/index.vue";
import mapView from "@/components/mapView/index.vue";
import saleView from "@/components/saleView/index.vue";
import bottomView from "@/components/bottomView/index.vue";
import { screenDataApi } from "./api/index";
import { onMounted, ref } from "vue";
import emitter from "./utils/eventbus"
const screenData = ref({});
const getData = () => {
  screenDataApi().then((res) => {
    screenData.value = res;
    emitter.emit('screenData',screenData.value)
  });
};
onMounted(() => {
  getData()
});
</script>
<style scoped></style>
