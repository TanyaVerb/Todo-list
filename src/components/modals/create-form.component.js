import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";

export class FormCreatePostModal extends Component {
  constructor(id) {
    super(id); //Вызывает конструктор базового класса Component, передавая ему id компонента.
  }

  init() {
    this.component.addEventListener("click", onCloseModalHandler.bind(this));
    this.formWrapper = this.component.firstElementChild;
    this.formWrapper.addEventListener("submit", onSubmitPostHandler.bind(this));
    this.form = new Form(this.formWrapper, {
      title: [Validator.required],
      description: [Validator.required],
    });
  }
  onHide() {
    this.form.clear();
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
    // вызываем pageContent.show() чтобы дополнительно запустить pageContent.onShow()
    pageContent.show();
  }
}
