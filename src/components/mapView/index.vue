<template>
  <div class="mapView">
    <el-row :gutter="20" class="h450">
      <el-col :span="16" class="h450">
        <el-card class="box-card">
          <mapVue></mapVue>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="1" class="h450 right">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>水球图</span>
            </div>
          </template>
          <liquidFill></liquidFill>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>关键词</span>
            </div>
          </template>
          <wordCloud></wordCloud>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import mapVue from "../map/index.vue";
import liquidFill from "../quidfill/index.vue";
import wordCloud from "../wordcloud/index.vue";
</script>

<style lang="scss" scoped>
.mapView,
.h450 {
  height: 450px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .box-card:last-child {
    margin-top: 10px;
  }
}
</style>
