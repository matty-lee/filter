import { menu } from './app.js';
import displayMenuItems from './displayMenu.js';

// console.log(menu);

const btnContainer = document.querySelector('.btn-container');

function displayButtons() {
  const BtnCategories = menu.reduce(
    function (acc, currItem) {
      if (!acc.includes(currItem.category)) {
        acc.push(currItem.category);
      }
      return acc;
    },
    ['all']
  );

  btnContainer.innerHTML = BtnCategories.map(function (category) {
    return `
    <button class="filter-btn" type="button" data-id="${category}">${category}</button>
    `;
  }).join('');

  btnContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('filter-btn')) {
      const filteredMenu = menu.filter(function (item) {
        if (e.target.dataset.id === 'all') {
          return menu;
        }
        if (item.category === e.target.dataset.id) {
          return item;
        }
      });
      displayMenuItems(filteredMenu);
    }
  });
}

export default displayButtons;
