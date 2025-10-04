<template>
  <div>
    <Header :bgColor="'#1F1515'" class="header" />
    <HeaderMobile :bgColor="'#1F1515'" class="header__mobile" />
    <section class="collections">
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
                <span class="text-primary">{{ item.label }}</span>
              </a>
            </NuxtLink>
            <span v-else v-bind="props.action">
              <span class="text-surface-700">{{ item.label }}</span>
            </span>
          </template>
        </Breadcrumb>
        <p class="collections__description">
          Широкий ассортимент стильной и функциональной одежды для собак,
          разработанной с учетом комфорта и анатомических особенностей питомцев.
        </p>
        <CollectionsItems :collectionsList="getData || []" />
      </div>
    </section>
    <Footer :color="'#1F1515'" />
  </div>
</template>

<script lang="ts" setup>
import type { Collection } from '../../types/app'
import Breadcrumb from 'primevue/breadcrumb'

definePageMeta({
  layout: 'home',
})

const collectionsData = await useLoadData<'', Collection[]>(apiCatalog, {
  query: {
    populate: ['img'],
    sort: 'createdAt:desc',
  },
})

const getData = computed(() => {
  return collectionsData.value?.data
})

const home = {
  icon: 'pi pi-home',
  url: '/',
}

const items = ref([
  {
    label: 'Главная',
    url: '/',
  },
  {
    label: 'Коллекции',
    url: '/collections',
  },
])
</script>

<style lang="scss" scoped>
.collections {
  padding: 0 0 86px 0;
  background: #1f1515;
  &__description {
    margin-bottom: 67px;
    max-width: 1000px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1200px) {
      margin-bottom: 24px;
      font-size: 16px;
    }
    @media screen and (max-width: 813px) {
      font-size: 14px;
    }
  }
}
.header {
  @media screen and (max-width: 1200px) {
    display: none;
  }
  &__mobile {
    display: none;
    @media screen and (max-width: 1200px) {
      display: block;
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
