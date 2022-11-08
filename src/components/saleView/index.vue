<template>
  <el-card class="box-card saleView" shadow="hover">
    <el-tabs v-model="tabValue" @tab-click="handleTab">
      <el-tab-pane label="销售额" name="salesVolume">
        <el-row :gutter="20">
          <el-col :span="16">
            <h4>{{ curTitle }}</h4>
            <div class="chartContainer">
              <saleBar></saleBar></div
          ></el-col>
          <el-col :span="7" :offset="1">
            <h4>排行榜</h4>
            <saleRanking></saleRanking>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="访问量" name="visitVolume">
        <el-row :gutter="20">
          <el-col :span="16">
            <h4>{{ curTitle }}</h4>
            <div class="chartContainer">
              <saleBar></saleBar></div
          ></el-col>
          <el-col :span="7" :offset="1">
            <h4>排行榜</h4>
            <saleRanking></saleRanking>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <div class="right">
      <el-radio-group
        class="ml-4 buttonGroup"
        v-model="curTime"
        @change="handleTimeChange"
      >
        <el-radio-button label="今日"> </el-radio-button>
        <el-radio-button label="本周"> </el-radio-button>
        <el-radio-button label="本月"> </el-radio-button>
        <el-radio-button label="今年"> </el-radio-button>
      </el-radio-group>
      <el-time-picker
        v-model="timePicker"
        is-range
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
      ></el-time-picker>
    </div>
  </el-card>
</template>

<script setup>
import { ref, watch } from "vue";
import saleBar from "../salesBar/index.vue";
import saleRanking from "../saleRanking/index.vue";
let tabValue = ref("salesVolume");
let curTitle = ref("年度销售额");

let curTime = ref("今年");
const handleTab = (tab, event) => {
  tabValue.value = tab.paneName;
};

const handleTimeChange = () => {
  console.log(curTime);
};
watch(
  [tabValue, curTime],
  (newValue) => {
    if (newValue[0] === "salesVolume") {
      switch (newValue[1]) {
        case "今年":
          curTitle.value = "年度销售额";
          break;
        case "今日":
          curTitle.value = "每天销售额";
          break;
        case "本周":
          curTitle.value = "每周销售额";
          break;
        case "本月":
          curTitle.value = "月度销售额";
          break;

        default:
          curTitle.value = "年度销售额";
          break;
      }
    } else if (newValue[0] === "visitVolume") {
      switch (newValue[1]) {
        case "今年":
          curTitle.value = "年度访问量";
          break;
        case "今日":
          curTitle.value = "每天访问量";
          break;
        case "本周":
          curTitle.value = "每周访问量";
          break;
        case "本月":
          curTitle.value = "月度访问量";
          break;

        default:
          curTitle.value = "年度访问量";
          break;
      }
    }
  },
  {
    immediate: true,
  }
);
const timePicker = ref(["", ""]);
const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
</script>

<style lang="scss" scoped>
h4 {
  font-weight: bold;
  margin: 0px 0px 10px 0px;
}
.saleView {
  position: relative;
  margin-top: 20px;
  .chartContainer {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
  }
  .right {
    position: absolute;
    right: 30px;
    top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .buttonGroup {
      margin-right: 5px;
    }
  }
}
</style>
