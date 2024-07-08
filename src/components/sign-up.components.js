import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Validator } from "../core/validator.js";
import { Storage } from "../core/storage.js";

export class SigUpComponent extends Component {
  constructor(formId) {
    super(formId);
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
    //усли форма валидна - создаем пользователя
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
    Storage.createNewUser(formData);
    //очищаем форму после создания пользователя
    // this.form.clear();
  }
}
