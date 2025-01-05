<script setup>
import ProductItem from '@/components/Product/ProductItem.vue';
import { ads } from '@/constants/data';
import { ref } from 'vue';

import Filter from '@/Filter/Filter.vue';
import { RouterLink } from 'vue-router';
import Modal from '@/components/Modal/Modal.vue';


// Select variantlarini yaratish

const isChecked = ref({});  // Har bir option uchun alohida status saqlash

const products = ref([]);

setTimeout(() => {
  products.value = ads.map((item) => ({
    location: item.location,
    image: item.image,
    cost: item.cost,
    descraption: item.descraption,
    date: item.date,
    phoneNumber: item.phoneNumber,
  }));
}, 700);

const isOpenModal = ref(false);

const openModal = () => {
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false;
};

</script>

<template>
  <div class="bg-[#F0F3F7]">
    <div class="flex ">
      <div>
        <div class="flex gap-4 md:text-[16px] sm:text-[10px] ml-5">
          <router-link to="/">
            <h1>Glavniy</h1>
          </router-link>
          <h1>Restoran va kafe</h1>
        </div>
        <Filter class="md:block sm:hidden"/>
      </div>
      <div>
        <strong><h1 class="text-[30px] ml-11">Результаты поиска</h1></strong>
        <div class="flex items-center">
          <input type="text" class=" md:w-[700px] h-[40px] rounded-md ml-11 border placeholder:pl-4 sm:w-[300px]" placeholder="Search">
          <span class="sm:block md:hidden icon-Frame-2087326051-converted text-[30px]" @click="openModal"></span>
        </div>
        <div class="grid w-full grid-cols-2 gap-6 my-6 sm:grid-cols-2 lg:grid-cols-4 md:my-10 ">
          <ProductItem v-for="item in products" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
    
    <Modal :is-open="isOpenModal" @close="closeModal">
      <Filter />
    </Modal>

    
  </div>
</template>

