import './style.css';
import layoutCreator from './modules/layout';
import menuPageCreator from './modules/menu';

function addMenuEventListeners() {
  const headerbuttons = document.querySelectorAll('.header-button');

  headerbuttons.forEach((button) => {
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
        layoutCreator();
        addMenuEventListeners();
      }
    });
  });
}

layoutCreator();
addMenuEventListeners();
