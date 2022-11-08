<template>
  <div class="liquidFill" ref="liquidFill"></div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
const { proxy } = getCurrentInstance();
const liquidFill = ref(null);
onMounted(() => {
  renderLiquidFill();
});
const getColor = (value) =>{
 return value<0.5?'#8be04c':value<0.7?'yellow':'red'
}
const data = ref(0.2506)
const renderLiquidFill = function () {
  const myLiquidFill = proxy.$echarts.init(liquidFill.value);
  myLiquidFill.setOption({
    series: [
      {
        type: "liquidFill",
        data: [data.value],
        phase:1,
        radius: "90%",
        color: [getColor(data.value)],
        label: {
          fontSize: 20,
          color: "#333",
          formatter:(params)=>{
            return params.value*100+'%'
          }
        },
        backgroundStyle: {
          color: "#fff",
          borderColor :'#eee',
          borderWidth: 3,
          borderDistance:0
        },
        itemStyle: {
          opacity: 1,
          shadowBlur: 0,

        },
        outline:{
          show:false
        }
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
.liquidFill {
  width: 100%;
  height: 100px;
}
</style>
