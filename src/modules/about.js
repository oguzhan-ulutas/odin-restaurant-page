import { elementCreator, clearDisplay, mainLayoutCreator } from './layout';

export default function aboutPageCreator() {
  clearDisplay();
  mainLayoutCreator();

  elementCreator('.main-content', 'div', 'contact');
  elementCreator('.contact', 'div', 'contact-us', 'Contact Us');

  const address = `ADDRESS: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Pellentesque placerat, tellus sit amet`;
  const tel = 'TEL: +99 999 99 99';

  elementCreator('.contact', 'div', 'address', address);
  elementCreator('.contact', 'div', 'tel', tel);
}
