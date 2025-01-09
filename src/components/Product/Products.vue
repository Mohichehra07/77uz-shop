<script setup>
import { ref, onMounted } from "vue";
import ProductItem from "./ProductItem.vue";
import { ads } from "@/constants/data";
import SkletLoading from "../UI/SkletLoading.vue";

const product = ref([]);
const loading = ref(false);

function loadProduct() {
  loading.value = true;
}

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    product.value = ads;
    loading.value = false;
  }, 500);
});

onMounted(() => {
  loadProduct();
});
</script>

<template>
  <div class="text-center">
    <strong><h1 class="text-[32px]">Объявления</h1></strong>
    <p class="text-[16px] text-[#8E9297]">
      Вы можете найти все категории, которые вам нужны от покупателя
    </p>
  </div>

  <div v-if="!loading">
    <div
      class="grid w-full grid-cols-2 gap-5 my-6 sm:grid-cols-2 lg:grid-cols-4 md:my-10 cotainerMain"
    >
      <ProductItem v-for="(item, key) in product" :key="key" :item="item" />
    </div>
  </div>
  <div v-if="loading">
    <div
      class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
    >
      <SkletLoading
        class="cotainerMain"
        type="product"
        v-for="i in 6"
        :key="i"
        v-show="loading"
      />
    </div>
  </div>
</template>
 