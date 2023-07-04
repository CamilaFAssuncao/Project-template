export const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const generatedRandomColor = `rgb(${red}, ${green}, ${blue})`;
  return { red, green, blue, generatedRandomColor };
};

export const getBrightnessValue = (red, green, blue) => {
  return (red * 299 + green * 587 + blue * 114) / 1000;
};

export const setElementColor = (element, generatedRandomColor) => {
  element.style.backgroundColor = generatedRandomColor.generatedRandomColor;
  const { red, green, blue } = generatedRandomColor;
  element.style.color = getBrightnessValue(red, green, blue) < 125 ? "white" : "black";
};
