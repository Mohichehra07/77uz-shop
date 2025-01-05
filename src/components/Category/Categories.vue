<script setup>
import { ref, onMounted } from "vue";
import CategoriesItem from "./categoreisItem.vue";
import { category } from "../../constants/data";
import SkletLoading from "../UI/SkletLoading.vue";


const categories = ref([]);
 const loading = ref(false);

function loadCategory() {
  loading.value = true;
}

  setTimeout(() => {
    categories.value = category.map((item) => ({
      name: item.title,
      icon: item.icon,
      count: item.product_count
    }));
    loading.value = false;
  }, 700);


onMounted(() => {
  loadCategory();
});
</script>

<template>
  <div class="flex justify-center ">
      <input type="search" placeholder="Search" class="h-[40px] w-[300px] placeholder:pl-3"> 
     <button class="w-[100px] h-[40px] rounded-lg text-white bg-black ">Search</button>
   </div>
  <section class="relative bg-white ">
    <strong><h1 class="text-[25px] mb-10 text-center">Categories</h1></strong> 

    <div class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 cotainerMain" v-show="!loading">
      <CategoriesItem v-for="item in categories" :item="item" />
    </div>

    <div
      class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5" v-show="loading">
    <SkletLoading class="cotainerMain" type="category" v-for="i in 9" :key="i" v-show="loading" />
    </div>
  </section>
</template>
