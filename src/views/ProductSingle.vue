<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ads } from "@/constants/data.js";

const route = useRoute();
const product = ref(null);
const loading = ref(false);

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    const productId = parseInt(route.params.id);
    product.value = ads.find((item) => item.id === productId);
    loading.value = false;
  }, 700);
});
</script>

<template>
  <div v-if="loading" class="text-center font-bold text-[30px]">
    Yuklanmoqda...
  </div>
  <div v-else-if="product" class="containerMain">
    <div class="bg-white w-[700px] border p-4 rounded">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="w-100 h-50" :src="product.image" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              :src="product.miniImage2"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              :src="product.miniImage"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- <img
      :src="product.image"
      :alt="product.title"
      class="h-auto rounded-lg w-[500px]"
    /> -->
      <div class="flex gap-2">
        <img :src="product.miniImage" alt="" />
        <img :src="product.miniImage2" alt="" />
        <img :src="product.miniImage3" alt="" />
      </div>
      <h1 class="text-xl font-bold">{{ product.descraption }}</h1>
      <div class="flex gap-2">
        <p
          class="px-2 pb-1 rounded-md text-gray-1 max-w-max whitespace-nowrap bg-[#d6d7d8]"
        >
          {{ product.date }}
        </p>
        <p
          class="px-2 pb-1 rounded-md text-gray-1 max-w-max whitespace-nowrap bg-[#d6d7d8]"
        >
          <strong>{{ product.location }}</strong>
        </p>
      </div>
      <div class="flex items-center justify-between">
        <strong
          ><h1
            class="flex gap-2 text-base font-bold text-ellipsis-black md:text-2xl leading-130"
          >
            {{ product.cost }}
            <p class="text-blue-600">SUM</p>
          </h1></strong
        >

        <button
          class="flex items-center py-1.5 text-white bg-blue-600 rounded px-9"
        >
          <span class="icon-phone-one-converted"></span
          ><a href="tel:71 200 70 07 ">{{ product.phoneNumber }}</a>
        </button>
      </div>
    </div>
  </div>
  <div v-else class="text-center">Mahsulot topilmadi</div>

<div>
  

  <div class="bg-white border w-[260px] p-3">
    <div>
      <div class="flex gap-3">
        <img src="../../public/administarator.png" alt="" />
        <div>
          <h1>Малика Абдурахимова</h1>
          <p class="text-[#63676C]">ID: 1326547</p>
        </div>
      </div>
      <h2>+998 71 200 70 07</h2>
    </div>
    <button class="bg-[#EAEDF0] px-4 py-1.5 rounded-sm">Все объявления</button>
  </div>
<div class="w-[200px] border cotainerMain">
  <h1 class="font-bold text-[20px] border-b-2 ">Местоположение</h1>
  <div class="flex gap-3">
    <span class="icon-location text-[18px] text-blue-600"></span>
    <h2>г.Ташкент, ул.Олмачи 1-й проезд 13 дом</h2>
  </div>
  <img src="../../public/Map.png" alt="">
</div>
  
</div>
</template>
