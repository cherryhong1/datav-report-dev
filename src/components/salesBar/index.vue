<template>
  <v-chart :option="option" style="{width:100%;height:100%}"></v-chart>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabValue:{
    type:String,
    default:'salesVolume'
  },
  curTime:{
    type:String,
    default:'year'
  },
  timePicker:{
    type:Array,
    default:['','']
  }
})

const xAxisData = ['1月','2月', '3月', '4月', '5月']
const seriesData = [10, 52, 200, 334, 390,]
const option = ref({
    grid: {
      left: "7%",
      right: "0",
      top: "5%",
      bottom: "7%",
    },
    xAxis:{
      type:'category',
      data:xAxisData,
      axisTick:{
        alignWithLabel:true,
        lineStyle:{
          color:'#eee'
        }
      },
      axisLine:{
        lineStyle:{
          color:'#eee'
        }
      },
      axisLabel:{
        color:'#333'
      }

    },
    yAxis:{
      type:'value',
      splitLine:{
        show:true,
        lineStyle:{
          color:['#eee'],
          type:'dashed'
        }
      }
    },
    series:[
      {
        name:'',
        type:'bar',
        barWidth:'30%',
        data:seriesData
      }
    ]
  });
</script>

<style lang="scss" scoped></style>
