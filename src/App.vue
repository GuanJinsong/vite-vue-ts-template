<template>
  <div>
    <nav>
      <router-link to="/">hello world</router-link>
      |
      <router-link to="/temp">temp</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
