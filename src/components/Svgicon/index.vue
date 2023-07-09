
<template>
    <svg>
        <use :xlink:href="'#icon-' + name" :fill="color" :width="width" :height="height"></use>
    </svg>
</template>
  
<script setup lang="ts">
// import { defineProps } from 'vue'

defineProps({
    //xlink：href的前缀
    // prefix: {
    //     type: String,
    //     defualt: "#icon-"
    // },
    name: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    width: {
        type: String,
        default: "16px"
    },
    height: {
        type: String,
        default: "16px"
    }
})

</script>
  
<style scoped></style>
  