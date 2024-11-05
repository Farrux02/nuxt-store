<template>
  <div
    class="bg-white rounded-xl hover:shadow-md transition-shadow duration-300 hover:cursor-pointer"
  >
    <div class="p-[2px] relative">
      <img
        class="w-full h-[240px] object-cover rounded-t-xl"
        :src="props.imageUrl"
        alt=""
      />
      <Button
        class="bg-transparent hover:bg-transparent shadow-none border-none absolute top-3 left-3 p-0 h-auto"
        @click="favActive = !favActive"
      >
        <HeartIcon
          :size="40"
          :class="[
            'w-10 h-10 icon',
            {
              'fill-red-500 stroke-red-500': favActive,
            },
          ]"
        />
      </Button>
    </div>
    <div class="p-5 text-left">
      <p
        class="inline-block w-auto py-1 px-2 rounded-md bg-[#eaedf0] font-normal text-sm text-[#63676C]"
      >
        {{ props.location }}
      </p>
      <div>
        <h4 class="text-lg font-semibold text-black-main mt-4 h-[48px] max-sm:truncate max-sm:max-w-[250px] max-sm:h-[24px]">
          {{ props.title }}
        </h4>
        <p class="font-normal text-sm text-[#8E9297] mt-2 max-sm:mt-1">{{ props.date }}</p>
        <p class="font-semibold text-base text-[#8E9297] mt-2 max-sm:text-xs max-sm:mt-0">
          {{ props.phoneNumber }}
        </p>
        <h3 class="text-2xl text-black-main font-bold mt-4 max-sm:text-base max-sm:mt-1">
          {{ formattedPrice }}
          <span class="text-blue-main text-base font-medium ml-1 max-sm:text-xs">
            {{ props.currency }}
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAd } from "~/types/ad";
import { HeartIcon } from "lucide-vue-next";

const props = defineProps<IAd>();
const formattedPrice = computed(() => {
  return new Intl.NumberFormat("ru-RU").format(props.price);
});

const favActive = ref<boolean>(false);
</script>

<style scoped>
.icon {
    width: 40px;
    height: 40px;
}
</style>