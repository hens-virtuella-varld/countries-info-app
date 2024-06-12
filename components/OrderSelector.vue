<template>
  <div class="grid grid-cols-8">
    <div class="grid col-span-2">Choose {{ name }} :</div>
    <div class="grid col-span-6">
      <ul class="flex flex-row gap-4">
        <div v-for="sortOption in sortOptions">
          <li :for="sortOption.sortOrder">
            <input
              type="radio"
              :id="sortOption.sortOrder"
              :name="sortOption.sortOrder"
              :value="sortOption.sortOrder"
              :checked="sortOrder === sortOption.sortOrder"
              @change="onChange"
            />
            <label :for="sortOption.sortLabel">{{
              sortOption.sortLabel
            }}</label>
          </li>
        </div>
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
    sortLabel: 'population, higest first',
  },
  {
    sortOrder: 'ascendingPopulation',
    sortLabel: 'population, lowest first',
  },
  {
    sortOrder: 'descendingArea',
    sortLabel: 'area, higest first',
  },
  {
    sortOrder: 'ascendingArea',
    sortLabel: 'area, lowest first',
  },
];
</script>

<style scoped></style>
