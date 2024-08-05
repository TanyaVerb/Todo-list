import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";
import {
  confirmActionModal,
  formCreatePostModal,
  formEditPostModal,
  postInfoModal,
} from "../index.js";
import { renderPosts } from "../template/render-posts.js";

export class PageContent extends Component {
  constructor(id, pageAuthorization) {
    super(id);
    this.pageAuthorization = pageAuthorization;
  }

  init() {
    this.logoutBtn = document.getElementById("header-btn");
    this.logoutBtn.addEventListener("click", onLogoutHandler.bind(this));
    this.createBtn = document.getElementById("create-btn");
    this.createBtn.addEventListener(
      "click",
      onShowFormCreatePostHandler.bind(this)
    );
    this.todoList = document.querySelector(".todos-container");

    this.welcome = document.getElementById("welcome");
  }

  onShow() {
    this.todoList.innerHTML = "";
    this.welcome.innerText = Storage.getUserData().name; //имя пользователя
    const postsElemtnts = renderPosts();
    this.todoList.insertAdjacentHTML("afterbegin", postsElemtnts);
    this.items = this.todoList.querySelectorAll(".todos__item");
    Array.from(this.items).forEach(
      (item) => item.addEventListener("click", onTodoHandler) //Добавляем обработчик событий к каждому элементу поста для взаимодействия.
    );
  }
}

function onLogoutHandler() {
  this.hide(); //Скрывает текущий компонент
  localStorage.setItem("selectedUserId", null); //Очищает selectedUserId в локальном хранилище.
  this.pageAuthorization.show(); //Отображает компонент авторизации
}

function onShowFormCreatePostHandler() {
  //Отображает модальное окно для создания поста
  formCreatePostModal.show();
}

function onTodoHandler(e) {
  const todoId = this.dataset.todoId; //Получает идентификатор поста из dataset.todoId (например, data-todo-id="1722292484214")

  if (e.target.classList.contains("todos__item")) {
    postInfoModal.show(todoId); //Отображает модальное окно с информацией о посте
  }

  if (e.target.classList.contains("todos__item-status")) {
    console.log("todos__item-status");
    //*********************** */

    this.classList.toggle("todos__item_done");

    // Обновление хранилища
    //обновленный объект
    const updatedPost = {
      ...Storage.getPostInfo(todoId), //оператор spread(разворачивания)создает копию полученных данных
      status: this.classList.contains("todos__item_done")
        ? "done"
        : "processing",
    };
    // Storage.editPost(todoId, updatedPost);
    //сохраняем обновленные данные поста в локальное хранилище
    Storage.donePost(todoId, updatedPost);
  }
  if (e.target.classList.contains("todos__item-edit")) {
    formEditPostModal.show(todoId);
  }
  if (e.target.classList.contains("todos__item-remove")) {
    confirmActionModal.show(todoId);
  }
}
