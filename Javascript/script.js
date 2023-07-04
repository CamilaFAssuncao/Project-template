import { getRandomColor, setElementColor } from './getRandomColor.js';

// Usando as funções importadas
let generatedColor = getRandomColor();
let element = document.getElementById('para1');
setElementColor(element, generatedColor);
