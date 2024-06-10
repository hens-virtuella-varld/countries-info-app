<template>
  <div class="flex justify-center">
    <div class="flex flex-row gap-2">
      <div>Search Mode</div>
      <label class="relative inline-flex cursor-pointer items-center">
        <input
          id="toggler"
          type="checkbox"
          class="peer sr-only"
          checked
          @change="onChange"
        />
        <label for="toggler" class="hidden"></label>
        <div
          class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
        ></div>
      </label>
      <div>Select Mode</div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle']);

const onChange = (event) => {
  emit('toggle', event.target.checked);
};
</script>

<style scoped></style>
