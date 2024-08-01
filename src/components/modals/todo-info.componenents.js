import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";
import { renderPostInfo } from "../../template/render-post-info.js";

export class PostInfoModal extends Component {
  constructor(id) {
    super(id); //Вызывает конструктор базового класса Component, передавая ему id компонента.
  }

  init() {
    this.component.addEventListener("click", onCloseModalHandler.bind(this));
  }
  //Отображает модальное окно с информацией о записи
  onShow(todoId) {
    this.component.innerHTML = "";
    const htmlInfo = renderPostInfo(todoId);
    this.component.insertAdjacentHTML("afterbegin", htmlInfo); //рендеринг(отрисовка) HTML-шаблона с информацией о записи, полученной по ID записи (todoId).
  }
  onHide() {
    this.component.innerHTML = "";
  } //Скрывает модальное окно
}

function onCloseModalHandler(e) {
  const { target } = e; //Получает элемент, по которому был произведен клик, из объекта события e.
  const okeyBtn = this.component.querySelector(".modal__btn");
  //скрытие модального окна на клик оверлея или кнопку okey
  let isTargetToClose = target == this.component || target == okeyBtn; //Проверяет, был ли клик по фоновому элементу модального окна (this.component).

  if (isTargetToClose) {
    this.hide();
  }
  console.log(target);
}

//????????????????????????????????????
function onSubmitPostHandler(e) {
  e.preventDefault(); //предотвращает стандартное поведение (перезагрузку страницы)
  console.log(this.form);
  console.log(this.form.value());
  if (this.form.isValid()) {
    // проверяем прошла ли форма валидацию, Если форма валидна, создает объект formData с информацией о новой записи, включая ID
    const formData = {
      id: new Date().getTime(),
      ...this.form.value(),
      status: "processing",
    };
    console.log(formData);
    Storage.createPost(formData); //для сохранения новой записи в хранилище
    //скрываем модалку
    this.hide();
    // вызываем pageContent.show() чтобы дополнительно запустить pageContent.onShow()
    pageContent.show();
  }
}
