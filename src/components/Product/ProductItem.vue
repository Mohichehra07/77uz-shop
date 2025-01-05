<script setup>
import { defineProps } from "vue";
import { ref, onMounted } from "vue";
 const loading = ref(false);
const props = defineProps({
  item: {
    type: Object,
    id: Number,
    title: String,
    region: String,
    phone: String,
    price: String,
    image: String,
    time: String,
    miniImage: String,
  },
});
const like = ref(false);

function toggleLike() {
  like.value = !like.value;

  const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "[]");

  if (like.value) {
    savedLikes.push(props.item.id);
  } else {
    const index = savedLikes.indexOf(props.item.id);
    if (index !== -1) {
      savedLikes.splice(index, 1);
    }
  }

  localStorage.setItem("likedItems", JSON.stringify(savedLikes));
}

onMounted(() => {
  const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "[]");
  like.value = savedLikes.includes(props.item.id);
});

</script>
<template>

  <div class="cotainerMain">
    <div class="flex flex-wrap justify-start gap-10 rounded-md" v-show="!loading">
      <div class="w-[280px] h-[470px] border-gray-100 bg-white rounded-lg">
        <div class="relative">
          <span @click="toggleLike"
            class="absolute mt-3 ml-3 text-white text-[30px] icon-like"
          ></span>
          <img class="rounded-md" :src="props.item.image" alt="product" />
        </div>
        <div class="w-[238px] h-[190px] cursor-pointer p-5">
          <div
            class="w-[100px] text-center h-7 bg-[#EAEDF0] m-2 text-[14px] text-[#63676C] p-1"
          >
            {{ props.item.location }}
          </div>
          <strong>
            <h1
              class="text-black text-[15px] hover:text-[#388FF3] transition-all duration-500 cursor-pointer h-[80px]"
            >
              {{ props.item.descraption }}
            </h1>
          </strong>
          <p class="text-[#8E9297] text-[12px]">{{ props.item.date }}</p>
          <h4 class="text-[#8E9297] text-[12px]">
            {{ props.item.phoneNumber }}
          </h4>
          <h2 class="flex gap-2">
            {{ props.item.cost }}
            <p class="text-[#388FF3]">UZS</p>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
