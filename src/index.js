import './style.css';
import Icon from './img/restourant.jpg';

console.lg('helööö');

const divContent = document.querySelector('#content');
const img = document.createElement('img');
img.src = Icon;
console.log(img);
divContent.appendChild(img);
