import { PageAuthorization } from "./components/page-authorization.component.js";
import { Validator } from "./core/validator.js";

console.log(Validator.isEmailValid("tE@"));
console.log(Validator.isPasswordValid("so me1   !tE  "));

const component1 = new PageAuthorization("login");
console.log(component1);
