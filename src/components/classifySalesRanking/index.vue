<template>
  <el-card shadow="hover">
    <template #header>
      <div class="card-header">
        <span>分类销售排行</span>
        <el-radio-group v-model="radioStatus" size="small">
          <el-radio-button label="品类"></el-radio-button>
          <el-radio-button label="商品"></el-radio-button>
        </el-radio-group>
      </div>
    </template>
    <v-chart :option="option" style="{
      width: 100%;
      height: 300px;
    }"></v-chart>
  </el-card>
</template>

<script setup>
import { ref } from "vue";

const radioStatus = ref("品类");
const title = radioStatus.value === "品类" ? "品类分布" : "商品分布";
const option = ref({
  title: {
    text: title,
    left: "left",
    textStyle:{
      fontSize:14
    }
  },
  legend: {
    orient: "vertical",
    right: "right",
    top:'middle',
    formatter:(name)=>{
      return name
    }
    // data:[
    // { value: 12, legendname: "粉面粥店|11.96%",name:'粉面粥店' },
    //     { value: 24, legendname: "简餐便当|29.24%" ,name:'简餐便当'},
    //     { value: 7, legendname: "汉堡披萨|29.24%" ,name:'汉堡披萨'},
    //     { value: 4, legendname: "香锅冒菜|3.99%" ,name:'香锅冒菜'},
    //     { value: 15, legendname: "小吃炸串|14.95%" ,name:'小吃炸串'},
    //     { value: 33, legendname: "地方菜系|32.89%" ,name:'地方菜系'}
    // ]
  },
  graphic:[
    {
      type:'text',
      id:'text1',
      left:'33%',
      top:'46%',
      style:{
        text:'累计订单量',
        color:'#333',
        fontSize:14
      }
    },
    {
      type:'text',
      id:'text2',
      left:'36%',
      top:'53%',
      style:{
        text:'809',
        color:'#333',
        fontSize:18,
        fontWeight:'bold'
      }
    }
  ],
  series: [
    {
      name:'分布',
      type: "pie",
      legendname: title,
      radius: ["40%",'50%'],
      center:[260,150],
      data: [
      { value: 12, legendname: "粉面粥店|11.96%",name:'粉面粥店' ,percent:'12%'},
        { value: 24, legendname: "简餐便当|29.24%" ,name:'简餐便当',percent:'24%'},
        { value: 7, legendname: "汉堡披萨|29.24%" ,name:'汉堡披萨',percent:'7%'},
        { value: 4, legendname: "香锅冒菜|3.99%" ,name:'香锅冒菜',percent:'4%'},
        { value: 15, legendname: "小吃炸串|14.95%" ,name:'小吃炸串',percent:'15%'},
        { value: 33, legendname: "地方菜系|32.89%" ,name:'地方菜系',percent:'33%'}
        // { value: 12, legendname: "粉面粥店" },
        // { value: 30, legendname: "简餐便当" },
        // { value: 7, legendname: "汉堡披萨" },
        // { value: 4, legendname: "香锅冒菜" },
        // { value: 15, legendname: "小吃炸串" },
        // { value: 33, legendname: "地方菜系" }
      ],
    },
  ],
  tooltip:{
    trigger:'item',
    show:true,
    formatter:(params)=>{
      const str = params.data.name +'</br>'+params.marker+'占比：'+params.percent +'%'
      return str
    }
  }
});
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
