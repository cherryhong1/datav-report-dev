import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import vEcharts from "vue-echarts"
import 'default-passive-events'
import * as echarts from "echarts";
import "echarts-liquidfill" // 水球图
import 'echarts-wordcloud'; // 词云图
const app = createApp(App);

app.config.globalProperties.$echarts = echarts;
app.component('v-chart',vEcharts)

app.mount("#app");