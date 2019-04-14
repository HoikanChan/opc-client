<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">系统概览</el-menu-item>
      <el-menu-item index="2">小车状态</el-menu-item>
      <el-menu-item index="3">格口状态</el-menu-item>
      <el-menu-item index="4">结果查询</el-menu-item>
    </el-menu>
    <router-view />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
