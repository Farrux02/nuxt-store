<template>
  <section class="mt-16 pb-[72px]">
    <div class="max-w-[1184px] mx-auto text-center max-lg:px-3">
      <h2 class="text-[32px] font-bold text-black-main max-sm:text-[28px]">
        {{ $t("labels.ads") }}
      </h2>
      <p class="mt-2 text-[#8E9297] font-normal text-base">
        {{ $t("labels.ads_description") }}
      </p>
      <div class="grid grid-cols-4 pb-10 gap-6 mt-10 max-lg:grid-cols-2">
        <AdsCard
          v-for="item in data?.ads"
          :key="item.id"
          :title="item.title"
          :currency="item.currency"
          :date="item.date"
          :id="item.id"
          :image-url="item.imageUrl"
          :location="item.location"
          :phone-number="item.phoneNumber"
          :price="item.price"
        />
      </div>
      <Button
        class="rounded-full h-[44px] items-center shadow-none text-black-main border-2 border-[#D6D6D680] bg-[#EAEDF0] hover:bg-[#EAEDF0] text-lg font-semibold px-[26px]"
      >
        {{ $t("actions.load_more") }}
        <Icon name="tabler:chevrons-down" />
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useFetch("/api/ads");
</script>