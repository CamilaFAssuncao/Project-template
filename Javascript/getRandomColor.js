//Function to get a random color

export const getRandomColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let generatedRandomColor = `rgb(${x}, ${y}, ${z})`;
  return generatedRandomColor;
};

