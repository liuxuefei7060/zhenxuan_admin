<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slide">111</div>
    <!--  -->
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <p style="height: 1000px">12313</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: red;

  .layout_slide {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
  }

  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: aliceblue;
    position: fixed;
    top: 0;
    left: $base-menu-width;
  }

  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    background-color: gray;
    overflow: auto;
    padding: 20px;
  }
}
</style>
