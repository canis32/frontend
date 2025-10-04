<template>
  <div class="order-summary">
    <div class="order-summary__header">
      <h3>ВАШ ЗАКАЗ</h3>
    </div>

    <div class="order-summary__content">
      <div class="order-summary__row">
        <span>Товары</span>
        <span>{{ formatPrice(cartStore.getTotalPrice) }} ₽</span>
      </div>

      <div class="coupon-section">
        <div class="coupon-input">
          <input
            v-model="couponCode"
            type="text"
            placeholder="Введите купон"
            class="coupon-field"
          />
          <button @click="applyCoupon" class="coupon-btn">Применить</button>
        </div>
      </div>

      <div class="order-summary__row">
        <span>Скидка</span>
        <span>{{ formatPrice(discount) }} ₽</span>
      </div>

      <div class="order-summary__row">
        <span>Доставка</span>
        <span>{{ formatPrice(deliveryCost) }} ₽</span>
      </div>

      <div class="order-summary__row order-summary__total">
        <span>Итого к оплате</span>
        <span>{{ formatPrice(finalTotal) }} ₽</span>
      </div>
    </div>

    <div class="order-summary__actions">
      <button
        @click="showOrderForm = !showOrderForm"
        class="place-order-btn"
        :disabled="cartStore.cartList.length === 0"
      >
        ОФОРМИТЬ
      </button>
    </div>

    <!-- Форма заказа -->
    <div v-if="showOrderForm" class="order-form">
      <h4>Оформление заказа</h4>

      <div class="form-group">
        <label>Имя *</label>
        <input v-model="name" type="text" required class="form-input" />
      </div>

      <div class="form-group">
        <label>Телефон *</label>
        <input v-model="phone" type="tel" required class="form-input" />
      </div>

      <div class="form-group">
        <label>Комментарий к заказу</label>
        <textarea v-model="comment" class="form-textarea" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label>Telegram (необязательно)</label>
        <input
          v-model="telegram"
          type="text"
          class="form-input"
          placeholder="@username"
        />
      </div>

      <div class="form-group">
        <label class="checkbox-label">
          <input v-model="agreement" type="checkbox" required />
          <span>Согласен на обработку персональных данных *</span>
        </label>
      </div>

      <div class="form-actions">
        <button
          @click="submitOrder"
          class="submit-btn"
          :disabled="!name || !phone || !agreement"
        >
          {{ isOrderSuccess ? 'ЗАКАЗ ОТПРАВЛЕН!' : 'ОТПРАВИТЬ ЗАКАЗ' }}
        </button>
        <button @click="showOrderForm = false" class="cancel-btn">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '../../stores/cart'

const cartStore = useCartStore()

const couponCode = ref('')
const discount = ref(0)
const deliveryCost = ref(0)

const finalTotal = computed(() => {
  return cartStore.getTotalPrice - discount.value + deliveryCost.value
})

const applyCoupon = () => {
  if (couponCode.value.toLowerCase() === 'first1000') {
    discount.value = 1000
  } else {
    discount.value = 0
  }
}

import { sendMail } from '@/composables/use-mail'
const {
  handleOrderSubmit,
  name,
  phone,
  comment,
  isOrderSuccess,
  resetForm,
  telegram,
  agreement,
} = sendMail()

const showOrderForm = ref(false)

const submitOrder = async () => {
  const orderData = {
    name: name.value,
    phone: phone.value,
    comment: comment.value,
    telegram: telegram.value,
    agreement: agreement.value,
    items: cartStore.cartList,
    total: finalTotal.value,
    discount: discount.value,
  }

  await handleOrderSubmit(orderData)

  if (isOrderSuccess.value) {
    // Очищаем корзину после успешной отправки
    cartStore.removeAll()
    showOrderForm.value = false
    resetForm()
  }
}
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}
</script>

<style lang="scss" scoped>
.order-summary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

  &__header {
    margin-bottom: 20px;

    h3 {
      font-family: 'Montserrat Alternates';
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin: 0;
      text-transform: uppercase;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat Alternates';
    font-size: 16px;
    color: #fff;

    &.order-summary__total {
      font-size: 18px;
      font-weight: 700;
      padding-top: 15px;
      border-top: 1px solid #fff;
    }
  }
}

.coupon-section {
  .coupon-input {
    display: flex;
    gap: 10px;

    .coupon-field {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
      border-radius: 4px;
      font-family: 'Montserrat Alternates';
      font-size: 14px;

      &::placeholder {
        color: #ccc;
      }

      &:focus {
        outline: none;
        border-color: #ccc;
      }
    }

    .coupon-btn {
      padding: 8px 16px;
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
      border-radius: 4px;
      font-family: 'Montserrat Alternates';
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
}

.order-summary__actions {
  .place-order-btn {
    width: 100%;
    padding: 15px 20px;
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
    border-radius: 8px;
    font-family: 'Montserrat Alternates';
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background: #fff;
      color: #000;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

.order-form {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);

  h4 {
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
}

.form-group {
  margin-bottom: 15px;

  label {
    display: block;
    color: #fff;
    font-family: 'Montserrat Alternates';
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    input[type='checkbox'] {
      width: 16px;
      height: 16px;
    }
  }
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 4px;
  font-family: 'Montserrat Alternates';
  font-size: 14px;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
    border-color: #ccc;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.submit-btn,
.cancel-btn {
  flex: 1;
  padding: 12px 20px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 8px;
  font-family: 'Montserrat Alternates';
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #fff;
    color: #000;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.cancel-btn {
  background: rgba(255, 0, 0, 0.1);
  border-color: #ff4444;

  &:hover {
    background: #ff4444;
    color: #fff;
  }
}

@media screen and (max-width: 768px) {
  .order-summary {
    padding: 15px;
  }

  .coupon-input {
    flex-direction: column;

    .coupon-btn {
      width: 100%;
    }
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
