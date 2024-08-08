import { Component } from "../core/component.js";
import { pageContent } from "../index.js";

export class FormFiltersComponent extends Component {
  constructor(id) {
    super(id);
    this.filters = {
      title: "",
      status: "all",
    };
  }
  value() {
    return this.filters;
  }
  init() {
    this.component.addEventListener("input", onFilterHandler.bind(this));
  }
  clear() {
    this.filters.title = "";
    this.filters.status = "all";
    this.component.title.value = "";
    this.component.status.value = "all";
  }
}

function onFilterHandler(e) {
  console.log(e);
  e.preventDefault();
  Object.keys(this.filters).forEach((field) => {
    this.filters[field] = this.component[field].value;
  });

  console.log(this.filters);
  console.log(this.filters);
  pageContent.show();
}
