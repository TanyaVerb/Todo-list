import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Validator } from "../core/validator.js";
import { Storage } from "../core/storage.js";
import { pageContent } from "../index.js";

export class SigUpComponent extends Component {
  constructor(formId, page) {
    super(formId);
    this.page = page;
  }

  init() {
    this.component.addEventListener("submit", onSubmitHandler.bind(this));
    this.form = new Form(this.component, {
      name: [Validator.required],
      email: [Validator.required, Validator.isEmailValid],
      password: [Validator.required, Validator.isPasswordValid],
    });
  }

  onHide() {
    this.form.clear();
  }
}

//this - это форма

//вызывается при изменении значений в форме

function onSubmitHandler(event) {
  event.preventDefault(); //Предотвращает стандартное поведение отправки формы

  //проверяем валидна ли форма
  if (this.form.isValid()) {
    //eсли форма валидна - создаем пользователя
    const formData = {
      id: new Date().getTime(),
      ...this.form.value(),
    };

    // {
    //   name:
    //   email:
    //   password
    // }

    console.log(formData);

    this.form.clear();
    const userId = Storage.createNewUser(formData);
    //очищаем форму после создания пользователя

    console.log(userId);

    if (!userId) return;
    localStorage.setItem("selectedUserId", userId);
    //скрываем страницу авторизации
    setTimeout(() => {
      this.page.classList.add("hide");
      //раскрыть страницу списка дел
      pageContent.show();
    }, 2500);
  }
}
