<template>
  <div>
    <commonCard title="累计用户量" :value="value">
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
          日同比 <span class="emphasis">6.86%</span
          ><span class="triangleUp"></span> 月同比
          <span class="emphasis">38.10%</span><span class="triangleDown"></span>
        </div>
      </template>
    </commonCard>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import commonCard from "../commonCard/index.vue";
const value = ref("21232435");

// 设置矩形图
const { proxy } = getCurrentInstance();
const chart = ref(null);
onMounted(() => {
  renderChart();
});
const renderChart = function () {
  const myChart = proxy.$echarts.init(chart.value);
  myChart.setOption({
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      show: false,
    },
    grid: {
      left: "0",
      right: "0",
      bottom: "0",
      top: "0",
    },
    color: ["#91cc75", "#eee"],
    series: [
      {
        type: "bar",
        stack: "total",
        data: [200],
        barWidth: "20%",
      },
      {
        type: "bar",
        stack: "total",
        data: [50],
        barWidth: "20%",
      },
      {
        type: "custom",
        renderItem: (params, api) => {
          const value = api.value(0)
          const endPoint = api.coord([value, 0]);
          return {
            type: "group",
            children: [
              {
                type: "path",
                shape: {
                  x: 1.5,
                  y: 4,
                  width: 10,
                  height: 10,
                  d: "M 858.9 689 L 530.5 308.2 c -9.4 -10.9 -27.5 -10.9 -37 0 L 165.1 689 c -12.2 14.2 -1.2 35 18.5 35 h 656.8 c 19.7 0 30.7 -20.8 18.5 -35 Z",
                },
                style: {
                  fill: "#91cc75",
                },
                position: endPoint,
              },
              {
                type: "path",
                shape: {
                  x: 1.5,
                  y: -14,
                  width: 10,
                  height: 10,
                  d: "M 840.4 300 H 183.6 c -19.7 0 -30.7 20.8 -18.5 35 l 328.4 380.8 c 9.4 10.9 27.5 10.9 37 0 L 858.9 335 c 12.2 -14.2 1.2 -35 -18.5 -35 Z",
                },
                style: {
                  fill: "#91cc75",
                },
                position: endPoint,
              },
            ],
          };
        },
        clip: true,
        data: [190],
      },
    ],
  });
};
</script>
