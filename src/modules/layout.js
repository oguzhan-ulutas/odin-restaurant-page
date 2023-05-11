// Creates an element, arrange its class and content, append it to selected element
function elementCreator(selector, tag, elementClass, content) {
  const selectedElement = document.querySelector(selector);
  const newElement = document.createElement(tag);

  if (elementClass) {
    newElement.classList.value = elementClass;
  }

  if (content) {
    newElement.textContent = content;
  }

  selectedElement.appendChild(newElement);
}

export default function layoutCreator() {
  // Create main layout
  const footerContent = 'The Odin Project 2023 - coded by oguzhan-ulutas ';
  elementCreator('#content', 'div', 'header');
  elementCreator('#content', 'div', 'main-content');
  elementCreator('#content', 'div', 'footer', footerContent);

  // Create headar buttons (as divs)
  elementCreator('.header', 'div', 'home-div, header-button', 'HOME');
  elementCreator('.header', 'div', 'menu-div, header-button', 'MENU');
  elementCreator('.header', 'div', 'about-div, header-button', 'ABOUT');
}
