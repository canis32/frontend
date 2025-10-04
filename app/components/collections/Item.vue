<template>
  <div class="collection">
    <div class="collection__wrapper">
      <img :src="img" alt="collection-item" class="collection__image" />
      <div class="collection__content">
        <h2 class="collection__title">{{ title }}</h2>
        <div class="collection__description" v-html="parsedDescription"></div>
        <NuxtLink :to="`/collections/${link}`" class="collection__link">
          Перейти в каталог
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  img: string
  title: string
  description: string
  link: string
}>()

import { marked } from 'marked'

const parsedDescription = computed(() => marked(props.description))
</script>

<style lang="scss" scoped>
.collection {
  &__wrapper {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 34px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1358px) {
      grid-template-columns: 1fr;
    }
    @media screen and (max-width: 1200px) {
      gap: 24px;
    }
  }
  &__image {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    max-width: 815px;
    object-fit: cover;
  }
  &__title {
    margin-bottom: 30px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 97.222% */
    @media screen and (max-width: 1200px) {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
  &__link {
    display: inline-block;
    padding: 10px 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    @media screen and (max-width: 813px) {
      font-size: 16px;
      padding: 10px 20px;
    }
  }

  &__description {
    margin-bottom: 30px;
    color: #9a9999;
    font-family: 'Montserrat Alternates';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 813px) {
      font-size: 16px;
    }
    :deep(ul) {
      list-style: none;
      padding: 0;
      margin: 0 0 20px 0;
    }

    :deep(li) {
      position: relative;
      margin-bottom: 8px;
      color: #9a9999;
      font-family: 'Montserrat Alternates';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }
      @media screen and (max-width: 813px) {
        font-size: 16px;
      }
    }

    :deep(p) {
      margin: 0 0 15px 0;
      position: relative;
      margin-bottom: 8px;
      color: #9a9999;
      font-family: 'Montserrat Alternates';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }
      @media screen and (max-width: 813px) {
        font-size: 16px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
