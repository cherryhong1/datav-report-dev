<template>
  <el-card>
    <div class="title">{{title}}</div>
    <div class="value">￥ {{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps({
  title:{
    type:String
  },
  value:{
    type:String
  }
})
</script>

<style lang="scss" scoped>
.title{
  font-size: 12px;
  color:#999;
}
.value{
  letter-spacing: 1px;
  color: #333;
  font-weight: bold;
  margin: 5px 0;
}
.chart{
  height: 50px;
  width: 100%;
}
.line{
  margin: 10px 0;
  border-bottom: 1px solid #eee;
}

</style>
<style lang="scss">
  .emphasis{
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
  }
  .triangleUp{
  display: inline-block;
  margin-left: 5px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-bottom: 4px solid purple;
  margin-bottom: 2px;
}
.triangleDown{
  display: inline-block;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top: 4px solid green;
  margin: 6px 0 0 5px;
}
</style>