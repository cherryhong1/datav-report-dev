<template>
  <v-chart
    :option="option"
    style="
       {
        width: 100%;
        height: 100%;
      }
    "
  ></v-chart>
</template>

<script setup>
import {  ref,reactive } from "vue";

const props = defineProps({
  tabValue: {
    type: String,
    default: "salesVolume",
  },
  curTime: {
    type: String,
    default: "year",
  },
  timePicker: {
    type: Array,
    default: ["", ""],
  },
  xAxisData: {
    type: Array,
    default: () => [],
  },
  seriesData: {
    type: Array,
    default: () => [],
  },
});
let option = reactive({})

option ={
    grid: {
      left: "7%",
      right: "0",
      top: "5%",
      bottom: "7%",
    },
    xAxis: {
      type: "category",
      data: props.xAxisData,
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: "#eee",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#eee",
        },
      },
      axisLabel: {
        color: "#333",
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#eee"],
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "",
        type: "bar",
        barWidth: "30%",
        data: props.seriesData,
      },
    ],
  }

</script>

<style lang="scss" scoped></style>
