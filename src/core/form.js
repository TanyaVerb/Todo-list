//controls- это объект, который определяет правила проверки для каждого поля формы. Каждый ключ в controls-объекте - это имя поля формы, а соотв. значение — массив функций проверки.
export class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }

  //отрабатывает поля формы и записывает в объект value пары ключ-значение (имя поля и значение)
  value() {
    //объект,  в кот.каждая пара ключ-значение - это имя поля и значение
    const value = {};
    //итерация по всем полям формы
    Object.keys(this.controls).forEach((field) => {
      value[field] = this.form[field].value; //значение из соотв.элемента формы
    });
    return value;
  }
  //-------------------------------------------------
  //метод выполняет фактическую проверку всей формы
  //если хоть одно поле не валидно, то false
  isValid() {
    let isFormValid = true; //все поля изначально валидны

    //итерация по всем полям
    Object.keys(this.controls).forEach((field) => {
      const validatorsFns = this.controls[field]; //для каждого поля он извлекает массив функций проверки из controls-объекта

      let isValid = true;
      //validator-это функция проверки
      validatorsFns.forEach((validator) => {
        isValid = validator(this.form[field].value) && isValid;
      });

      isValid
        ? clearNoticeError(this.form[field])
        : setNoticeError(this.form[field]);

      isFormValid = isValid && isFormValid;
    });
    return isFormValid;
  }

  clear() {
    Object.keys(this.controls).forEach((field) => {
      this.form[field].value = "";
      clearNoticeError(this.form[field]);
    });
  }
}

const requiredErrorText = "Field is required";
const userEmailText = "Field is required(at least:@ symbol)";
const passwordErrorText =
  "Field is required(at least:1 uppercase letter and 1 digit)";

function setNoticeError(input) {
  clearNoticeError(input);

  console.log(input.parentElement);
  input.parentElement.classList.add("invalid");

  const fieldName = input.getAttribute("name");

  if (
    fieldName === "name" ||
    fieldName === "title" ||
    fieldName === "description"
  ) {
    input.insertAdjacentHTML("afterend", setErrorText(requiredErrorText));
  }
  if (fieldName === "email") {
    input.insertAdjacentHTML("afterend", setErrorText(userEmailText));
  }
  if (fieldName === "password") {
    console.log(input.dataset.signIn);

    input.dataset.signIn === "sign-in"
      ? input.insertAdjacentHTML("afterend", setErrorText(requiredErrorText))
      : input.insertAdjacentHTML("afterend", setErrorText(passwordErrorText));
  }
}

function clearNoticeError(input) {
  //если ошибка есть, то будем проводить очистку
  if (input.nextElementSibling) {
    if (input.closest(".form__field")) {
      input.closest(".form__field").removeChild(input.nextElementSibling);

      input.parentElement.classList.remove("invalid");
    }
    if (input.closest(".modal__field")) {
      input.closest(".modal__field").removeChild(input.nextElementSibling);
      input.parentElement.classList.remove("invalid");
    }
  }
}

function setErrorText(text) {
  return `<p class= "form__field-warning">${text}</p>`;
}
