import { PageAuthorization } from "./components/page-authorization.component.js";
import { Component } from "./core/component.js";
import { Validator } from "./core/validator.js";

Validator.required("someValue");
console.log(Validator.isEmailValid("ttt@"));

const component1 = new PageAuthorization("login");
console.log(component1);
