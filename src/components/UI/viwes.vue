<script setup>
import { defineProps } from 'vue'
defineProps({
    type:String,
});
</script>
<template>
<div>
    <div v-if=" type === 'two'" class="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-icon relative z-[1] border border-gray-4  group-hover:bg-blue-400 duration-300 transition-300">
        
    </div>
</div>
</template>