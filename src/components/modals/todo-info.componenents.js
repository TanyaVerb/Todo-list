import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";
import { renderPostInfo } from "../../teamplate/render-post-info.js";

export class PostInfoModal extends Component {
  constructor(id) {
    super(id); //Вызывает конструктор базового класса Component, передавая ему id компонента.
  }

  init() {
    this.component.addEventListener("click", onCloseModalHandler.bind(this));
  }
  onShow(todoId) {
    this.component.innerHTML = "";
    const htmlInfo = renderPostInfo(todoId);
    this.component.insertAdjacentHTML("afterbegin", htmlInfo);
  }
  onHide() {}
}

function onCloseModalHandler(e) {
  const { target } = e; //Получает элемент, по которому был произведен клик, из объекта события e.
  const okeyBtn = this.component.querySelector(".modal__btn");
  //скрытие модального окна на клик оверлея или кнопку okey
  let isTargetToClose = target == this.component || target == okeyBtn; //Проверяет, был ли клик по фоновому элементу модального окна (this.component).

  console.log(okeyBtn);
  if (isTargetToClose) {
    this.hide();
  }
  console.log(target);
}

function onSubmitPostHandler(e) {
  e.preventDefault();
  console.log(this.form);
  console.log(this.form.value());
  if (this.form.isValid()) {
    const formData = {
      id: new Date().getTime(),
      ...this.form.value(),
      status: "processing",
    };
    console.log(formData);
    Storage.createPost(formData);
    //скрываем модалку
    this.hide();
    //вызываем pageContent.show
    pageContent.show();
  }
}
