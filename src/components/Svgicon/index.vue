
<template>
    <svg>
        <use xlink:href="#icon-vue" fill="yellow"></use>
        <!-- <use :xlink:href="prefix + 'vue'" fill="yellow"></use> -->
    </svg>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    //xlink：href的前缀
    prefix: {
        type: String,
        defualt: "#icon-"
    },
    name: {
        type: String,
        default: ""
    }
})

</script>
  
<style scoped></style>
  