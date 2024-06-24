export class Component {
  constructor(id) {
    this.component = document.getElementById(id);
    this.init();
  }

  //для подстраховки, если  нет функции init
  init() {}
  hide() {
    this.component.classList.add("hide");
  }
  show() {
    this.component.classList.remove("hide");
  }
}
