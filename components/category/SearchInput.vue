<template>
  <div
    :class="[
      'relative top-[-85px] left-1/2 -translate-x-1/2 max-w-[580px] max-sm:max-w-[335px]',
    ]"
  >
    <div
      class="w-full h-[60px] flex items-center border border-[#EAEDF0] bg-white p-2 rounded-lg gap-x-2"
    >
      <Input
        class="border-0 m-0 outline-none focus-visible:ring-0"
        @focus="open = true"
        @blur="open = false"
        placeholder="Что вы ищите?"
      />
      <Button>{{ $t("actions.search") }}</Button>
    </div>
    <div v-if="open" class="bg-white mt-2 border rounded-md">Content</div>
  </div>
</template>

<script setup lang="ts">
const open = ref<boolean>(false);

watch(open, (val: boolean) => {
  if (val) {
    document.body.style.background = "black";
  }
});
</script>

<style scoped>
</style>