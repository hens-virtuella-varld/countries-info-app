<template>
  <div class="bg-white flex flex-col gap-2 px-4 py-2">
    <h3 class="flex justify-center text-base font-bold uppercase">
      {{ name }}
    </h3>
    <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-evenly">
      <div v-for="sortOption in sortOptions" :key="sortOption">
        <input
          class="sr-only peer"
          type="radio"
          :id="sortOption.sortOrder"
          :name="sortOption.sortOrder"
          :value="sortOption.sortOrder"
          :checked="sortOrder === sortOption.sortOrder"
          :disabled="disabled"
          @change="onChange"
        />
        <label
          :for="sortOption.sortOrder"
          class="flex flex-col text-center text-base font-medium border-2 px-2 py-1 rounded-xl peer-checked:bg-red-200 [@media(pointer:fine){&:hover}]:bg-red-300 active:!bg-red-400  peer-disabled:!bg-slate-50  peer-disabled:border-slate-200"
          >{{ sortOption.sortLabel }}</label
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const { sortOrder, name, disabled } = defineProps([
  'sortOrder',
  'name',
  'disabled',
]);

const emit = defineEmits(['select']);

const onChange = (event) => {
  const sortOrder = event.target.value;

  emit('select', sortOrder);
};

const sortOptions = [
  {
    sortOrder: 'descendingPopulation',
    sortLabel: 'Population, higest first',
  },
  {
    sortOrder: 'ascendingPopulation',
    sortLabel: 'Population, lowest first',
  },
  {
    sortOrder: 'descendingArea',
    sortLabel: 'Area, higest first',
  },
  {
    sortOrder: 'ascendingArea',
    sortLabel: 'Area, lowest first',
  },
];
</script>

<style scoped></style>
