import './style.css';
import Icon from './img/restourant.jpg';

console.log('helööö');

const divContent = document.querySelector('#content');
const img = document.createElement('img');
img.src = Icon;
console.log(Icon);
divContent.appendChild(img);
