import { PageAuthorization } from "./components/page-authorization.component.js";
import { Validator } from "./core/validator.js";
import { Notification } from "./components/modals/notification.component.js";
import { PageContent } from "./components/page-content.component.js";
import { FormCreatePostModal } from "./components/modals/create-form.component.js";

console.log(Validator.isEmailValid("tE@"));
console.log(Validator.isPasswordValid("so me1   !tE  "));

const loginPage = new PageAuthorization("login");
export const pageContent = new PageContent("page-content", loginPage);
export const formCreatePostModal = new FormCreatePostModal("create");

export const notification = new Notification("notification");

console.log(pageContent);

if (JSON.parse(localStorage.getItem("selectedUserId"))) {
  loginPage.hide();
  pageContent.show();
}
