import { notification } from "../index.js";
//userData-объект с данными пользователя
export class Storage {
  static createNewUser(userData) {
    // const user = {
    //   id: 1,
    //   name: "Vlad",
    //   email: "vlad@.ru",
    //   password: "1Q",
    // };
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([userData]));
    } else {
      //проверяем существует ли такой пользователь
      if (checkUserExist(userData)) {
        //если пользователя нету - выходим из функции и ничего не создаем
        //вызов уведомления о том, что такой пользователь уже существует
        notification.show("This user already exist");

        return;
      }

      //извлекает существующий список пользователей из localStorage.
      // и добавляет userData к списку пользователей.
      const existUsers = getAllUsersFromLocalStorage();
      localStorage.setItem("users", JSON.stringify([...existUsers, userData]));
    }
    // сохраняет обновленный список пользователей в localStorage
    const value = JSON.parse(localStorage.getItem("users"));

    //вызов уведомления о создании пользователя
    notification.show("Account is created");
    return userData.id;
  }
  static enterTodoList(login) {
    const existUsers = getAllUsersFromLocalStorage();
    const user = existUsers.find(({ name, password }) => {
      return name === login.name && password === login.password;
    });
    console.log(user);
    if (user) {
      notification.show("Successful authorization");
      return user.id;
    } else {
      notification.show("Incorrect login or password");
    }
  }
  static getUserData() {
    return findUserData();
  }
  static createPost(postData) {
    const existUsers = getAllUsersFromLocalStorage();
    const currentUser = findUserData(); //{}
    const updateUser = {
      ...currentUser,
      todoList: [...currentUser.todoList, postData],
    };
    const indexCurrentUser = existUsers.findIndex(
      (user) => user.id === currentUser.id
    );
    const updateUsersArray = [
      ...existUsers.slice(0, indexCurrentUser),
      updateUser,
      ...existUsers.slice(0, indexCurrentUser + 1),
    ];
    console.log(updateUsersArray);
    localStorage.setItem("users", JSON.stringify(updateUsersArray));
    notification.show("Post created");
  }

  static getPostInfo(todoId) {
    const currentUser = findUserData();
    console.log(todoId);
    return currentUser.todoList.find(
      (item) => Number(item.id) === Number(todoId)
    );
    const updateUser = {
      ...currentUser,
      todoList: [...currentUser.todoList, postData],
    };
  }

  static removeTodo(todoId) {
    const existUsers = getAllUsersFromLocalStorage();
    const currentUser = findUserData();
    const updateUserPosts = currentUser.todoList.filter(
      (todo) => Number(todo.id) !=== Number(todoId)
    );
  }
}

function checkUserExist(userData) {
  let isUser = false;
  //получаем уже существующих пользователей - массив поль-ей
  const existUsers = getAllUsersFromLocalStorage();

  //в массиве делаем проверку на  соответствие значений username и email
  //деструктуризация
  existUsers.forEach(({ name, email }) => {
    if (name === userData.name && email === userData.email) {
      //если результат if будет true - значит такой пользователь есть
      //поэтому меняем значение isUser на true
      isUser = true;
    }
  });

  return isUser;
}

function getAllUsersFromLocalStorage() {
  const existUsers = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  return existUsers;
}

//ищем текущего пользователя
function findUserData() {
  const userId = JSON.parse(localStorage.getItem("selectedUserId"));
  if (userId) {
    const users = getAllUsersFromLocalStorage();
    return users.find((user) => {
      return user.id === userId;
    });
  }
}

function updateLocalStorage(updateUser){

}