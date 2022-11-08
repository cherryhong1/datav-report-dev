<template>
  <div>
    <commonCard title="累计订单量" :value="value">
      <template #default>
        <div
          class="chart-wrapper"
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
          <span>昨日订单量</span>
          <span class="emphasis">30000</span>
        </div>
      </template>
    </commonCard>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import commonCard from "../commonCard/index.vue";

const value = ref("30000");

// 设置堆叠面积图
const { proxy } = getCurrentInstance();
const chart = ref(null);
onMounted(() => {
  renderChart();
});
const renderChart = function () {
  const myChart = proxy.$echarts.init(chart.value);
  myChart.setOption({
    grid: {
      left: "0",
      right: "0",
      bottom: "0",
      top: "0",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        data: [140, 232, 101, 264, 90, 340, 250],
        areaStyle: {
          opacity: 0.8,
          // color:'orange'
          color: new proxy.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
.triangleUp {
  display: inline-block;
  margin-left: 5px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-bottom: 4px solid purple;
  margin-bottom: 2px;
}
.triangleDown {
  display: inline-block;
  margin-left: 5px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top: 4px solid green;
  margin-top: 2px;
}
</style>
