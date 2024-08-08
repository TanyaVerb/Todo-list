import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";

export class ThemeComponent extends Component {
  constructor(id, pageContent) {
    super(id);
    this.pageContent = pageContent;
  }

  init() {
    if (Storage.getUserData()) {
      this.component.value = Storage.getUserData().theme;
    } else {
      this.component.value = "gray";
    }

    this.component.addEventListener("change", onThemeHandler.bind(this));
  }
  value() {
    return this.component.value;
  }
}

function onThemeHandler(e) {
  console.log(e.target.value);
  Storage.setTheme(e.target.value);
  const classList = this.pageContent.classList;
  console.log(classList);

  Array.from(classList).forEach((cls) => {
    if (cls === "application") return;
    this.pageContent.classList.remove(cls);
  });
  this.pageContent.classList.add(e.target.value);
}
