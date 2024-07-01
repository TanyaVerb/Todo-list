import { Component } from "../core/component.js";

export class SignInComponent extends Component {
  constructor(formId) {
    super(formId);
  }

  init() {
    console.log(this.component);
    this.component.addEventListener("submit", onChangeFormHandler);
  }
}

//Проверяем, не пуста ли строка, и возвращает очищенную от пробелов строку, если она не пуста.
function required(str = "") {
  return str && str.trim();
}

//this - это форма

//вызывается при изменении значений в форме
function onChangeFormHandler(event) {
  event.preventDefault(); //Предотвращает стандартное поведение отправки формы
  console.log(this);
  console.log(this.name.value);
  console.log(this.password.value);

  if (!required(this.name.value)) {
    console.log("Поле USERNAME ОБЯЗАТЕЛЬНО");
  }

  if (!required(this.password.value)) {
    console.log("Поле PASSWORD ОБЯЗАТЕЛЬНО");
  }

  // if (required(this.name.value)) {
  //   if (this.name.value.length > 6) {
  //     console.log("Поле name больше 6");
  //   }
  // }
}
