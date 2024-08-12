// TABLE OF CONTENTS



// Shop
const products_row = document.querySelector('.products-row')
let productsUrl = "https://dummyjson.com/products";
const categories = document.querySelectorAll('.cat')
const nextButtons = document.querySelectorAll('.next')
const categoryGroups = document.querySelectorAll(".categories-product");
const sizeBtn = document.querySelectorAll(".btn-size");
const searchButton = document.querySelector('.fa-search')


sizeBtn.forEach(size => {
    size.addEventListener('click', function () {
        size.style.backgroundColor = "#333d4a";
        size.style.border = 'none'
        
    })
})

categories.forEach(button => {
    if (button.textContent.includes('All')) {
        button.addEventListener('click', function () {
           products_row.innerHTML = "";
           productsUrl = "https://dummyjson.com/products/?Limit=0";
           getProducts();         
        });
        nextButtons.forEach(nextBtn => {
            if (nextBtn.textContent.includes('2')) {
                nextBtn.addEventListener('click', function () {
                    nextBtn.style.backgroundColor = 'yellow';
                    nextButtons[0].style.backgroundColor = 'white'
                    nextButtons[2].style.backgroundColor = 'white'
                    nextOne();
                });
            } else if (nextBtn.textContent.includes('3')) {
                nextBtn.addEventListener("click", function () {
                  nextBtn.style.backgroundColor = "yellow";
                  nextButtons[0].style.backgroundColor = "white";
                  nextButtons[1].style.backgroundColor = "white";
                  nextTwo();
                });
            } else if (nextBtn.textContent.includes('1')) {
                nextBtn.addEventListener("click", function () {
                  nextBtn.style.backgroundColor = "yellow";
                  nextButtons[1].style.backgroundColor = "white";
                    nextButtons[2].style.backgroundColor = "white";
                    products_row.innerHTML = '';
                    productsUrl = "https://dummyjson.com/products";
                    getProducts();
                    tops();
                });
            }
        })
    } else if (button.textContent.includes("Men's")) {
        button.addEventListener('click', function () {
            products_row.innerHTML = "";
            productsUrl = "https://dummyjson.com/products/category/mens-shoes";
            getProducts();
            menShirt();
            menWatches();
        })
    } else if (button.textContent.includes("Women's")) {
        button.addEventListener('click', function () {
            products_row.innerHTML = "";
            productsUrl =
              "https://dummyjson.com/products/category/womens-dresses";
            getProducts();
            womenShoes();
            womenWatches();
            womenBags();
            womenJewelly();
        })
    }
});

categoryGroups.forEach(itemGroup => {
    if (itemGroup.textContent.includes("Furnitures")) {
        itemGroup.addEventListener("click", function () {
        products_row.textContent = "";
        furniture();
      });
    } else if (itemGroup.textContent.includes("Skincare")) {
      itemGroup.addEventListener("click", function () {
        products_row.textContent = "";
        skincare();
      });
    } else if (itemGroup.textContent.includes("Sunglasses")) {
      itemGroup.addEventListener("click", function () {
        products_row.textContent = "";
        sunglasses();
      });
    } else if (itemGroup.textContent.includes("Lighting")) {
      itemGroup.addEventListener("click", function () {
        products_row.textContent = "";
        lighting();
      });
    } else if (itemGroup.textContent.includes("Automotive")) {
      itemGroup.addEventListener("click", function () {
        products_row.textContent = "";
        automotive();
      });
    } else if (itemGroup.textContent.includes("Smartphones and Laptops")) {
      itemGroup.addEventListener("click", function () {
        products_row.textContent = "";
          laptops();
          smartphones();
      });
    }
})

// A function that will create the products

