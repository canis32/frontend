<template>
  <section class="whyus">
    <div class="container">
      <div class="whyus__wrapper">
        <NuxtLink to="/collections" class="whyus__link-2"
          >Перейти в каталог</NuxtLink
        >
        <img src="/svg/whyus.svg" alt="whyus" class="whyus__image" />

        <div class="whyus__content">
          <h2 class="whyus__title">Почему мы?</h2>
          <p class="whyus__description">
            Качество и комфорт – Мы используем только гипоаллергенные и
            премиальные материалы, обеспечивая удобство и защиту вашему питомцу.
          </p>
          <p class="whyus__description">
            Уникальный дизайн – Одежда, в которой ваш хвостик будет выглядеть
            модно и привлекательно, собирая взгляды прохожих.
          </p>
          <p class="whyus__description">
            Индивидуальный подход – Шьем одежду по размерам вашего питомца,
            чтобы она сидела идеально. Защита в любую погоду – Дождевики, теплые
            комбинезоны и легкие футболки — у нас есть одежда на все сезоны.
          </p>
          <NuxtLink to="/collections" class="whyus__link"
            >Перейти в каталог</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.whyus {
  background: #292929;
  padding: 86px 0;
  @media screen and (max-width: 1200px) {
    padding: 0 0 86px 0;
  }
  @media screen and (max-width: 813px) {
    padding: 0 0 60px 0;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 84px;
    @media screen and (max-width: 1200px) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
  }
  &__content {
    width: 50%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 50px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 54px;
    font-style: normal;
    font-weight: 700;

    letter-spacing: 1.6px;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
      font-size: 32px;
      margin-bottom: 14px;
    }
    @media screen and (max-width: 813px) {
      font-size: 24px;
    }
  }
  &__description {
    margin-bottom: 34px;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;

    &:last-child {
      margin-bottom: 80px;
    }
    @media screen and (max-width: 1200px) {
      font-size: 18px;
      margin-bottom: 14px;
    }
    @media screen and (max-width: 813px) {
      font-size: 16px;
    }
  }
  &__link {
    display: inline-block;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    padding: 10px 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    text-decoration: none;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  &__link-2 {
    display: none;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    padding: 10px 30px;
    border-radius: 10px;
    border: 1px solid #fff;
    text-decoration: none;
    @media screen and (max-width: 1200px) {
      display: inline-block;
      padding: 10px 40px;
      font-size: 18px;
    }
    @media screen and (max-width: 813px) {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
  &__image {
    width: 100%;
    max-width: 515px;
    height: auto;
  }
}
</style>
