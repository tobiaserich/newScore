export default function calculatePoints(name, value) {
  console.log(name);
  switch (name) {
    default:
      return 0;
    case "AF":
      if (value === "") {
        return "0";
      } else if (value <= 8) {
        return "3";
      } else if (value >= 9 && value <= 11) {
        return "1";
      } else if (value >= 12 && value <= 20) {
        return "0";
      } else if (value >= 21 && value <= 24) {
        return "2";
      } else if (value >= 25) {
        return "3";
      }
      break;
    case "SPO2":
      if (value === "") {
        return "0";
      } else if (value <= 91) {
        return "3";
      } else if (value >= 92 && value <= 93) {
        return "2";
      } else if (value >= 94 && value <= 95) {
        return "1";
      } else if (value >= 96) {
        return "0";
      }
      break;
    case "O2 Gabe?":
      if (value === true) {
        return "0";
      } else if (value === false) {
        return "2";
      } else {
        return "0";
      }
    case "RR syst":
      if (value === "") {
        return "0";
      } else if (value <= 90) {
        return "3";
      } else if (value >= 91 && value <= 100) {
        return "2";
      } else if (value >= 101 && value <= 110) {
        return "1";
      } else if (value >= 111 && value <= 219) {
        return "0";
      } else if (value >= 220) {
        return "3";
      }
      break;
    case "Puls":
      if (value === "") {
        return "0";
      } else if (value <= 40) {
        return "3";
      } else if (value >= 41 && value <= 50) {
        return "1";
      } else if (value >= 51 && value <= 90) {
        return "0";
      } else if (value >= 91 && value <= 110) {
        return "1";
      } else if (value >= 111 && value <= 130) {
        return "2";
      } else if (value >= 131) {
        return "3";
      }
      break;
    case "Vigilanz":
      if (value === false) {
        return "0";
      } else if (value === true) {
        return "3";
      } else {
        return "0";
      }
    case "Temp":
      if (value === "") {
        return "0";
      } else if (value <= 35.0) {
        return "3";
      } else if (value >= 35.1 && value <= 36.0) {
        return "1";
      } else if (value >= 36.1 && value <= 38.0) {
        return "0";
      } else if (value >= 38.1 && value <= 39.0) {
        return "1";
      } else if (value > 39.0) {
        return "2";
      }
      break;
  }
}
