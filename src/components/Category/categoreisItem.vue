<script setup>
import { defineProps, ref } from "vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const isRotated = ref(false);

const toggleRotate = () => {
  isRotated.value = !isRotated.value;
};
</script>

<template>

  <div
    @click="toggleRotate"
    class="flex   items-center cursor-pointer group shadow-3.5xl cotainerMain pt-5"
  > 
    <div
      class="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-icon relative z-[1] border border-gray-4  group-hover:bg-blue-400 duration-300 transition-300"
    >
      <i
        :class="item.icon"
        class="text-3xl text-blue-400  group-hover:text-white"
      ></i>
    </div>
    <div
      class="rounded- group-hover:border-blue-500 bg-white border border-gray-300 shadow py-[22px] pl-11 pr-3 -ml-8 w-full rounded-lg flex justify-between items-center relative z-0 transition-300 duration-300"
    >
      <div class="flex flex-col gap-1 text-left">
        <h2
          class="text-base font-semibold leading-normal text-dark line-clamp-1"
        >
          {{ item.name }}
        </h2>
        <p class="text-[11px] text-[gray] font-normal text-gray-1 leading-130">
          {{ item.count }}
        </p>
      </div>
      <i
        :class="{ 'rotate-360': isRotated, '-rotate-90': !isRotated }"
        class="text-[8px] leading-6 icon-stroke text-gray-200 group-hover:border-blue-400 transition-300 duration-300 group-hover:text-blue-400"
      ></i>
    </div>
  </div>
</template>
