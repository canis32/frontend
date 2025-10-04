export function sendMail() {
  const comment = ref('')
  const phone = ref('')
  const name = ref('')
  const telegram = ref('')
  const agreement = ref(false)
  const isSuccess = ref(false)
  const isOrderSuccess = ref(false)

const resetForm = () => {
  comment.value = ''
  phone.value = ''
  name.value = ''
  telegram.value = ''
  agreement.value = false
}

  const handleSubmit = async (_comment: string, _phone: string, _name: string, _telegram: string, _agreement: boolean) => {
    // try {
    //   resetForm()
    //   const mail = useMail()
    //   await mail.send({
    //     from: 'd.kireenkov32rus@yandex.ru',
    //     to: 'd.kireenkov32rus@yandex.ru',
    //     subject: 'Новая заявка с сайта "bilingstudio.ru"',
    //     html: `
    //       <p><strong>Имя:</strong> ${name}</p>
    //       <p><strong>Телефон:</strong> ${phone}</p>
    //       <p><strong>Комментарий:</strong> ${comment}</p>
    //       <p><strong>Ник в Telegram:</strong> ${telegram}</p>
    //       <p><strong>Согласие на обработку персональных данных:</strong> ${agreement} ${agreement ? '✅' : '❌'}</p>
    //     `,
    //   })
    //   isSuccess.value = true

    //   setTimeout(() => {
    //     isSuccess.value = false
    //   }, 3000)
    // } catch (error) {
    //   console.error(error)
    // }
  }

  const handleOrderSubmit = async (orderData: any) => {
    try {
      const mail = useMail()
      await mail.send({
        from: 'd.kireenkov32rus@yandex.ru',
        to: 'd.kireenkov32rus@yandex.ru',
        subject: 'Новый заказ с сайта',
        html: `
          <h2>Новый заказ</h2>
          <p><strong>Имя:</strong> ${orderData.name}</p>
          <p><strong>Телефон:</strong> ${orderData.phone}</p>
          <p><strong>Комментарий:</strong> ${orderData.comment || 'Не указан'}</p>
          <p><strong>Ник в Telegram:</strong> ${orderData.telegram || 'Не указан'}</p>
          <p><strong>Согласие на обработку персональных данных:</strong> ${orderData.agreement ? '✅' : '❌'}</p>
          
          <h3>Товары в заказе:</h3>
          ${orderData.items.map((item: any) => `
            <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
              <p><strong>Название:</strong> ${item.title}</p>
              <p><strong>Цена:</strong> ${item.price} ₽</p>
              <p><strong>Количество:</strong> ${item.count}</p>
              <p><strong>Размер:</strong> ${item.size}</p>
              <p><strong>Цвета:</strong> ${item.colors.map((color: any) => color.name).join(', ')}</p>
            </div>
          `).join('')}
          
          <h3>Итого:</h3>
          <p><strong>Общая сумма:</strong> ${orderData.total} ₽</p>
          <p><strong>Скидка:</strong> ${orderData.discount} ₽</p>
        `,
      })
      isOrderSuccess.value = true

      setTimeout(() => {
        isOrderSuccess.value = false
      }, 5000)
    } catch (error) {
      console.error('Ошибка отправки заказа:', error)
    }
  }

 

  return {
    comment,
    phone,
    name,
    isSuccess,
    isOrderSuccess,
    handleSubmit,
    handleOrderSubmit,
    resetForm,
    telegram,
    agreement
  }
}
