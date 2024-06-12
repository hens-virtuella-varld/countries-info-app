<template>
  <div class=" bg-white gap-2 px-8 py-4"
  >
    <h3 class="flex justify-center">{{ name }}</h3>
    <div>
      <ul
        class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-start md:justify-evenly"
      >
        <li
          v-for="sortOption in sortOptions"
          class="border-2 p-2 rounded-xl has-[:checked]:bg-red-200 has-[:hover]:!bg-red-300 has-[:active]:!bg-red-400"
        >
          <label :for="sortOption.sortOrder" class="flex flex-col text-center">{{
            sortOption.sortLabel
          }}</label>
          <input
            class="sr-only"
            type="radio"
            :id="sortOption.sortOrder"
            :name="sortOption.sortOrder"
            :value="sortOption.sortOrder"
            :checked="sortOrder === sortOption.sortOrder"
            @change="onChange"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { sortOrder, name } = defineProps(['sortOrder', 'name']);

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
