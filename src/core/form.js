export class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }

  //отрабатывает
  value() {
    const value = {};
    Object.keys(this.controls).forEach((field) => {
      value[field] = this.form[field].value;
    });
    return value;
  }

  isValid() {
    let isFormValid = true[("name", "password")];

    Object.keys(this.controls).forEach((field) => {
      const validatorsFns = this.controls[field];

      let isValid = true;
      validatorsFns.forEach((validator) => {
        isValid = validator(this.form[field].value) && isValid;
      });

      isValid
        ? console.log(`$Инпкут под названием тега name -{field}"Поле валидно"`)
        : console.log("Поле не валидно");

      isFormValid = isValid && isFormValid;
    });
    return isFormValid;
  }
}
