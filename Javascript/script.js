 import {
    getRandomColor,
    getBrightnessValue,
    setElementColor,
  } from './getRandomColor.js';
  
  // Using the imported functions
  const element = document.getElementById('para1');
  const generatedColor = getRandomColor();
  setElementColor(element, generatedColor);
  
  setInterval(() => {
    const generatedColor = getRandomColor();
    setElementColor(element, generatedColor);
  }, 3000);