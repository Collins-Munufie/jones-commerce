//  A functionn that will create the related products

function createRelatedProduct(product){
// Create the main div
let mainDiv = document.createElement('div');
mainDiv.className = 'p-2 pb-3';

// Create the product card
let productWap = document.createElement('div');
productWap.className = 'product-wap card rounded-0';

// Create the image card
let card = document.createElement('div');
card.className = 'card rounded-0';

// Add image
let img = document.createElement('img');
img.className = 'card-img related-image rounded-0 img-fluid';
img.src = 'assets/img/shop_08.jpg';
card.appendChild(img);

// Create the overlay div
let overlay = document.createElement('div');
overlay.className = 'card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center';

// Create the list inside the overlay
let overlayList = document.createElement('ul');
overlayList.className = 'list-unstyled';

// Create list items with buttons and icons
let icons = ['far fa-heart', 'far fa-eye', 'fas fa-cart-plus'];
icons.forEach(iconClass => {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.className = 'btn btn-warning text-danger mt-2';
    link.href = 'shop-single.html';
    let icon = document.createElement('i');
    icon.className = iconClass;
    link.appendChild(icon);
    listItem.appendChild(link);
    overlayList.appendChild(listItem);
});

overlay.appendChild(overlayList);
card.appendChild(overlay);

// Add the image card to the product card
productWap.appendChild(card);

// Create the card body
let cardBody = document.createElement('div');
cardBody.className = 'card-body';

// Add the product name link
let productLink = document.createElement('a');
productLink.href = 'shop-single.html';
productLink.className = 'h3 text-decoration-none';
productLink.textContent = 'Red Clothing';
cardBody.appendChild(productLink);

// Create the size and color options list
let sizeColorList = document.createElement('ul');
sizeColorList.className = 'w-100 list-unstyled d-flex justify-content-between mb-0';

let sizeListItem = document.createElement('li');
sizeListItem.textContent = 'M/L/X/XL';
sizeColorList.appendChild(sizeListItem);

let colorListItem = document.createElement('li');
colorListItem.className = 'pt-2';

let colors = ['red', 'blue', 'black', 'light', 'green'];
colors.forEach(color => {
    let colorDot = document.createElement('span');
    colorDot.className = `product-color-dot color-dot-${color} float-left rounded-circle ml-1`;
    colorListItem.appendChild(colorDot);
});

sizeColorList.appendChild(colorListItem);
cardBody.appendChild(sizeColorList);

// Create the rating stars list
let ratingList = document.createElement('ul');
ratingList.className = 'list-unstyled d-flex justify-content-center mb-1';

let starListItem = document.createElement('li');
let stars = ['text-warning fa fa-star', 'text-warning fa fa-star', 'text-warning fa fa-star', 'text-warning fa fa-star', 'text-muted fa fa-star'];
stars.forEach(starClass => {
    let starIcon = document.createElement('i');
    starIcon.className = starClass;
    starListItem.appendChild(starIcon);
});

ratingList.appendChild(starListItem);
cardBody.appendChild(ratingList);

// Add the price
let price = document.createElement('p');
price.className = 'text-center mb-0';
price.textContent = '$20.00';
cardBody.appendChild(price);

// Add the card body to the product card
productWap.appendChild(cardBody);

// Add the product card to the main div
mainDiv.appendChild(productWap);


}
export default createRelatedProduct;