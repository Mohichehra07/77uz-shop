<script setup>
import { RouterLink } from "vue-router";
import Categories from "@/components/Category/Categories.vue";
import Products from "@/components/Product/Products.vue";
</script>

<template>
  <div class="bg-[#F0F3F7] ">
    <div class="flex justify-center">
      <div class="relative flex items-center">
        <!-- Search input -->
        <input type="search" placeholder="Search" class="h-[40px] w-[300px] pl-3 rounded-l-lg border border-r-0" /> 
        <!-- Search button -->
        <button class="w-[100px] h-[40px] rounded-r-lg text-white bg-black">Search</button>
      </div>
    </div>
    <div >
      <Categories  />
      <Products />  
      <router-link to="/products">
        <div class="flex items-center justify-center ">
          <button class="w-[179px] border h-[40px] rounded-xl text-black hover:bg-[#d3d6d9]  bg-[#e5e9ec]  transition-all duration-250">"Показать больше"
            <span class="font-bold icon-down-converted text-[16px] "></span>
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>