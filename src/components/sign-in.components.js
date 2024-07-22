import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Storage } from "../core/storage.js";
import { Validator } from "../core/validator.js";
import { pageContent } from "../index.js";

export class SignInComponent extends Component {
  constructor(formId, page) {
    super(formId);
    this.page = page;
  }

  init() {
    this.component.addEventListener("submit", onSubmitHandler.bind(this));
    this.form = new Form(this.component, {
      name: [Validator.required], //
      password: [Validator.required],
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
  if (this.form.isValid()) {
    const formData = {
      ...this.form.value(),
    };
    const userId = Storage.enterTodoList(formData);

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
