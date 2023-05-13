// Creates an element, arrange its class and content, append it to selected element
function elementCreator(selector, tag, elementClass, content) {
  const selectedElement = document.querySelector(selector);
  const newElement = document.createElement(tag);

  if (tag === 'div') {
    if (elementClass) {
      newElement.classList.value = elementClass;
    }
    if (content) {
      newElement.textContent = content;
    }
  } else if (tag === 'img') {
    newElement.src = content;
  }

  selectedElement.appendChild(newElement);
}

function clearDisplay() {
  const element = document.querySelector('#content');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function mainLayoutCreator() {
  const footerContent = 'The Odin Project 2023 - coded by oguzhan-ulutas ';
  elementCreator('#content', 'div', 'header');
  elementCreator('#content', 'div', 'main-content');
  elementCreator('#content', 'div', 'footer', footerContent);

  // Create header buttons (as divs)
  elementCreator('.header', 'div', 'home-div header-button', 'HOME');
  elementCreator('.header', 'div', 'menu-div header-button', 'MENU');
  elementCreator('.header', 'div', 'about-div header-button', 'ABOUT');
}

// Add event listeners to header buttons

export default function layoutCreator() {
  clearDisplay();
  // Create main layout
  mainLayoutCreator();

  // Create main content greeting
  const welcome = 'WELCOME TO OUR RESTAURANT';
  const greeting = `Our restaurant is great. We have perfect foods and drink. 
    You should come everyday. Thats not enough, you should also 
    bring your family, relatives, and friends. You will never regret.`;
  elementCreator('.main-content', 'div', 'welcome', welcome);
  elementCreator('.main-content', 'div', 'greeting', greeting);
}

export { elementCreator, clearDisplay, mainLayoutCreator };
