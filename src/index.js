import './style.css';
import layoutCreator from './modules/layout';
import menuPageCreator from './modules/menu';

layoutCreator();

const headerbuttons = document.querySelectorAll('.header-button');

headerbuttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList[0] === 'home-div') {
      layoutCreator();
    }
    if (button.classList[0] === 'menu-div') {
      console.log(button);
      menuPageCreator();
    }
    if (button.classList[0] === 'about-div') {
      layoutCreator();
    }
  });
});
