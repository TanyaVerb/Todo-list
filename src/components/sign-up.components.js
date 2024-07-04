import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Validator } from "../core/validator.js";
import { onSubmitHandler } from "./sign-in.components.js";

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
}

//this - это форма

//вызывается при изменении значений в форме

// function onSubmitHandler(event) {
//   event.preventDefault(); //Предотвращает стандартное поведение отправки формы
//   console.log(this.form.value());
//   console.log(this.form.isValid());
// }