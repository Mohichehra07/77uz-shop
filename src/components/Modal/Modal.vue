<template>
    <div v-if="isOpen" class="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]" @click.self="closeModal">
      <div class="bg-[#fff] p-5 rounded-lg  w-[80vw] max-w-md h-[80vh] overflow-y-auto  relative">
        <button class="border-none text-[18px] font-bold absolute top-3 right-3 bg-none" @click="closeModal">x</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, defineProps, watch } from "vue";
  
  const props = defineProps(["isOpen"]);
  const emit = defineEmits(["close"]);
  
  // Modalni yopish
  const closeModal = () => {
    emit("close");
  };
  
  const preventScroll = () => {
    document.body.style.overflow = "hidden";
  };
  
  const allowScroll = () => {
    document.body.style.overflow = "";
  };
  
  watch(
    () => props.isOpen,
    (newVal) => {
      if (newVal) preventScroll();
      else allowScroll();
    }
  );
  </script>
  
