<template>
  <div>
    <commonCard title="累计销售额" :value="value">
      <template #default>
        <div class="chart-wrapper">
          <div>日同比 <span class="emphasis">6.86%</span><span class="triangleUp"></span></div>
          <div>月同比 <span class="emphasis">38.10%</span><span class="triangleDown"></span></div>
        </div>
      </template>
      <template #footer>
        <div>
          <span>昨日销售额</span>
          <span class="emphasis">￥ 30000</span>
        </div>
      </template>
    </commonCard>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import commonCard from "../commonCard/index.vue";
const value = ref("10000");
</script>

<style lang="scss" scoped>
.chart-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}

</style>
