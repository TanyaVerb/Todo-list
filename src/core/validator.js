export class Validator {
  //метод проверяет не явл.ли ПУСТОЙ строка или строкой,сост.из пробелов
  static required(str = "") {
    console.log("required", str);
    return str && str.trim(); //проверка(не явл.ли строка null или undefined)
  }

  static isEmailValid(value = "") {
    const arrayFromStr = value.trim().split(""); //split(разбиение строки на массив)

    for (let i = 0; i < arrayFromStr.length; i++) {
      if (arrayFromStr[i] === " ") {
        return false;
      }
    }

    if (!value.includes("@")) return false;

    return value.trim();
  }

  static isPasswordValid(value = "") {
    const counter = {
      letter: 0,
      digit: 0,
      uppercaseLetter: 0,
    };

    const arrayFromStr = value.trim().split("");

    arrayFromStr.forEach((symbol) => {
      if (typeof symbol === "string" && !isFinite(symbol)) {
        counter.letter++;
      }
      if (isFinite(symbol)) {
        if (symbol !== " ") {
          counter.digit++;
        }
      }

      if (
        !isFinite(symbol) &&
        /[А-Яа-яA-Za-z\s ]/g.test(symbol) &&
        symbol === symbol.toUpperCase()
      ) {
        counter.uppercaseLetter++;
      }
    });
    //Проверяет, не равно ли нулю значение каждого ключа в counter. Если хотя бы одно значение равно нулю, метод возвращает false.
    for (let key in counter) {
      if (counter[key] === 0) return false;
    }
    return value; //возвращает строку
  }
}

//1 буква
//1цифра
//1 буква в верхнем регистре
