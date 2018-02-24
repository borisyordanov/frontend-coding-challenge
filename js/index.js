const brandInput = document.getElementById('brand-input');
const favBrandsContainer = document.getElementById('fav-brands');
const brands = favBrandsContainer.getElementsByClassName('brand');

brandInput.addEventListener('keypress', function(e) {
  // brands is a live node list
  // so it's length will update as new items are added
  if (e.keyCode === 13 && brands.length < 5) {
    // if enter has been pressed in the brand input
    // create a new div, add a class to it
    // insert in the new div the value that is in the input
    // add an event listener for deleting
    const brand = document.createElement('div');
    brand.className = 'brand';
    brand.textContent = brandInput.value;
    brand.addEventListener('click', deleteItem);

    //append the item to the brands container
    favBrandsContainer.appendChild(brand);

    //reset the value of in input
    brandInput.value = '';
  }
});

function deleteItem(e) {
  // deletes the clicked item
  e.target.parentNode.removeChild(e.target);
}
