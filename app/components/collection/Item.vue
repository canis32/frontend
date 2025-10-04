<template>
  <div class="collection">
    <div class="collection__wrapper">
      <img :src="img" alt="collection-item" class="collection__image" />
      <div class="collection__content">
        <h2 class="collection__title">{{ title }}</h2>
        <span class="collection__descontPrice">{{ discountPrice }} ₽</span>
        <span class="collection__price"
          >{{ price }} <span class="collection__price-rub">₽</span></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  img: string
  title: string
  discountPrice: string | number
  price: string | number
}>()
</script>

<style lang="scss" scoped>
.collection {
  &__title {
    margin-bottom: 10px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 16px; /* 84.211% */
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__image {
    padding: 10px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
    border: 1px solid #fff;
  }
  &__descontPrice {
    display: inline-block;
    color: #9a9999;
    font-family: 'Montserrat Alternates';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
    letter-spacing: 1.6px;
    text-transform: uppercase;
    text-decoration: line-through;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__price {
    display: inline-block;
    color: #fff;

    font-family: 'Montserrat Alternates';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    // line-height: 16px; /* 50% */
    // letter-spacing: 1.6px;
    text-transform: uppercase;
    @media screen and (max-width: 539px) {
      font-size: 24px;
    }
  }
  &__price-rub {
    font-size: 18px;
    color: #14ea66;
  }
}
</style>
