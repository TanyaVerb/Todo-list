import { Component } from "../../core/component.js";

export class FormCreatePostModal extends Component {
  constructor(id) {
    super(id); //Вызывает конструктор базового класса Component, передавая ему id компонента.
  }

  init() {
    this.component.addEventListener("click", onCloseModalHandler.bind(this));
  }
}

function onCloseModalHandler(e) {
  const { target } = e; //Получает элемент, по которому был произведен клик, из объекта события e.

  //скрытие модального окна на клик оверлея
  let isBg = target == this.component; //Проверяет, был ли клик по фоновому элементу модального окна (this.component).
  if (isBg) {
    this.hide();
  }
  console.log(target);
}
