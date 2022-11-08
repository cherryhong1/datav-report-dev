<template>
  <el-row>
    <el-table :data="tableData" class="tableData">
    <el-table-column prop="rank" label="排名" width="180" />
    <el-table-column prop="keyword" label="关键词" width="180" />
    <el-table-column prop="searchNum" label="搜索量" />
    <el-table-column prop="searchUserNum" label="搜索用户数" />
  </el-table>
  </el-row>
<el-row justify="end">
  <el-pagination class="pagination"  background layout="prev, pager, next" :total="1000" />
</el-row>
    
</template>

<script setup>
const tableData = [
  {
    rank: 1,
    keyword: 'Tom',
    searchNum:1000,
    searchUserNum:4000
  },
  {
    rank: 2,
    keyword: 'Tom',
    searchNum:1000,
    searchUserNum:4000
  },
  {
    rank: 3,
    keyword: 'Tom',
    searchNum:1000,
    searchUserNum:4000
  },
  {
    rank: 4,
    keyword: 'Tom',
    searchNum:1000,
    searchUserNum:4000
  },
]
</script>
<style lang="scss" scoped>
  .tableData{
    height: 200px;
  }
  // .pagination{
  //   float: right;
  // }
</style>