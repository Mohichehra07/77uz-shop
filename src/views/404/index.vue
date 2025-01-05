<script setup>
import Navbar from "../../components/Navbar.vue";
import { RouterLink } from "vue-router";
</script>
<template>
    <div class="flex items-center justify-center">
        <img class="w-[567px]  h-[285px]" src="../../../public/notFound.png" alt="notFound">
        </div>
        <div class="text-center ml-[500px] ">
            <strong><h1 class="w-[512px] h-8">Страница,  которую вы ищете, не найдена</h1></strong>
        </div>
        <p class="text-[16px]  w-[438px] ml-[550px] text-center h-[42px]">Нам жаль, но, похоже, мы потеряли эту страницу, но мы не хотим терять вас.</p><br>
            <router-link to="/">
                <button class="-[246px] h-[38px] bg-[#388FF3] ml-[680px] rounded-lg text-white">Вернуться на главную</button>
            </router-link>
</template>