import { notification } from "../index.js";

export class Storage {
  static createNewUser(userData) {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([userData]));
    } else {
      // проверяем существует ли такой пользователь
      if (checkUserExist(userData)) {
        // если пользователя нету - выходим из функции и ничего не создаем
        // вызов уведомления о том, что такой пользователь уже существует
        notification.show("This use already exist");
        return;
      }
      // иначе записываем в localStorage уже существующих пользователей + добавляем нового
      const existUsers = getAllUsersFromLocalStorage();
      localStorage.setItem("users", JSON.stringify([...existUsers, userData]));
    }

    // вызов уведомления о создание пользователя
    notification.show("Account is created");
    return userData.id;
  }
  //возвращает id созданного пользователя/login-это formData({}c данными из формы)
  static enterTodoList(login) {
    const existUsers = getAllUsersFromLocalStorage();
    //ищет пользователя по имени и паролю
    const user = existUsers.find(({ name, password }) => {
      return name === login.name && password === login.password;
    });
    if (user) {
      notification.show("Successful authorization"); //успешная авторизация
      return user.id;
    } else {
      notification.show("Incorrect login or password");
    }
  }
  //Возвращает данные текущего пользователя из localStorage.
  static getUserData() {
    return findUserData();
  }

  static createPost(postData) {
    // postData.status = "processing"; //************* */
    const currentUser = findUserData(); //Получает данные текущего пользователя
    const updateUser = {
      ...currentUser,
      todoList: [...currentUser.todoList, postData], //Добавляет новый пост в список дел пользователя
    };
    updateLocalStorage(updateUser); //Обновляет данные пользователя в localStorage.
    notification.show("Post created");
  }

  static getPostInfo(todoId) {
    const currentUser = findUserData(); //Получает данные текущего пользователя.
    return currentUser.todoList.find(
      (item) => Number(item.id) === Number(todoId)
    ); //Возвращает информацию о конкретном посте из списка дел пользователя по его идентификатору
  }

  static removeTodo(todoId) {
    const currentUser = findUserData();
    const updateUserPosts = currentUser.todoList.filter(
      (todo) => Number(todo.id) !== Number(todoId)
    );
    const updateUser = {
      ...currentUser,
      todoList: updateUserPosts,
    }; //Удаляет пост из списка дел пользователя по его идентификатору.
    updateLocalStorage(updateUser); //Обновляет данные пользователя в localStorage
  }
  static editPost(todoId, formData) {
    const currentUser = findUserData();
    const indexEdiablePost = currentUser.todoList.findIndex(
      (todo) => Number(todo.id) === Number(todoId)
    );
    const updateUser = {
      ...currentUser,
      todoList: [
        ...currentUser.todoList.slice(0, indexEdiablePost),
        formData,
        ...currentUser.todoList.slice(indexEdiablePost + 1),
      ],
    };
    updateLocalStorage(updateUser);
    notification.show("Post changed");
  }

  //****************/
  static updateTodoStatus(todoId) {
    const currentUser = findUserData(); //Получает данные текущего пользователя.
    currentUser.todoList.forEach((post) => {
      if (Number(post.id) === Number(todoId)) {
        post.status = post.status === "done" ? "processing" : "done";
      }
    });
    updateLocalStorage(currentUser);
    console.log(currentUser);
  }
}

function checkUserExist(userData) {
  let isUser = false;
  // получаем уже существующих пользователей - массив пользователей
  const existUsers = getAllUsersFromLocalStorage();
  // в массиве делаем проверку на соответствие значений username и email
  existUsers.forEach(({ name, email }) => {
    if (name === userData.name && email === userData.email) {
      // если результат if будет true - значит такой пользователь есть
      // поэтому меняем значение переменной isUser на true
      isUser = true;
    }
  });

  return isUser;
}

//Получает всех пользователей из хранилища в localStorage
function getAllUsersFromLocalStorage() {
  const existUsers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  return existUsers;
}

//Получает идентификатор текущего пользователя из localStorage и ищет пользователя по его идентификатору в хранилище.
function findUserData() {
  const userId = JSON.parse(localStorage.getItem("selectedUserId"));
  if (userId) {
    const users = getAllUsersFromLocalStorage();
    return users.find((user) => {
      return user.id === userId;
    });
  }
}

function updateLocalStorage(updateUser) {
  const existUsers = getAllUsersFromLocalStorage(); //Получает всех пользователей из хранилища в localStorage
  const currentUser = findUserData();
  const indexCurrentUser = existUsers.findIndex(
    (user) => user.id === currentUser.id
  );
  const updateUsersArray = [
    ...existUsers.slice(0, indexCurrentUser),
    updateUser,
    ...existUsers.slice(indexCurrentUser + 1),
  ]; //Обновляет данные пользователя в хранилище
  localStorage.setItem("users", JSON.stringify(updateUsersArray)); // Сохраняет обновленное хранилище в localStorage
}
