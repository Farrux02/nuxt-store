<template>
  <div>
    <Dialog>
      <DialogTrigger>
        <Button
          class="rounded-lg bg-[#EAEDF0] text-black-main hover:bg-[#EAEDF0] text-sm font-medium items-center"
        >
          <p class="max-sm:hidden">{{ $t("actions.login") }}</p>
          <Icon name="tabler:login" class="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent class="max-w-[380px] w-full">
        <h2 class="font-bold text-black-main text-2xl">
          {{ $t("labels.welcome") }}
        </h2>
        <p class="text-sm font-medium text-[#8E9297]">
          {{ $t("labels.login_info") }}
        </p>
        <form class="w-full" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="login">
            <FormItem v-auto-animate>
              <FormLabel class="text-[#63676C] font-medium text-sm">{{
                $t("labels.login")
              }}</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  :placeholder="$t('actions.type_login')"
                  v-bind="componentField"
                  class="rounded-lg bg-[#F0F3F7] text-sm font-normal text-[#B8BBBD] border-0 !mt-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem v-auto-animate class="space-y-0 mt-4">
              <FormLabel class="text-[#63676C] font-medium text-sm">{{
                $t("labels.password")
              }}</FormLabel>
              <FormControl>
                <div class="relative">
                  <Input
                    :type="showPass ? 'text' : 'password'"
                    :placeholder="$t('actions.type_pass')"
                    v-bind="componentField"
                    class="rounded-lg bg-[#F0F3F7] text-sm font-normal text-[#B8BBBD] border-0 !mt-2"
                  />
                  <Button
                    @click="showPass = !showPass"
                    type="button"
                    class="bg-transparent hover:bg-transparent h-auto p-0 shadow-none absolute top-2 right-2"
                  >
                    <EyeIcon v-if="!showPass" class="text-[#8E9297] icon" />
                    <EyeOffIcon v-else class="text-[#8E9297] icon" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button
            type="submit"
            class="mt-20 bg-blue-main w-full rounded-lg text-white text-base font-semibold h-[44px] shadow-none hover:bg-blue-main"
          >
            {{ $t("actions.login") }}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { z } from "zod";
import { useForm } from "vee-validate";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { EyeIcon, EyeOffIcon } from "lucide-vue-next";

const formSchema = toTypedSchema(
  z.object({
    login: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const showPass = ref<boolean>(false);

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>