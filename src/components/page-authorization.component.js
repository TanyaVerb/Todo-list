import { Component } from "../core/component.js";
import { SignInComponent } from "./sign-in.components.js";
import { SigUpComponent } from "./sign-up.components.js";

//наследуется от родителя Component
export class PageAuthorization extends Component {
  constructor(id) {
    // прокидываем id в constructor родителя
    super(id);
  }

  init() {
    // инициализируем формы
    this.signIn = new SignInComponent("sign-in");
    this.signUp = new SigUpComponent("sign-up");
    // получаем ссылки
    this.links = this.component.querySelectorAll(".form__link");

    // навешиваем слушатели событий
    this.links.forEach((link) => {
      link.addEventListener("click", onChangeFormHandler.bind(this));
    });

    // this.component.addEventListener("click", onChangeFormHandler.bind(this));
    // })
  }
}

function onChangeFormHandler(event) {
  // функция переключения форм с Sign-in на Sign-up и обратно

  //отмена действия браузера по умолчанию
  event.preventDefault();
  event.stopPropagation();
  if (event.target.classList.contains("link-in")) {
    this.signUp.hide();
    this.signIn.show();
  } else if (event.target.classList.contains("link-up")) {
    this.signIn.hide();
    this.signUp.show();
  }
}
