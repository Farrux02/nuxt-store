<template>
  <section class="mt-[76px] pt-[54px] pb-9 bg-white text-center relative">
    <CategorySearchInput />
    <div class="max-w-[1184px] mx-auto max-sm:px-4">
      <h2 class="text-[32px] font-bold text-black-main max-sm:text-[28px]">
        {{ $t("labels.category") }}
      </h2>
      <p class="mt-2 text-[#8E9297] font-normal text-base">
        {{ $t("labels.category_description") }}
      </p>
      <div
        class="grid grid-cols-3 gap-y-5 mt-10 max-sm:grid-cols-1 max-lg:grid-cols-2 justify-items-end"
      >
        <CategoryCard
          v-for="category in data?.categories"
          :key="category.id"
          :name="category.name"
          :ad-count="category.adCount"
          :id="category.id"
          :subcategories="category.subcategories"
          :icon="category.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useFetch("/api/categories");
</script>