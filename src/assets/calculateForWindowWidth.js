export default function calculateForWindowWidth(windowSize, elementName) {
  if (windowSize > 400) {
    switch (elementName) {
      default:
        console.error(`Error, ${elementName} is not defined`);
        break;
      case "h2":
        return "1.5rem";
      case "input-height":
        return "40%";
      case "input-width":
        return "25%";
      case "input-position":
        return "35%";
    }
  } else {
    switch (elementName) {
      default:
        console.error(`Error, ${elementName} is not defined`);
        break;
      case "h2":
        return "1.3rem";
      case "input-height":
        return "50%";
      case "input-width":
        return "30%";
      case "input-position":
        return "40%";
    }
  }
}
