<template>
  <el-row :gutter="20" class="bottom-wrapper">
    <el-col :span="12">
      <keywordSearch></keywordSearch>
    </el-col>
    <el-col :span="12">
      <classifySalesRanking></classifySalesRanking>
    </el-col>
  </el-row>
</template>

<script setup>
import classifySalesRanking from "../classifySalesRanking/index.vue"
import keywordSearch from "../keywordSearch/index.vue"
</script>

<style lang="scss" scoped>
.bottom-wrapper{
  margin: 20px 0;
}
</style>