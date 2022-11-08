<template>
    <ul>
      <li class="item" v-for="(item, i) in list" :key="item.id">
        <div>
          <span :class="i < 3 ? 'circle' : ''">
            {{ i + 1 }}
          </span>
          {{ item.name }}
        </div>
        <div>{{ item.volume }}</div>
      </li>
    </ul>

</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  tabValue: {
    type: String,
    default: "salesVolume",
  },
  curTime: {
    type: String,
    default: "year",
  },
  timePicker: {
    type: Array,
    default: ["", ""],
  },
});
const list = ref([
  {
    id: 1,
    name: "麦当劳",
    volume: 2344354,
  },
  {
    id: 2,
    name: "肯德基",
    volume: 2323434,
  },
  {
    id: 3,
    name: "必胜客",
    volume: 1134323,
  },
  {
    id: 4,
    name: "海底捞",
    volume: 943232,
  },
  {
    id: 5,
    name: "汉堡王",
    volume: 743435,
  },
  {
    id: 6,
    name: "瑞幸咖啡",
    volume: 634323,
  },
  {
    id: 7,
    name: "星巴克",
    volume: 343232,
  },
  {
    id: 8,
    name: "真功夫",
    volume: 243435,
  }
]);
</script>

<style lang="scss" scoped>
ul{
  width: 100%;
  padding-left: 0;
  height: 300px;
  overflow: hidden;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  span {
    font-size: 14px;
    display: inline-block;
    color: #333;
    width: 25px;
    height: 25px;
    text-align: center;
      line-height: 25px;
    &.circle {
      border-radius: 50%;
      color: #fff;
      background: #333;

    }
  }
  div>span{
    font-size: 16px;
  }
}
</style>
