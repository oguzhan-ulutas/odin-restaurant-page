import { elementCreator, clearDisplay, mainLayoutCreator } from './layout';

export default function aboutPageCreator() {
  clearDisplay();
  mainLayoutCreator();
  elementCreator('.main-content', 'div', 'contact', 'Contact Us');

  const address =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet';
  const tel = '+99 999 99 99';

  elementCreator('.main-content', 'div', 'address', address);
  elementCreator('.main-content', 'div', 'tel', tel);
}
