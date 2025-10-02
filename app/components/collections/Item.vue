<template>
  <div class="collection-item">
    <div class="collection-item__wrapper">
      <h2 class="collection-item__title">{{ title }}</h2>
      <img :src="img" alt="collection-item" class="collection-item__image" />
      <div class="newsPages__text" :v-html="description"></div>
      <!-- <NuxtLink :to="`/collections/${id}`" class="collection-item__link"
        >Перейти в каталог</NuxtLink
      > -->
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  img: string
  title: string
  description: string
  // id: string
}>()
</script>

<style></style>
