<template>
  <div class="collections-items">
    <ul class="list-reset collections-items__list">
      <li
        v-for="item in collectionList"
        :key="item.documentId || ''"
        class="collections-items__item"
      >
        <CollectionItem
          :img="item.preview[0].url ? item.preview[0].url : '/img/no-image.png'"
          :title="item.title || ''"
          :discountPrice="item.discountPrice || 0"
          :price="item.price || 0"
        />
        <NuxtLink
          :to="`/product/${item.documentId}`"
          class="collections-items__link"
        >
          Выбрать
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  collectionList: any[]
}>()
</script>

<style lang="scss" scoped>
.collections-items {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 70px 60px;
    justify-content: center;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: calc(25% - 45px); // 4 карточки в ряду с учетом gap
    min-width: 200px;

    @media screen and (max-width: 1200px) {
      width: calc(33.333% - 40px); // 3 карточки в ряду
    }

    @media screen and (max-width: 813px) {
      width: calc(50% - 30px); // 2 карточки в ряду
    }
    @media screen and (max-width: 539px) {
      width: 100%; // 2 карточки в ряду
    }
  }
  &__link {
    max-width: max-content;
    margin-top: auto;
    display: inline-block;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    padding: 10px 50px;
    border-radius: 10px;
    border: 1px solid #fff;
    @media screen and (max-width: 1200px) {
      padding: 10px 40px;
    }
    @media screen and (max-width: 813px) {
      padding: 10px 20px;
    }
  }
}
</style>
