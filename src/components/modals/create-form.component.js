import { Component } from "../../core/component.js";

export class FormCreatePostModal extends Component {
  constructor(id) {
    super(id);
  }

  init() {
    this.component.addEventListener("click", onCloseModalHandler.bind(this));
  }
}

function onCloseModalHandler(e) {
  const { target } = e;
  //сщкрытие модалки на клик о
  let isBg = target == this.component;
  if (isBg) {
    this.hide();
  }
  console.log(target);
}
