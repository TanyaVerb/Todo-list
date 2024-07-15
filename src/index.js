import { PageAuthorization } from "./components/page-authorization.component.js";
import { Validator } from "./core/validator.js";
import { Notification } from "./components/modals/notification.component.js";

console.log(Validator.isEmailValid("tE@"));
console.log(Validator.isPasswordValid("so me1   !tE  "));

const loginPage = new PageAuthorization("login");

export const notification = new Notification("notification");
