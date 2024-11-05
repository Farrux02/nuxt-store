<template>
  <header
    class="border-b border-b-[#EAEDF0] py-5 max-sm:py-3 relative bg-white"
  >
    <div
      class="max-w-[1184px] max-sm:px-4 mx-auto flex justify-between items-center"
    >
      <div class="flex items-center gap-x-6">
        <Select
          @update:model-value="changeLang($event)"
          :default-value="locale"
        >
          <SelectTrigger
            class="w-auto border-none text-black-main font-medium text-sm"
          >
            <SelectValue placeholder="Select lang" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="lang in availableLangs"
                :key="lang.code"
                :value="lang.code"
              >
                <div class="flex items-center gap-x-1">
                  <img :src="lang.icon" alt="" class="w-6 h-6" />
                  <p class="">{{ lang.name }}</p>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <a
          href="tel:+998885005000"
          class="text-black-main font-medium text-sm inline-flex items-center gap-x-1 max-sm:hidden"
          ><Icon name="tabler:phone" class="w-5 h-5 text-[#B8BBBD]" /> +998 88
          500 50 00</a
        >
      </div>
      <div class="flex items-center">
        <NuxtLink
          to="#"
          class="inline-flex items-center gap-x-2 hover:text-blue-main"
        >
          <Icon name="tabler:heart" class="w-6 h-6 text-blue-main" />
          <p class="max-sm:hidden">{{ $t("labels.fav") }}</p></NuxtLink
        >
        <div class="w-[1px] h-8 bg-[#F0F3F7] mx-4"></div>
        <!-- <Button
          class="rounded-lg bg-[#EAEDF0] text-black-main hover:bg-[#EAEDF0] text-sm font-medium items-center"
        >
          <p class="max-sm:hidden">{{ $t("actions.login") }}</p>
          <Icon name="tabler:login" class="w-5 h-5" />
        </Button> -->
        <LoginModal />
      </div>
      <div
        class="absolute border border-[#EAEDF0] max-sm:w-[116px] px-4 py-[14px] bg-white rounded-b-[20px] top-0 left-[50%] -translate-x-1/2 shadow-lg"
      >
        <NuxtLink to="/"><img :src="logo" alt="" /></NuxtLink>
      </div>
      <!-- {{ $t("hello") }} -->
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from "~/assets/images/77uz_logo.svg";
// import {} from "luc"

const { changeLang, locale, availableLangs } = useTranslation();
</script>