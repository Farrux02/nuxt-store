<template>
  <Popover @update:open="isActive = $event">
    <PopoverTrigger
      :class="[
        'border border-[#EAEDF0] py-[22px] pl-[44px] rounded-xl w-[336px] max-sm:w-[calc(100%-32px)] text-left shadow-md relative',
        {
          'border-blue-main shadow-blue-main shadow-sm': isActive,
        },
      ]"
    >
      <div>
        <p class="font-semibold text-base text-black-main">{{ props.name }}</p>
        <p class="text-[#8E9297] text-sm font-normal">{{ props.adCount }}</p>
      </div>
      <div
        :class="[
          'absolute w-16 h-16 rounded-xl border bg-white left-[-32px] top-1/2 -translate-y-1/2 shadow-md flex items-center justify-center',
          {
            '!bg-blue-main border-blue-main border-opacity-20 shadow-blue-main':
              isActive,
          },
        ]"
      >
        <img
          :src="props.icon"
          :class="[{ 'filter invert brightness-0': isActive }]"
          alt="Icon"
        />
      </div>
    </PopoverTrigger>
    <PopoverContent class="min-w-[600px] mx-auto p-5">
      <ul class="grid grid-cols-3 min-w-[600px] gap-x-6 gap-y-3">
        <li
          v-for="subcategory in props.subcategories"
          :key="subcategory.id"
          class="py-3 text-sm text-black-main font-medium flex items-center justify-between cursor-pointer"
        >
          {{ subcategory.name }}
          <Icon name="tabler:chevron-right" />
        </li>
      </ul>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import type { ICategory } from "~/types/categories";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const props = defineProps<ICategory>();

const isActive = ref<boolean>(false);
</script>

<style scoped>
</style>