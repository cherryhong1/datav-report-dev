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
import { wordCloudApi } from "../../api/index";
const wordCloud = ref(null);
const { proxy } = getCurrentInstance();
let WordCloudData = ref([])
onMounted(() => {
  getWordCloudData()
});
const getWordCloudData = () =>{
  wordCloudApi().then(res=>{
    renderWordCloud(convertData(res));
  })
}
const convertData = (data) =>{
  const changeData = []
  data.map(item=>{
    changeData.push({
      name:item.word,
      value:Math.floor(item.count/100)
    })
  })
  return changeData
}
const renderWordCloud = (data) => {
  const myWordCloud = proxy.$echarts.init(wordCloud.value);
  myWordCloud.setOption({
    series: [
      {
        type: "wordCloud",
        data:data,
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
