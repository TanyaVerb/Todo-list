import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";
import { formCreatePostModal } from "../index.js";
import { renderPosts } from "../teamplate/render-post.js";
import { postInfoModal } from "./modals/todo-info.componenents.js";

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
    this.welcome.innerText = Storage.getUserData().name;
    const postsElements = renderPosts();
    this.todoList.insertAdjacentHTML("afterbegin", postsElements);
    this.items = this.todoList.querySelectorAll(".todos__item");
    Array.from(this.items).forEach((item) =>
      item.addEventListener("click", onTodoHandler)
    );
  }
}

// Обработчик события для кнопки "Logout".
function onLogoutHandler() {
  console.log(this);
  this.hide();
  localStorage.setItem("selectedUserId", null); //Удаляет данные о текущем пользователе из localStorage
  console.log(localStorage.setItem("selectedUserId", null));
  this.pageAuthorization.show(); //Отображает компонент pageAuthorization
}
//Обработчик события для кнопки "Create"
function onShowFormCreatePostHandler() {
  formCreatePostModal.show(); //Отображает модальное окно
}

function onTodoHandler(e) {
  const todoId = this.dataset.todoId;
  console.log(todoId);
  if (e.target.classList.contains("todos__item")) {
    postInfoModal.show(todoId);
  }
  if (e.target.classList.contains("todos__item-status")) {
    console.log("todos__item-status");
  }
  if (e.target.classList.contains("todos__item-edit")) {
    console.log("todos__item-edit");
  }
  if (e.target.classList.contains("todos__item-remove")) {
    Storage.removeTodo(todoId);
  }
}
