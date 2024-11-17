import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";

export class ThemeComponent extends Component {
  constructor(id, pageContent) {
    super(id);
    this.pageContent = pageContent;
    this.component.addEventListener("change", onThemeHandler.bind(this));
  }

  init() {
    if (Storage.getUserData()) {
      //Проверяем, есть ли данные пользователя в локальном хранилище
      this.component.value = Storage.getUserData().theme; //если данные есть, устанавливает значение value компонента как значение темы из данных пользователя
    } else {
      this.component.value = "gray"; //если данных нет, устанавливает value как "gray"
    }
  }
  value() {
    const { theme } = Storage.getUserData();
    this.component.value = theme;
    this.pageContent.classList.remove("grey", "yellow", "red");
    return this.component.value; //Метод, который возвращает текущее значение компонента
  }
}

function onThemeHandler(e) {
  console.log(e.target.value);
  Storage.setTheme(e.target.value); // сохраняем выбранную тему в локальном хранилище
  const classList = this.pageContent.classList; //получаем список классов элемента pageContent.
  console.log(classList);

  Array.from(classList).forEach((cls) => {
    if (cls === "application") return;
    this.pageContent.classList.remove(cls);
  });
  this.pageContent.classList.add(e.target.value);
}
// ===========================================================
