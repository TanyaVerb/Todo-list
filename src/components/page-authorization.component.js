import { Component } from "../core/component.js";

//наследуется от родителя Component
export class PageAuthorization extends Component {
  constructor(id) {
    // прокидываем id в constructor родителя
    super(id);
  }

  init() {
    // инициализируем формы
    this.signIn = new Component("sign-in");
    this.signUp = new Component("sign-up");
    // получаем ссылки
    this.links = this.component.querySelectorAll(".form__link");
    // навешиваем слушатели событий
    this.links.forEach((link) => {
      link.addEventListener("click", onChangeFormHandler.bind(this));
    });
  }
}

function onChangeFormHandler(event) {
  // функция переключения форм с Sign-in на Sign-up и обратно
  event.preventDefault();
  if (event.target.classList.contains("link-in")) {
    this.signUp.hide();
    this.signIn.show();
  } else if (event.target.classList.contains("link-up")) {
    this.signIn.hide();
    this.signUp.show();
  }
}
