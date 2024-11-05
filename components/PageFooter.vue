<template>
  <footer class="bg-white">
    <div class="footer-bg">
      <div class="max-w-[1184px] mx-auto pt-[63px] max-lg:px-3 relative">
        <div class="absolute -top-[32px] left-1/2 -translate-x-1/2 ">
          <img :src="Logo77" alt="" class="w-[122px] h-[64px] shadow-lg shadow-blue-main rounded-lg" />
        </div>
        <p class="max-w-[669px] text-center mx-auto font-normal text-base">
          77.uz marketplace - это виртуальная платформа в Узбекистане, которая
          облегчает покупки и продажи, связывая продавцов с потенциальными
          клиентами.
        </p>
        <ul
          class="mt-6 flex items-center gap-x-[72px] justify-center flex-wrap gap-y-4"
        >
          <li class="font-semibold text-black-main text-xl">
            {{ $t("labels.ads_board") }}
          </li>
          <li class="font-semibold text-black-main text-xl">
            {{ $t("labels.use_terms") }}
          </li>
          <li class="font-semibold text-black-main text-xl">
            <a href="tel:+998885005000">+998 88 500 50 00</a>
          </li>
        </ul>
        <div class="flex justify-center items-center gap-x-6 mt-6">
          <a href="#">
            <img
              :src="AppStoreImg"
              class="w-[150px] h-[50px]"
              alt="App Store"
            />
          </a>
          <a href="#">
            <img
              :src="GPlayImg"
              class="w-[169px] h-[50px]"
              alt="Google Play Market"
            />
          </a>
        </div>
        <p
          class="font-normal text-base text-black-main text-center max-w-[470px] mx-auto mt-2"
        >
          Загрузите наше
          <a href="#" class="font-bold text-blue-main">приложение</a> и
          пользуйтесь с платформой
          <span class="font-bold text-blue-main">ещё удобнее</span>
        </p>
      </div>
    </div>
    <div class="border-t border-[#EAEDF0]">
      <div
        class="max-w-[1184px] mx-auto py-4 flex items-center justify-between max-lg:px-4"
      >
        <p class="text-black-main font-normal text-sm">
          <span class="font-medium">© 77.uz</span>
          2023. Все права защищены
        </p>
        <a href="https://uic.group"><img :src="UICLogo" alt="Uic Logo" /></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppStoreImg from "~/assets/images/appstore_img.png";
import GPlayImg from "~/assets/images/gplay_img.png";
import Logo77 from "~/assets/images/77uz_logo.svg";
import UICLogo from "~/assets/images/uic_logo.svg";
</script>

<style scoped>
.footer-bg {
  background-image: url("../assets/images/footer_bg.png");
  background-repeat: no-repeat;
  background-position-x: center;
}
</style>