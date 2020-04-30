export default function calculateForWindowWidth(windowSize, elementName) {
  if (windowSize > 400) {
    switch (elementName) {
      default:
        console.error(`Error, ${elementName} is not defined`);
        break;
      case "text":
        return "1.5rem";
      case "input-height":
        return "40%";
      case "input-width":
        return "25%";
      case "input-position":
        return "35";
      case "switch-width":
        return "50%";
      case "button-radius":
        return "20px";
      case "fontSize":
        return "12px";
    }
  } else {
    switch (elementName) {
      default:
        console.error(`Error, ${elementName} is not defined`);
        break;
      case "text":
        return "1.3rem";
      case "input-height":
        return "50%";
      case "input-width":
        return "30%";
      case "input-position":
        return "40";
      case "switch-width":
        return "80%";
      case "button-radius":
        return "15px";
      case "fontSize":
        return "10px";
    }
  }
}
