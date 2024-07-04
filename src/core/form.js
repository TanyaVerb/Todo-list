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
      value[field] = this.form[field].value; //значение из соотв,элемента формы
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
        ? console.log(`Инпут под названием тега name -${field} Валидно`)
        : console.log(`Инпут под названием тега name -${field} НЕ Валидно`);

      isFormValid = isValid && isFormValid;
    });
    return isFormValid;
  }
}
