<script setup>
import { RouterLink } from "vue-router";
import Categories from "@/components/Category/Categories.vue";
import Products from "@/components/Product/Products.vue";
</script>

<template>
  <div class="bg-[#F0F3F7] bg-fixed">
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