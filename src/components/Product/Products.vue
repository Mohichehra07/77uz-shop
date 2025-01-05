<script setup>
import { ref, onMounted } from "vue";
import ProductItem from "./ProductItem.vue";
import { ads } from "@/constants/data";
import SkletLoading from "../UI/SkletLoading.vue";
import { RouterLink, RouterView } from "vue-router";
const products = ref(ads)


const product = ref([]);
const loading = ref(false);

function loadProduct() {
  loading.value = true;
}

setTimeout(() => {
  product.value = ads.map((item) => ({
    location: item.location,
    image: item.image,
    cost: item.cost,
    descraption: item.descraption,
    date: item.date,
    phoneNumber: item.phoneNumber,
  }));
  loading.value = false;
}, 700);

onMounted(() => {
  loadProduct();
});
</script>

<template>
  <div class="text-center">
    <strong><h1 class="text-[32px]">Объявления</h1></strong>
    <p class="text-[16px] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от покупателя</p>
   
  </div>
  
     <div
    class="grid w-full grid-cols-2 gap-5  my-6 sm:grid-cols-2 lg:grid-cols-4 md:my-10 cotainerMain"
    v-show="!loading"
  >

    <router-link :to="'/about/' + product.id" v-for="product in products" :key="product.id">
      <ProductItem :item="product" />
    </router-link>
  </div>
  <div
    class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
    v-show="loading"
  >
    <SkletLoading class="cotainerMain" type="product" v-for="i in 6" :key="i" v-show="loading" />
  </div>
</template>
