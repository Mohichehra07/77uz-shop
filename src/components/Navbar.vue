<script setup>
import { ref } from "vue";
import Modal from "../components/Modal/Modal.vue";
import { firstModal } from "@/constants/data";

const isOpenModal = ref(false);

const openModal = () => {
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false;
};
</script>
<template>
  <div
    class="py-3 md:py-5 border-b border-gray-200 bg-white mb-4 sticky top-0 z-[5] justify-between flex px-7 ">
    <div class="flex items-center justify-center gap-6 ">
        <select
          class=" px-4 py-2 pr-8 text-sm border md:block sm:hidden border-gray-300 rounded-md"
        >
          <option value="ru" class="md:block sm:hidden items-center">
            Русский
          </option>
          <option value="uz" class="md:block sm:hidden items-center">
            O'zbekcha
          </option>
        </select>
        <select class=" px-4 py-2 pr-8 text-sm border sm:block md:hidden border-gray-300 rounded-md">
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
      <div class="flex items-center group hover:to-blue-500 left-[180px]">
        <span
          class="text-2xl transition-all duration-300 icon-phone-one-converted md:text-3xl group-hover:text-blue-200"
        ></span>
        <a
          class="hidden md:block group-hover:text-blue-200"
          href="tel: +998 88 500 50 00"
          >+998 88 500 50 00</a
        >
      </div>
    </div>

    <router-link
      to="/"
      class="absolute top-0 left-[50%] -translate-x-1/2 bg-white border border-t-0 border-gray-4 rounded-b-[20px] p-3 md:px-4 md:py-3 shadow-3xl"
    >
      <img class="max-md:h-12" src="../../public/logo/logo.png" alt="logo" />
    </router-link>

    <div class="flex mr-[50px]">
      <router-link to="/favourite">
        <div
        class="group top-2 cursor-pointer  grid grid-cols-[auto_auto] gap-2 items-center"
      >
        <span
          class="text-2xl transition-all duration-300 icon-like md:text-3xl group-hover:text-blue-200"
        ></span>
        <span class="md:block sm:hidden  group-hover:text-blue-200">Избранные</span>
      </div>
      </router-link>


      <div
        class="group top-2 right-2 grid grid-cols-[auto_auto] gap-2 items-center sm:w-10"
      >
        <button
          @click="openModal"
          class="flex items-center gap-2 px-5 text-black transition-all duration-500 border border-black rounded-sm sm:border-none"
        >
          <span class="hidden md:block">Войти</span>
          <span class="icon-exit-converted"></span>
        </button>
      </div>
    </div>
  </div>

  <!--Modal -->

  <Modal :is-open="isOpenModal" @close="closeModal">
    <div v-for="data in firstModal" :key="data" class="p-3">
      <strong>
        <h1>{{ data.title }}</h1>
      </strong>
      <p class="text-[12px] text-[#8E9297]">{{ data.text }}</p>
      <br />

      <form action="registartion">
        <label for="login">
          {{ data.loginLable }}
          <input
            class="w-[338px] h-[44px] bg-[#F0F3F7] rounded-lg text-[14px] text-[#B8BBBD]"
            type="text"
            placeholder="Введите логин"
            required
          />
        </label>
        <label for="password">
          {{ data.passLable }}
          <input
            class="w-[338px] h-[44px] bg-[#F0F3F7] rounded-lg text-[14px] text-[#B8BBBD]"
            minlength="8"
            type="password"
            placeholder="Введите пароль"
            required
          /> </label
        ><br />
        <router-link class="text-[#388FF3] text-[12px]" to="#">{{
          data.parol
        }}</router-link
        ><br /><br />

        <button
          class="border-none bg-[#388FF3] m-2 text-[white] w-[338px] h-[44px] rounded-lg mt-20"
        >
          {{ data.login }}
        </button>
        <h3 class="text-[#8E9297] text-[12px] text-center">{{ data.want }}</h3>
        <button
          class="border m-2 border-blue-500 text-[#388FF3] w-[338px] h-[44px] rounded-lg"
        >
          {{ data.sumbit }}
        </button>
      </form>
    </div>
  </Modal>
</template>

telefon clasi class="group top-2 left-2 grid grid-cols-[auto_auto] gap-2
items-center cursor-pointer absolute md:relative md:left-auto md:right-auto
md:top-auto md:bottom-auto sm:left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2
sm:ml-4"
