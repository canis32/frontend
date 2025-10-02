<template>
  <div>
    <ul class="list-reset items-list">
      <li v-for="item in collectionsList" :key="item.documentId">
        <CollectionsItem
          :img="item.img.url"
          :title="item.title"
          :description="item.description"
          :id="item.id"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Collection } from '../../types/app'

defineProps<{
  collectionsList: Collection[]
}>()
</script>

<style></style>
