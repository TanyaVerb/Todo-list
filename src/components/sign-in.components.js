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

function required(str = "") {
  return str && str.trim();
}

//this - это форма
function onChangeFormHandler(event) {
  event.preventDefault();
  console.log(this);
  console.log(this.name.value);
  console.log(this.password.value);

  if (!required(this.name.value)) {
    console.log("Поле USERNAME ОБЯЗАТЕЛЬНО");
  }
  if (!required(this.password.value)) {
    console.log("Поле PASSWORD ОБЯЗАТЕЛЬНО");
  }

  //нужно выводить влог сообщение о том, что поле обязательно
}
