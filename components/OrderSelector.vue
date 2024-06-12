<template>
  <div class="flex items-center gap-10 sm:flex-col sm:gap-2">
    <h3>{{ name }}</h3>
    <div>
      <ul
        class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-evenly"
      >
        <li v-for="sortOption in sortOptions" class="border-2 p-2 rounded-xl">
          <label :for="sortOption.sortLabel" class="flex text-center">{{
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
