<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><totalSales></totalSales></el-col>
      <el-col :span="6"><totalOrders></totalOrders></el-col>
      <el-col :span="6"><todayUsers></todayUsers></el-col>
      <el-col :span="6"><totalUsers></totalUsers></el-col>
    </el-row>
  </div>
</template>

<script setup>
import totalOrders from "../totalOrders/index.vue"
import totalSales from "../totalSales/index.vue"
import todayUsers from "../todayUsers/index.vue"
import totalUsers from "../totalUsers/index.vue"
</script>

<style lang="scss" scoped></style>
