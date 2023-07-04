//Function to get a random color and adapt text color according to the brightness of the background


export const getRandomColor = () => {
    let reds = Math.floor(Math.random() * 256);
    let greens = Math.floor(Math.random() * 256);
    let blues = Math.floor(Math.random() * 256);
    let generatedRandomColor = `rgb(${reds}, ${greens}, ${blues})`;
    return generatedRandomColor;
  };
  
  export const getBrightnessValue = (reds, greens, blues) => {
    let brightness = (reds * 299 + greens * 587 + blues * 114) / 1000;
    return brightness;
  };
  
  export const setElementColor = (element, generatedRandomColor) => {
    element.style.backgroundColor = generatedRandomColor;
    element.style.color =
      generatedRandomColor.getBrightnessValue < 125 ? "white" : "black";
  };
  
