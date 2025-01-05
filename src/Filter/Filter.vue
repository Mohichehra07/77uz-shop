<template>
    <div class="flex flex-col m-5 w-[320px] h-auto rounded-lg px-8 py-5 bg-white ">
      <div>
        <h1>Region</h1>
        <select class="border-2 border-black px-8 py-2 rounded-md">
          <option value="choose">Viloyatingizni tanlang</option>
          <option value="andijan">Andijon</option>
          <option value="namangan">Namangan</option>
          <option value="khorezm">Xorazm</option>
          <option value="fergana">Farg'ona</option>
          <option value="navoiy">Navoiy</option>
          <option value="buxoro">Buxoro</option>
          <option value="sirdaryo">Sirdaryo</option>
        </select>
      </div>
      <!-- Erkaklar kiyimi (bosilganda ochilish yoki yopilish) -->
      <div
        class="cursor-pointer text-xl font-semibold"
        @click="toggleMenDropdown"
      >
        <label for="mens">
          <input type="checkbox" id="mens" v-model="isMenChecked" />
          Erkaklar kiyimi
        </label>
      </div>
  
      <!-- Erkaklar kiyimi variantlari -->
      <div
        v-if="isMenChecked"
        class="mt-2 bg-white   "
      >
        <div
          v-for="(option, index) in menOptions"
          :key="index"
          class="flex border-b items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <input
            type="checkbox"
            :id="option"
            v-model="selectedMenOptions"
            :value="option"
            class="mr-2"
          />
          <label :for="option">{{ option }}</label>
        </div>
      </div>
  
      <!-- Ayollar kiyimi (bosilganda ochilish yoki yopilish) -->
      <div
        class="cursor-pointer text-xl font-semibold mt-6"
        @click="toggleWomenDropdown"
      >
        <label for="women">
          <input type="checkbox" id="women" v-model="isWomenChecked" />
          Ayollar kiyimi
        </label>
      </div>
  
      <!-- Ayollar kiyimi variantlari -->
      <div
        v-if="isWomenChecked"
        class="mt-2 bg-white  border-gray-300"
      >
        <div
          v-for="(option, index) in womenOptions"
          :key="index"
          class="flex  border-b items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <input
            type="checkbox"
            :id="option"
            v-model="selectedWomenOptions"
            :value="option"
            class="mr-2"
          />
          <label :for="option">{{ option }}</label>
        </div>
      </div>
  
      <!-- Qizlar uchun (bosilganda ochilish yoki yopilish) -->
      <div
        class="cursor-pointer text-xl font-semibold mt-6"
        @click="toggleGirlsDropdown"
      >
        <label for="girls">
          <input type="checkbox" id="girls" v-model="isGirlsChecked" />
          Qizlar uchun
        </label>
      </div>
  
      <!-- Qizlar uchun variantlari -->
      <div
        v-if="isGirlsChecked"
        class="mt-2 bg-white  border-gray-300"
      >
        <div
          v-for="(option, index) in girlsOption"
          :key="index"
          class="flex  border-b items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <input
            type="checkbox"
            :id="option"
            v-model="selectedGirlsOptions"
            :value="option"
            class="mr-2"
          />
          <label :for="option">{{ option }}</label>
        </div>
      </div>
  <button type="submit" class="m-4 p-3 text-white bg-[#388FF3] rounded-lg">Применить фильтр</button>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Variantlar (options)
        menOptions: [
          "Aksessuarlar",
          "Djemperlar va futbolkalar",
          "Verni kiyim",
          "Kiyim komplektlari",
          "Shimlar va kalislar",
          "Obuv",
          "Uy va uxlash uchun",
        ],
        womenOptions: [
          "Kiyimlar",
          "Aksessuarlar",
          "Paltolar",
          "Kofta va bluzkalar",
          "Futbolkalar",
          "Shimlar va yubkalar",
        ],
        girlsOption: [
          "Qizlar uchun kiyim",
          "Futbolkalar",
          "Yubkalar",
          "Kostyumlar",
          "Kiyimlar",
        ],
  
        // Foydalanuvchidan tanlangan variantlar
        selectedMenOptions: [],
        selectedWomenOptions: [],
        selectedGirlsOptions: [],
  
        // Yangi model o'zgaruvchilar
        isMenChecked: false,
        isWomenChecked: false,
        isGirlsChecked: false,
      };
    },
  };
  </script>
  