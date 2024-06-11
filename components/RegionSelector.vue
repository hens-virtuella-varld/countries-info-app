<template>
  <div class="flex flex-row gap-4">
    <div>Choose regions:</div>
    <div>
      <ul class="flex flex-row gap-4">
        <li v-for="region in allRegions" :for="region">
          <div>
            <input
              type="checkbox"
              :id="region"
              :name="region"
              :value="region"
              :checked="selectedRegions.has(region)"
              @change="onChange"
            />
            <label>{{ region }}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { selectedRegions } = defineProps(['selectedRegions']);

const emit = defineEmits(['select']);

const allRegions = [
  'Americas',
  'Europe',
  'Asia',
  'Oceania',
  'Africa',
  'Antarctic',
];

const onChange = (event) => {
  const region = event.target.value;
  const isChecked = event.target.checked;

  emit('select', { region, isChecked });
};
</script>

<style scoped></style>
