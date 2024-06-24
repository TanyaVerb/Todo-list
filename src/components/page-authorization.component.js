import { Component } from "../core/component.js";

export class PageAutorization extends Component {
  constructor(id) {
    super(id);
    console.log(this.component);
    this.init();
    console.log(this.links);
  }

  init() {
    this.signIn = new Component("sign-in");
    this.signUp = new Component("sign-up");
    this.links = this.component.querySelectorAll(".form__link");
    this.links.forEach((link) => {
      //приявязали this к экз
      link.addEventListener("click", onCHangeFormHandler.bind(this));
    });
  }
}

function onCHangeFormHandler(event) {
  event.preventDefault();
  console.log(this);
  console.log(this.signIn);
  console.log(this.signUp);
  if (event.target.classList.contains("link-in")) {
    this.signUp.hide();
    this.signIn.show();
  } else if (event.target.classList.contains("link-up")) {
    this.signIn.hide();
    this.signUp.show();
  }
}
