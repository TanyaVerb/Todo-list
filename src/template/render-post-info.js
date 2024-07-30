import { Storage } from "../core/storage.js";

//todoId-  ID задачи, которую нужно отобразить
export const renderPostInfo = (todoId) => {
  const todo = Storage.getPostInfo(todoId);

  return `
    <div class="modal-container modal-container_info">
        <h2 class="modal__title">${todo?.title}</h2>
        <p class="modal__description">${todo?.description}</p>
        <button class="modal__btn btn">Okey</button>
      </div>
    `;
};
