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
  elementCreator('#content', 'div', 'home-div', 'HOME');
}
