import { Component } from "../../core/component.js";

export class Notification extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    this.notificationText = this.component.firstElementChild;
  }
  //очищаем таймер при каждом повторном клике
  onHide() {
    clearTimeout(this.timeId);
  }

  onShow(text) {
    this.notificationText.innerText = text;

    this.timeId = setTimeout(() => {
      this.hide();
    }, 2500);
  }
}
