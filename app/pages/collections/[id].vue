<template>
  <div>
    <Header :bgColor="'#292929'" class="header" />
    <HeaderMobile :bgColor="'#292929'" class="header__mobile" />
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
        <!-- <p class="collections__description">
          Широкий ассортимент стильной и функциональной одежды для собак,
          разработанной с учетом комфорта и анатомических особенностей питомцев.
        </p> -->
        <CollectionItems :collectionList="getData || []" />
      </div>
    </section>
    <Footer :color="'#1F1515'" />
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from 'primevue/breadcrumb'
definePageMeta({
  layout: 'home',
})
const route = useRoute()
const id = route.params.id as string
const collectionsData = await useLoadData<'', any>(`${apiCatalog}/${id}`, {
  query: {
    populate: ['produkties.preview'],
    sort: 'createdAt:desc',
  },
})

const getData = computed(() => {
  return collectionsData.value?.data.produkties
})
const home = {
  icon: 'pi pi-home',
  url: '/',
}
const items = ref([
  { label: 'Главная', url: '/' },
  { label: 'Коллекции', url: '/collections' },
  { label: `${collectionsData.value?.data.title}`, url: `/collections/${id}` },
])
</script>

<style lang="scss" scoped>
.collections {
  padding: 35px 0 86px 0;
  background: #292929;
}
.header {
  @media screen and (max-width: 1200px) {
    display: none;
  }
}
.header__mobile {
  display: none;
  @media screen and (max-width: 1200px) {
    display: block;
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
