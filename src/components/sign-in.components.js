import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Storage } from "../core/storage.js";
import { Validator } from "../core/validator.js";
import { pageContent } from "../index.js";

export class SignInComponent extends Component {
  constructor(formId, page) {
    //идентификатор формы и ссылка на страницу
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
    this.form.clear(); //Метод, который очищает форму при скрытии компонента.
  }
}
//this - это форма

//вызывается при изменении значений в форме
function onSubmitHandler(event) {
  event.preventDefault(); //Предотвращает стандартное поведение отправки формы
  if (this.form.isValid()) {
    //Создается объект formData, содержащий данные из формы.
    const formData = {
      ...this.form.value(),
    };
    const userId = Storage.enterTodoList(formData); //проверяем данные в  локальном хранилище и возвращает идентификатор пользователя, если вход успешен.

    console.log(userId);

    if (!userId) return;
    localStorage.setItem("selectedUserId", userId); //Сохраняем идентификатор пользователя в локальное хранилище.и переходим на страницу со списком задач.
    //скрываем страницу авторизации
    setTimeout(() => {
      this.page.classList.add("hide");
      //раскрыть страницу списка дел
      pageContent.show();
    }, 2500);
  }
}
