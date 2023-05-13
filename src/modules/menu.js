import { elementCreator, clearDisplay, mainLayoutCreator } from './layout';
import pancake from '../img/food2-chad-montano-eeqbbemH9-c-unsplash.jpg';
import grilledKebab from '../img/food1-victoria-shes-UC0HZdUitWY-unsplash.jpg';
import Salad from '../img/food3-eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg';

function foodContainerCreator(foodName, foodImage, foodDescription, foodPrize) {
  elementCreator('.main-content', 'div', `${foodName}`); // Create Main food container
  elementCreator(`.${foodName}`, 'img', `${foodName}-img`, `${foodImage}`); // Add food image
  elementCreator(`.${foodName}`, 'div', `${foodName}-name`, `${foodName}`); // Add food name
  elementCreator(`.${foodName}`, 'div', `${foodName}-description`, foodDescription); // Add food description
  elementCreator(`.${foodName}`, 'div', `${foodName}-prize`, foodPrize); // Add food prize
}

// I will use same describtion for every food for now.
const foodDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet';

export default function menuPageCreator() {
  clearDisplay();
  mainLayoutCreator();
  // Create menu header
  elementCreator('.main-content', 'div', 'menu-header', 'MENU');
  foodContainerCreator('grilled-kebab', grilledKebab, foodDescription, '45$');
  foodContainerCreator('salad', Salad, foodDescription, '35$');
  foodContainerCreator('pancake', pancake, foodDescription, '20$');
}
