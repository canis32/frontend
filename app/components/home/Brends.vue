<template>
  <section class="brends">
    <div class="container">
      <div class="brends__wrapper">
        <div class="brends__content">
          <h2 class="brends__title">О бренде</h2>
          <p class="brends__description">
            Главные ценности бренда — качество, стиль и забота о комфорте
            каждого питомца.
          </p>
          <p class="brends__description">
            Наш бренд - специализируется на создании стильной и функциональной
            одежды для собак, объединяя моду, комфорт и высокое качество. Мы
            разрабатываем уникальные коллекции, учитывая анатомические
            особенности питомцев, потребности в защите от погодных условий и
            современные тренды.
          </p>
          <NuxtLink to="/" class="brends__link">Перейти в каталог</NuxtLink>
        </div>
        <img src="/svg/brands.svg" alt="brends" class="brends__image" />
        <NuxtLink to="/" class="brends__link-2">Перейти в каталог</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.brends {
  background: #292929;
  padding: 86px 0;
  @media screen and (max-width: 813px) {
    padding: 40px 0 60px 0;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 84px;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
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
