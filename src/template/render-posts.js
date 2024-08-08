import { Storage } from "../core/storage.js";

export const renderPosts = (filters = {}) => {
  console.log(filters);
  let { todoList } = Storage.getUserData(); //извлекаем массив todoList, который содержит список задач пользователя.(получаем данные из LocalStorage)
  console.log(todoList);
  if (todoList.length === 0) {
    return '<p class="todos__notice">Nothing found</p>';
  }

  const filteredPosts = todoList.filter((post) => {
    let isFindPosts = true;

    Object.keys(filters).forEach((field) => {
      let isFind = true;
      switch (field) {
        case "title":
          isFind = post.title
            .toLowerCase()
            .includes(filters[field].toLowerCase());
          if (filters[field] === "") isFind = true;
          break;

        case "status":
          isFind = post.status.includes(filters[field]);
          if (filters[field] === "all") isFind = true;
          break;
      }
      isFindPosts = isFind && isFindPosts;
    });
    return isFindPosts;
  });
  const todosForRender = filteredPosts
    .map((todo) => {
      const style =
        todo.status === "done" ? "todos__item todos__item_done" : "todos__item";
      return `
            <div class="${style}" data-todo-id=${todo.id}>
                <div class="todos__item-status"></div>
                <p class="todos__item-title">${todo.title}</p>
                <div class="todos__item-edit"></div>
                <div class="todos__item-remove"></div>
            </div>
        `;
    })
    .join("");

  return todosForRender; // возвращает строку HTML, которая будет содержать список задач, готовый для рендеринга на странице.
};
