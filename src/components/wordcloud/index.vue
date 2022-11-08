<template>
  <div
    ref="wordCloud"
    style="
       {
        width: 100%;
        height: 180px;
      }
    "
  ></div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import { wordCloudApi,mapScatterApi,screenDataApi } from "../../api/index";
const wordCloud = ref(null);
const { proxy } = getCurrentInstance();
onMounted(() => {
  renderWordCloud();
  wordCloudApi().then(res=>{
    console.log(res)
  })
  mapScatterApi().then(res=>{
    console.log(res)
  })
  screenDataApi().then(res=>{
    console.log(res)
  })
});

const renderWordCloud = () => {
  const myWordCloud = proxy.$echarts.init(wordCloud.value);
  myWordCloud.setOption({
    series: [
      {
        type: "wordCloud",
        data: [
          {
            name: "北京",
            value: 22,
          },
          {
            name: "上海",
            value: 20,
          },
          {
            name: "杭州",
            value: 76,
          },
          {
            name: "南京",
            value: 39,
          },
          ,
          {
            name: "哈尔滨",
            value: 34,
          },
          {
            name: "乌鲁木齐",
            value: 45,
          },
        ],
        shape: "triangle",
        textStyle: {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          // Color can be a callback function or a color string
          color: function () {
            // Random color
            return (
              "rgb(" +
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
              ].join(",") +
              ")"
            );
          },
        },
        left: "center",
        top: "center",
        width: "70%",
        height: "80%",
        right: null,
        bottom: null,
      },
    ],
  });
};
</script>

<style lang="scss" scoped></style>
