<template>
  <div class="collections-items">
    <ul class="list-reset collections-items__list">
      <li v-for="item in collectionsList" :key="item.documentId || ''">
        <CollectionsItem
          :img="item.img.url || ''"
          :title="item.title || ''"
          :description="item.description || ''"
          :link="item.documentId || ''"
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

<style lang="scss" scoped>
.collections-items {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 74px;
  }
}
</style>
