import { PageAuthorization } from "./components/page-authorization.component.js";
import { Validator } from "./core/validator.js";
import { Notification } from "./components/modals/notification.component.js";
import { PageContent } from "./components/page-content.component.js";
import { FormCreatePostModal } from "./components/modals/create-form.component.js";
import { PostInfoModal } from "./components/modals/todo-info.componenents.js";

console.log(Validator.isEmailValid("tE@"));
console.log(Validator.isPasswordValid("so me1   !tE  "));

const loginPage = new PageAuthorization("login");
export const pageContent = new PageContent("page-content", loginPage);
export const formCreatePostModal = new FormCreatePostModal("create");
export const postInfoModal = new PostInfoModal("info");

console.log(postInfoModal);

export const notification = new Notification("notification");

console.log(pageContent);

if (JSON.parse(localStorage.getItem("selectedUserId"))) {
  loginPage.hide();
  pageContent.show();
}

//====================================================
// const wareStore = {
//   jackets: "empty",
//   hats: "empty",
//   socks: "empty",
//   pants: 15,
//   parer: true,
//   mixers: 14,
//   date: new Date(),
//   cookers: "empty",
// };

// function printReport(obj) {
//   const result = Object.entries(obj)
//     .filter(([key, value]) => {
//       return value === "empty";
//     })
//     .reduce((acc, [key, value]) => {
//       return `${acc} ${key},`;
//     }, "");
//   return result.trim().length
//     ? `We need this item: ${result.slice(0, -1)}!`
//     : " Everything fine";
// }

// if (result.trim().length) {
//   return `We need this item: ${result.slice(0, -1)}!`;
// } else {
//   return " Everything fine";
// }

// // const newWareStore = Object.entries(wareStore);
// // let emptyArr = newWareStore. filter(elem =>{
// //   if (elem. ===)
// // });

// console.log(printReport(wareStore));
