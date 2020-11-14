const sectionCenter = document.querySelector('.section-center');

function displayMenuItems(itemsToDisplay) {
  const items = itemsToDisplay
    .map(function (item) {
      return `
    <article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article> 
    `;
    })
    .join('');
  sectionCenter.innerHTML = items;
}

export default displayMenuItems;
