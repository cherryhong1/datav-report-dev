<template>
  <div>
    <commonCard title="今日用户数" :value="value">
      <template #default>
        <div
          ref="chart"
          style="
             {
              width: 100%;
              height: 100%;
            }
          "
        ></div>
      </template>
      <template #footer>
        <div>
          退货率 5.62%
        </div>
      </template>
    </commonCard>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue"
import commonCard from "../commonCard/index.vue"
const value = ref("23435")

// 设置矩形图
const { proxy } = getCurrentInstance();
const chart = ref(null);
onMounted(() => {
  renderChart();
});
const renderChart = function () {
  const myChart = proxy.$echarts.init(chart.value)
  myChart.setOption({
    xAxis:[{
      type:'category',
      show:false
    }],
    yAxis:[{
      type:'value',
      show:false
    }],
    grid:{
      left:'0',
      right:'0',
      top:'0',
      bottom:'0'
    },
    series:[{
      type:'bar',
      data:[10, 52, 200, 334, 390, 330, 220],
      barWidth:'60%'
    }]
  })
};
</script>

<style lang="scss" scoped>

</style>