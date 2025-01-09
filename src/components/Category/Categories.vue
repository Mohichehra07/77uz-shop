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


  <section class="relative bg-white">
    <strong><h1 class="text-[25px] mb-10 text-center">Categories</h1></strong>
    <p class="text-[16px] text-center text-[#8E9297]">Вы можете найти все категории, которые вам нужны от покупателя</p>

    <div v-if="!loading" class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 cotainerMain">
      <CategoriesItem v-for="item in categories" :key="item.name" :item="item" />
    </div>

    <div v-if="loading" class="grid pb-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
      <SkletLoading class="cotainerMain" type="category" v-for="i in 9" :key="i" />
    </div>
  </section>
</template>





