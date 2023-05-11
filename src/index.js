import './style.css';
import Icon from './img/restourant.jpg';
import layoutCreator from './modules/layout';

layoutCreator();

const headerbuttons = document.querySelectorAll('.header-button');

headerbuttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button);
  });
});
