<template>
  <div class="form-wrapper">
    <form class="form vacancy-form">
      <div class="form__row">
        <div class="form__cell">
          <input
            class="input__field form__input"
            type="text"
            name="lastname"
            value
            placeholder="Фамилия*"
          />
        </div>
        <div class="form__cell">
          <input class="input__field form__input" type="text" name="name" value placeholder="Имя*" />
        </div>
      </div>
      <div class="form__row">
        <div class="form__cell">
          <input
            class="input__field form__input"
            type="text"
            name="phone"
            value
            placeholder="Номер телефона для связи*"
          />
        </div>
        <div class="form__cell">
          <input
            class="input__field form__input"
            type="text"
            name="email"
            value
            placeholder="Email*"
          />
        </div>
      </div>
      <div class="form__row">
        <textarea
          placeholder="Расскажите о себе"
          class="textArea__shadow input__field input__field_multiline"
          tabindex="-1"
          rows="1"
          readonly
        ></textarea>
      </div>
      <div class="form__row">
        <div class="form__cell">
          <input
            class="input__field form__input"
            type="text"
            name="cv-link"
            value
            placeholder="Ссфлка на резюме*"
          />
        </div>
        <div class="form__cell">
          <input
            class="input__field form__input"
            type="file"
            name="file"
            value
            placeholder="Прикрепите файл*"
          />
        </div>
      </div>
      <div class="fofm__actions">
        <button class="btn btn-1" @click="closePopup">Отправить</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    name: 'vacancy-form',
}
</script>
<style lang="scss">
    .form {
  &__row {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 0 2rem;
  }
  &__cell {
    width: 50%;
    
  }
  &__input {
    font-size: 1.2rem;
    line-height: 1;
    padding: 12px 16px;
    background: #ECECEC;
    border: none;
    color: #0E2783;
    box-sizing: border-box;
    
    &::placeholder {
      color: #0E2783cf;
      font-size: 1.2rem;
      font-weight: 300;
    }
    &:focus{
      outline: 1px solid  #0E2783cf;
    }
  }
}
</style>