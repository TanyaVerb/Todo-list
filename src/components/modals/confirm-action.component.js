import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";
import { renderConfirmModal } from "../../template/render-confirm.js";
import { renderPostInfo } from "../../template/render-post-info.js";

export class ConfirmActionModal extends Component {
  constructor(id) {
    super(id); //Вызывает конструктор базового класса Component, передавая ему id компонента.
  }

  init() {
    this.component.addEventListener("click", onCloseModalHandler.bind(this));
  }
  //Отображает модальное окно с информацией о записи
  onShow(todoId) {
    this.todoId = todoId;
    this.component.innerHTML = "";
    const htmlInfo = renderConfirmModal(todoId);
    this.component.insertAdjacentHTML("afterbegin", htmlInfo); //рендеринг(отрисовка) HTML-шаблона с информацией о записи, полученной по ID записи (todoId).
  }
  onHide() {
    this.component.innerHTML = "";
  } //Скрывает модальное окно
}

function onCloseModalHandler(e) {
  const { target } = e; //Получает элемент, по которому был произведен клик, из объекта события e.
  const isCancelBtn = this.component.querySelector(
    ".modal__actions-btn_disagree"
  );
  //скрытие модального окна на клик оверлея или кнопку no
  let isTargetToClose = target == this.component || target == isCancelBtn; //Проверяет, был ли клик по фоновому элементу модального окна (this.component).

  const isOkBtn = this.component.querySelector(".modal__actions-btn_agree");
  if (target == isOkBtn) {
    Storage.removeTodo(this.todoId);
    this.hide();
    pageContent.show();
  }
  if (isTargetToClose) {
    this.hide();
  }
  console.log(target);
}
