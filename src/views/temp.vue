<template>
  <div id="map">temp component</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import * as L from 'leaflet'

onMounted(() => {
  const mapIns = L.map('map').setView([51.505, -0.09], 13)
  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mapIns)
})
</script>

<style lang="less" scoped>
#map {
  height: 380px;
}
</style>
