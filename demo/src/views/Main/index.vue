<script lang="ts" setup>
import Navigation from '@/components/Navigation.vue'
import Mapbox from '@/components/Mapboxgl.vue'
import Slider from '@/components/Slider.vue'
</script>

<template>
    <div class="head">
        <Navigation></Navigation>
    </div>

    <div class="map">
        <Mapbox></Mapbox>
        <Slider></Slider>
    </div>
    
</template>