function createProducts(product) {
  // Create a column for the product
  let col_Div = document.createElement("div");
  col_Div.classList.add("col-md-4");
  // create a wrapper card for the products
  let wrapper_Card = document.createElement("div");
  wrapper_Card.classList.add("card", "mb-4", "product-wap", "rounded-0");
  // Create the product card itself
  let product_Card = document.createElement("div");
  product_Card.classList.add("card", "rounded-0");
  // Product Image
  let product_Image = document.createElement("img");
  product_Image.classList.add("card-img", "rounded-0", "img-fluid");
  product_Image.style.height = "200px";
    product_Image.src = product.thumbnail;
  // Add image to the card
  product_Card.appendChild(product_Image);
  // Create the overlay div
  let overlay_Div = document.createElement("div");
  overlay_Div.classList.add(
    "card-img-overlay",
    "rounded-0",
    "product-overlay",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  // Create the ul tag
  let ul = document.createElement("ul");
  ul.classList.add("list-unstyled");
  // Create the li items
  let icons = ['far fa-heart', 'far fa-eye', 'fas fa-cart-plus'];
  icons.forEach(iconClass => {
    let list = document.createElement("li");
    let link = document.createElement("a");
    link.classList.add("btn", "btn-warning", "text-danger");
    link.href = ` /shop-single.html?image=${product.thumbnail}&title=${product.title}&brand=${product.brand}&description=${product.description}&rating=${product.rating}&price=${product.price}&category=${product.category}&stock=${product.stock}`;
    // Create the icon inside the a tag
  let heart = document.createElement("i");
  heart.className = iconClass;
  link.appendChild(heart);
  list.appendChild(link);
  ul.appendChild(list)
  })
  // Append the respective elements to their parents
    overlay_Div.appendChild(ul);
    product_Card.appendChild(overlay_Div);
    wrapper_Card.appendChild(product_Card);

    // Create the card body that will describe the product

    let card_Body = document.createElement("div");
    card_Body.classList.add("card-body");
    // Create the title anchor
    let title_Anchor = document.createElement("a");
    title_Anchor.classList.add("h3", "text-decoration-none");
    title_Anchor.href =` /shop-single.html?image=${product.thumbnail}&title=${product.title}&brand=${product.brand}&description=${product.description}&rating=${product.rating}&price=${product.price}&category=${product.category}&stock=${product.stock}`;
    title_Anchor.innerText = product.title;
    card_Body.appendChild(title_Anchor);

    // // Create a ul for the brand and the product color
    let ul_2 = document.createElement("ul");
    ul_2.classList.add("list-unstyled", "justify-content-between", "d-flex", "mb-0", "w-100")
    let brand_Li = document.createElement("li");
    brand_Li.innerText = "Brand: " + product.brand;
    let color_Li = document.createElement("li");
    color_Li.classList.add("pt-2");
    let span_1 = document.createElement("span");
    span_1.classList.add(
      "product-color-dot", "color-dot-red", "float-left", "rounded-circle", "ms-1"
    );
    let span_2 = document.createElement("span");
    span_2.classList.add(
      "product-color-dot", "color-dot-blue", "float-left", "rounded-circle", "ms-1"
    );
    let span_3 = document.createElement("span");
    span_3.classList.add(
      "product-color-dot", "color-dot-black", "float-left", "rounded-circle", "ms-1"
    );
    let span_4 = document.createElement("span");
    span_4.classList.add(
      "product-color-dot", "color-dot-light", "float-left", "rounded-circle", "ms-1"
    );
    let span_5 = document.createElement("span");
    span_5.classList.add(
      "product-color-dot", "color-dot-green", "float-left", "rounded-circle", "ms-1"
    );

    // Append all the spans to the li and the li to the ul
    color_Li.appendChild(span_1)
    color_Li.appendChild(span_2)
    color_Li.appendChild(span_3)
    color_Li.appendChild(span_4)
    color_Li.appendChild(span_5)
    ul_2.appendChild(color_Li);

    // Create a ul for the stars
    let stars_Ul = document.createElement("ul")
    stars_Ul.classList.add("list-unstyled", "d-flex", "justify-content-center", "mb-1");
    let stars_Li = document.createElement("li");
    let star_1 = document.createElement("i");
    star_1.classList.add("text-warning", "fa", "fa-star");
    let star_2 = document.createElement("i");
    star_2.classList.add("text-warning", "fa", "fa-star");
    let star_3 = document.createElement("i");
    star_3.classList.add("text-warning", "fa", "fa-star");
    let star_4 = document.createElement("i");
    star_4.classList.add("text-warning", "fa", "fa-star");
    let star_5 = document.createElement("i");
    star_5.classList.add("text-warning", "fa", "fa-star");

    // Append the stars to the li and the li to the ul
    stars_Li.appendChild(star_1);
    stars_Li.appendChild(star_2);
    stars_Li.appendChild(star_3);
    stars_Li.appendChild(star_4);
    stars_Li.appendChild(star_5);
    stars_Ul.appendChild(stars_Li);

    // Append all the ul's to the card body
    card_Body.appendChild(ul_2);
    card_Body.appendChild(stars_Ul);

    // Create a p tag for the price and append it to the card body
    let price = document.createElement("p");
    price.classList.add("text-center", "mb-0");
    price.innerText = "$" + product.price;
    card_Body.appendChild(price);

    // Append the card body to the car wrapper 
    wrapper_Card.appendChild(card_Body);
    col_Div.appendChild(wrapper_Card);
    products_row.appendChild(col_Div)
}

async function getProducts() {
  // Check if products data are already cached in the localStarage
  let results = JSON.parse(localStorage.getItem(productsUrl));
  if (results) {
    // Use the cached data
     const products = results.products;
     console.log(products);
     products.forEach((product) => {
       console.log(product.title);
         createProducts(product);
     });
  } else {
    // Fetch data from the api
    const req = await fetch(productsUrl);
    results = await req.json();
    localStorage.setItem(productsUrl, JSON.stringify(results));
    const products = results.products;
    products.forEach((product) => {
        createProducts(product);
    })
  }
    
}
getProducts();
tops()


function urlFunction(category) {
    productsUrl = `https://dummyjson.com/products/category/${category}`;
}
function menShirt() {
    urlFunction("mens-shirts")
   getProducts();
}
function menWatches() {
   urlFunction("mens-watches");
   getProducts();
}
function womenShoes() {
    urlFunction("womens-shoes");
   getProducts();
}
function womenWatches() {
    urlFunction("womens-watches");
   getProducts();
}
function womenBags() {
    urlFunction("womens-bags");
   getProducts();
}
function womenJewelly() {
   urlFunction("womens-jewellery");
   getProducts();
}
function tops() {
   urlFunction("tops");
   getProducts();
}
function automotive() {
    urlFunction("automotive");
   getProducts();
}
function nextOne() {
    products_row.textContent = '';
   urlFunction("motorcycle");
   getProducts();
    automotive();
    lighting();
}
function nextTwo() {
    products_row.innerHTML = '';
    urlFunction("sunglasses");
   getProducts();
    furniture();
}
function furniture() {
    urlFunction("furniture");
   getProducts();
}
function lighting() {
   urlFunction("lighting");
   getProducts();
}
function smartphones() {
    urlFunction("smartphones");
   getProducts();
}
function laptops() {
    urlFunction("laptops");
   getProducts();
}
function skincare() {
   urlFunction("skincare");
   getProducts();
}
function sunglasses() {
   urlFunction("sunglasses");
   getProducts();
   
}



function onmouseOver() {
  backgroundColor = "yellow";
}

// SHOP SINGLE
const details_Image = document.getElementById("product-detail");
const carousel_Image = document.querySelectorAll(".carouse-image");
const product_Title = document.getElementById("product-title")
const product_Price = document.getElementById("product-price")
const product_Rating = document.getElementById("product-rating")
const product_Brand = document.getElementById("product-brand");
const product_Description = document.getElementById("product-description");

var parameters = new URLSearchParams(window.location.search);
var image_Src = parameters.get("image");
var title_Param = parameters.get("title");
var price_Param = parameters.get("price");
var rating_Param = parameters.get("rating");
var brand_Param = parameters.get("brand");
var description_Param = parameters.get("description");

details_Image.src = image_Src;

carousel_Image.forEach(image => {
    image.src = image_Src;
})
product_Title.innerText = title_Param;
product_Price.innerText = "$" + price_Param;
product_Rating.innerText = "Rating " + rating_Param + "| 36 comments";
product_Brand.innerText = brand_Param;
product_Description.innerText = description_Param;

// The Searching Functionality


  document.addEventListener('DOMContentLoaded', ()=>{
    const input_search = document.getElementById("inputMobileSearch")
    input_search.addEventListener('keypress', async (event) =>{
      if(event.key === "Enter"){
        alert("Hello")
      }
      
    })
  })
  
