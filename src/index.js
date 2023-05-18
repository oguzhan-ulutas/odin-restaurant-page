import './style.css';
import layoutCreator from './modules/layout';
import menuPageCreator from './modules/menu';
import aboutPageCreator from './modules/about';

function addMenuEventListeners() {
  const headerButtons = document.querySelectorAll('.header-button');

  headerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList[0] === 'home-div') {
        layoutCreator();
        addMenuEventListeners();
      }
      if (button.classList[0] === 'menu-div') {
        menuPageCreator();
        addMenuEventListeners();
      }
      if (button.classList[0] === 'about-div') {
        aboutPageCreator();
        addMenuEventListeners();
      }
    });
  });
}

layoutCreator();
addMenuEventListeners();
