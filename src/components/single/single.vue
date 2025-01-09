<script setup>
import { ads } from '@/constants/data';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = computed(() =>parseInt(route.params.id));
const post = computed(() => {
    return ads.find((post) => post.id === postId.value) || null
});
</script>
<template>
    <div v-if="post">
        <div>
            <img class="p-8 sm:w-[500px]" :src="post.image" alt="t"> <br>
            <div class="flex gap-6 ml-[50px] sm:ml-3">
                <img class="w-[86px] h-16 sm:w-12" :src="post.miniImage" alt="">
                <img class="w-[86px] h-16 sm:w-12" :src="post.miniImage2" alt="">
                <img class="w-[86px] h-16 sm:w-12" :src="post.miniImage3" alt="">
                <img class="w-[86px] h-16 sm:w-12" :src="post.miniImage4" alt="">
            </div>
        </div>
        <div class="cotainerMain">
            <p class="text-[#8E9297] text-[14px]">product.type</p>
            <strong> <h1 class="text-[25px] sm:text-[18px]"> {{ post.descraption }} </h1> </strong>
            <div class="flex">
                <button class="w-[100px] text-center h-7 bg-[#EAEDF0] m-2 text-[14px] text-[#63676C] p-1">{{post.date}}</button>
                <button class="w-[100px] text-center h-7 bg-[#EAEDF0] m-2 text-[14px] text-[#63676C] p-1">{{post.location}}</button>
            </div>
            <div class="flex justify-between">
                <div class="flex items-center justify-center gap-2">
                    <strong><h1 class="sm:text-[10px]">{{post.cost}} </h1> </strong> 
                    <p class="text-blue-400 sm:text-[12px]">UZS</p>
                </div>
                <button class="px-5 py-1 text-white bg-blue-600 rounded-md sm:text-[10px]">
                    <span class=" icon-phone-one-converted"></span>
                    <a href="tel:+998 71 200 70 07">+998 71 200 70 07</a>
                </button>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Post topilmadi</p>
    </div>
</template>
<!-- <script setup>
import { ads } from '@/constants/data';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = computed(() =>parseInt(route.params.id));
const post = computed(() => {
    return ads.find((post) => post.id === postId.value) || null
});





</script>
<template>
    <div v-if="post">
        <img :src="post.image" alt="rasm">
        <img :src="post.miniImage" alt="rasm">
        <img :src="post.miniImage2" alt="rasm">
        <img :src="post.miniImage2" alt="rasm">
        <h1>{{ post.descraption }}</h1>
        <p> {{ post.date }} </p>
    </div>
    <div v-else>
        <p>Post topilmadi</p>
    </div>
</template> -->
