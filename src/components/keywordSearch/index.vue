<template>
  <el-card shadow="hover" header="关键词搜索">
    <div class="searchContainer">
      <el-row :gutter="20" class="chartContainer">
        <el-col :span="12">
        </el-col>
        <el-col :span="12">
        </el-col>
      </el-row>
      <div class="tableContainer">
        <keywordTable></keywordTable>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import keywordTable from "../keywordTable/index.vue"
</script>

<style lang="scss" scoped>
.searchContainer{
  height: 300px;
}
.chartContainer{
  height: 50px;
  margin-bottom: 20px;
}
.tableContainer{
  height: 230px;
}
</style>