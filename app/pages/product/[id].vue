<template>
  <div>
    <section class="product">
      <div class="container">
        <Breadcrumb :home="home" :model="items">
          <template #item="{ item, props }">
            <NuxtLink
              v-if="item.url"
              v-slot="{ href, navigate }"
              :to="item.url"
              custom
            >
              <a :href="href" v-bind="props.action" @click="navigate">
                <span v-if="item.icon" :class="[item.icon, 'text-color']" />
                <span class="text-primary font-semibold">{{ item.label }}</span>
              </a>
            </NuxtLink>
            <span v-else v-bind="props.action">
              <span class="text-surface-700 dark:text-surface-0">{{
                item.label
              }}</span>
            </span>
          </template>
        </Breadcrumb>
        <h2 class="product__title">{{ getData.title }}</h2>
        <p class="product__description">{{ getData.description }}</p>
        <div class="product__img-wrapper">
          <img
            :src="getData.preview[0].url"
            alt="product-img"
            class="product__img"
          />
          <ul class="list-reset product__img-list">
            <li v-for="item in getData.img" :key="item.id">
              <img
                :src="item.url"
                alt="product-img"
                class="product__img-item"
              />
            </li>
          </ul>
        </div>
        <div class="product__content">
          <h3 class="product__title">{{ getData.title }}</h3>
          <div class="product__size-wrapper">
            <span class="product__size-title">Цвет:</span>
            <ul class="list-reset product__size-img">
              <li v-for="color in getData.color" :key="color.id">
                <img :src="color.url" class="product__size-img-item" />
              </li>
            </ul>
          </div>
          <div class="product__size-wrapper">
            <span class="product__size-title">Размер:</span>
            <span class="product__size">{{ getData.Size }}</span>
          </div>
          <span class="product__size-title">Индивидуальные мерки</span>
        </div>
        <span class="product__price">{{ getData.price }} ₽</span>
        <button @click="addToCart" class="btn-reset product__button">
          Добавить в корзину
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from 'primevue/breadcrumb'
import { useCartStore } from '../../stores/cart'

const route = useRoute()
const id = route.params.id as string
const cartStore = useCartStore()
const productData = await useLoadData<'', any>(`${apiProduct}/${id}`, {
  query: {
    populate: ['img', 'preview', 'color'],
    sort: 'createdAt:desc',
  },
})

const getData = computed(() => {
  return productData.value?.data
})

const home = {
  icon: 'pi pi-home',
  url: '/',
}

const items = ref([
  { label: 'Главная', url: '/' },
  { label: 'Коллекции', url: '/collections' },

  { label: `${getData.value?.title}`, url: `/product/${id}` },
])

const addToCart = () => {
  if (!getData.value) return
  const allColors =
    getData.value.color?.map((color: any) => ({
      name: color.name || 'Основной',
      image: color.url || '',
    })) || []

  const product = {
    id: getData.value.id.toString(),
    title: getData.value.title,
    price: getData.value.price,
    size: getData.value.Size || 'Один размер',
    colors: allColors,
    image: getData.value.preview?.[0]?.url || '',
    count: 1,
  }

  cartStore.updateCart(product, 1)
}
</script>

<style lang="scss" scoped>
.product {
  padding: 0 0 86px 0;
  background-color: #292929;
  &__title {
    margin-bottom: 20px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px; /* 97.222% */
    text-transform: uppercase;

    @media screen and (max-width: 1200px) {
      font-size: 24px;
      margin-bottom: 24px;
    }
    @media screen and (max-width: 813px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  &__description {
    max-width: 1000px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 25px;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 813px) {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  &__img {
    width: 100%;
    max-width: 762px;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 10px;
  }
  &__img-item {
    width: 100%;
    max-width: 170px;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid #fff;
    padding: 10px;
  }
  &__size-img-item {
    width: 25px;
    height: 25px;
    @media screen and (max-width: 620px) {
      width: 20px;
      height: 20px;
    }
  }
  &__size-img {
    display: flex;
    gap: 9px;
  }
  &__img-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    @media screen and (max-width: 1082px) {
      flex-direction: row;
      gap: 20px;
      justify-content: flex-start;
    }
    @media screen and (max-width: 620px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
    }
  }
  &__img-wrapper {
    display: flex;
    gap: 40px;
    margin-bottom: 45px;
    @media screen and (max-width: 1082px) {
      flex-direction: column;
      gap: 20px;
    }
  }
  &__size {
    display: inline-block;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    @media screen and (max-width: 813px) {
      font-size: 20px;
    }
  }
  &__price {
    display: block;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 55px;
    @media screen and (max-width: 813px) {
      font-size: 28px;
      margin-bottom: 40px;
    }
  }
  &__content {
    margin-bottom: 55px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width: 813px) {
      gap: 20px;
      margin-bottom: 40px;
    }
  }
  &__size-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__size-title {
    max-width: max-content;
    border-radius: 2px;
    border: 1px solid #fff;
    padding: 4px 10px;
    display: inline-block;
    color: #9a9999;
    font-family: 'Montserrat Alternates';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    @media screen and (max-width: 813px) {
      font-size: 16px;
    }
  }
  &__button {
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
}

:deep(.p-breadcrumb) {
  background: transparent !important;
  border: none !important;
  margin-bottom: 50px !important;
  padding: 0 !important;

  .p-breadcrumb-list {
    flex-wrap: wrap !important;
    gap: 7px !important;

    .p-breadcrumb-item {
      a {
        color: #fff !important;
        text-decoration: none !important;
        font-family: 'Montserrat Alternates' !important;
        font-size: 18px !important;
        font-weight: 400 !important;
        display: flex;
        align-items: center;
        gap: 5px;

        &:hover {
          color: #ccc !important;
        }

        .text-color {
          color: #fff !important;
        }

        .text-primary {
          color: #fff !important;
        }
      }

      span {
        color: #fff !important;
        font-family: 'Montserrat Alternates' !important;
        font-size: 18px !important;
        font-weight: 400 !important;

        .text-surface-700 {
          color: #fff !important;
        }
      }

      .p-breadcrumb-separator {
        color: #fff !important;
        margin: 0 8px !important;
      }
    }
  }
}
</style>
