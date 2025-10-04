<template>
  <div>
    <Header :bgColor="'#292929'" class="header" />
    <HeaderMobile :bgColor="'#292929'" class="header__mobile" />

    <section class="cart">
      <div class="container">
        <div class="cart__content">
          <div class="cart__left">
            <CartList />
          </div>

          <div class="cart__right">
            <CartOrderSummary />
            <CartPromoBlocks />
          </div>
        </div>
      </div>
    </section>

    <Footer :color="'#1F1515'" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'home',
})
</script>

<style lang="scss" scoped>
.cart {
  padding: 35px 0 86px 0;
  background: #292929;
  min-height: 100vh;

  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    margin-top: 30px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  margin-bottom: 30px !important;
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
