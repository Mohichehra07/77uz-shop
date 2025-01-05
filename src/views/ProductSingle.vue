<script setup>
import single from "../components/single/single.vue";
</script>
<template>
  <div class="cotainerMain bg-gray-400 flex">
    <router-link to="/">
      <p>Glavniy</p>
    </router-link>
    <single class="bg-white w-[500px] m-9 rounded-md py-4" />

    <div class="w-[250px] p-4 h-[180px] bg-white mt-10 " >
      <div class="flex gap-2">
        <img src="../../public/administarator.png" alt="registrator" />
        <div>
          <h1>Малика Абдурахимова</h1>
          <p class="text-[#63676C]">ID: 1326547</p>
        </div>
      </div>
      <h1>+998 71 200 70 07</h1>
      <button class="px-3 py-2 bg-[#EAEDF0] ml-9 mt-4 rounded">Все объявления</button>
    </div>
  </div>
</template>
