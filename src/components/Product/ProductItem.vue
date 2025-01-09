<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  item: {
    id: Number,
    descraption: String,
    location: String,
    phoneNumber: String,
    cost: String,
    image: String,
    date: String,
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
  <div class="relative">
    <button @click="toggleLike" class="absolute z-10 top-3 left-3">
      <i
        class="text-2xl text-white"
        :class="like ? 'icon-liked' : 'icon-like'"
      ></i>
    </button>

    <router-link
      :to="'/products/' + item.id"
      class="flex flex-col w-full h-full overflow-hidden bg-white border-2 border-white cursor-pointer product-card rounded-xl transition-300 group"
    >
      <div
        class="flex-shrink-0 w-full h-64 max-sm:h-44 max-xs:h-30 rounded-t-xl"
      >
        <img
          :src="props.item.image"
          class="object-cover w-full h-full rounded-t-lg"
          :alt="props.item.title"
        />
      </div>

      <div class="flex flex-col items-start h-full p-2 md:p-5">
        <div class="flex flex-col gap-1 my-2 md:my-4 md:gap-2">
          <span
            v-if="props.item.location"
            class="px-2 pb-1 rounded-md text-gray-1 max-w-max whitespace-nowrap bg-[#d6d7d8]"
          >
            {{ props.item.location }}
          </span>

          <h1
            class="font-semibold hover:text-[#388FF3] text-black duration-300 md:text-lg leading-130 line-clamp-2 group-hover:text-blue transition-300 text-sm leading-130 group-hover/card:text-blue transition-300 h-[36px] md:h-[56px]"
          >
            {{ props.item.descraption }}
          </h1>

          <p class="text-xs font-semibold md:text-sm leading-130 text-gray-1">
            {{ props.item.date }}
          </p>

          <p class="mt-2 text-base font-semibold text-[#63676C] text-secondary">
            {{ props.item.phoneNumber }}
          </p>
        </div>

        <div class="flex items-end gap-2 mt-auto">
          <h4 class="text-base font-bold text-black md:text-2xl leading-130">
            {{ props.item.cost   }}
          </h4>
          <span
            class="text-xs font-medium leading-5 uppercase text-blue md:leading-6 md:text-base text-[#388FF3]"
            >sum</span
          >
        </div>
      </div>
    </router-link>
  </div>
</template>
