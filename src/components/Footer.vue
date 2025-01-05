<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="bg-[#F6F6F6] mt-20 w-full h-[350px]">
    <div class="relative flex items-center justify-center">
      <router-link
      to="/"
      class="absolute top-0 left-[50%] -translate-x-1/2  border border-t-0 border-gray-4 rounded-b-[20px] p-3 md:px-4 md:py-3 shadow-3xl"
    >
      <img
        class="-mt-[80px]"
        src="../../public/logo/shadowLogo.png"
        alt="logo"
      />
      </router-link>
    </div>
    <div class="flex items-center justify-center">
      <div class="pt-10">
        <p
          class="w-[669px] sm:text-[16px] h-[42px] text-[#000000] leading-5 text-[16px] sm:ml-[60px] text-center grid md:text-[16px] sm:w-[380px]"
        >
          77.uz marketplace - это виртуальная платформа в Узбекистане, которая
          облегчает покупки и продажи, связывая продавцов с потенциальными
          клиентами.
        </p>
        <br />
        <div
          class="flex gap-[72px] justify-center items-center sm:gap-10 sm:text-[15px] mt-6"
        >
          <div class="flex">
            <img src="../../public/logo/footerLogo.png" alt="footerLogo" />
            <p class="">Доска объявлений</p>
          </div>
          <div class="flex">
            <img src="../../public/logo/footerLogo.png" alt="footerLogo" />
            <p class="">Условия пользования</p>
          </div>
          <div class="flex">
            <img src="../../public/logo/footerLogo.png" alt="footerLogo" />
            <p>+998 88 500 50 00</p>
          </div>
        </div>
        <br />
        <div
          class="relative flex items-center justify-center gap-10 sm:justify-center sm:items-center sm:gap-8"
        >
          <img class="sm:w-[150px]" src="../../public/logo/appStores.png" alt="" />
          <img class="sm:w-[150px]" src="../../public/logo/appStores2.png" alt="" />
        </div>
        <br />
        <p class="w-[450px] h-[42px] text-center ml-[70px]">
          Загрузите наше <a class="text-blue-400" href="#">приложение</a> и
          пользуйтесь с платформой
          <a class="text-blue-400" href="#">ещё удобнее</a>
        </p>
      </div>
    </div>
  </div>
</template>
