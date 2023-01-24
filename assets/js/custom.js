// TABLE OF CONTENTS

//


// Shop

const products_row = document.querySelector('.products-row')
let productsUrl = "https://dummyjson.com/products";
const categories = document.querySelectorAll('.cat')
const nextButtons = document.querySelectorAll('.next')

categories.forEach(button => {
    if (button.textContent.includes('All')) {
        button.addEventListener('click', function () {
           products_row.innerHTML = "";
           productsUrl = "https://dummyjson.com/products";
           getProducts();         
        });
        nextButtons.forEach(nextBtn => {
            if (nextBtn.textContent.includes('2')) {
                nextBtn.addEventListener('click', function () {
                    nextOne();
                })
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

async function getProducts() {
    
    const req = await fetch(productsUrl);
    const res = await req.json();
    const products = res.products;
    console.log(products)
    products.forEach(product => {
        console.log(product.title);
        if (
          !(
            product.title === "Handcraft Chinese style" ||
            product.title === "cereals muesli fruit nuts"
          )
        ) {
          products_row.innerHTML += `
        <div class="col-md-4">
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src="${product.thumbnail}">
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="shop-single.html" class="h3 text-decoration-none">${product.title}</a>
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li>Brand: ${product.brand}</li>
                                    <li class="pt-2">
                                        <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p class="text-center mb-0">$${product.price}</p>
                            </div>
                        </div>
                    </div>
        `;
        }
    });
}
getProducts();
tops()

async function moreProducts() {
  const req = await fetch(productsUrl);
  const res = await req.json();
  const products = res.products;
  console.log(products);
  products.forEach((product) => {
    console.log(product.title);
      products_row.innerHTML += `
        <div class="col-md-4">
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src="${product.thumbnail}">
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="shop-single.html" class="h3 text-decoration-none">${product.title}</a>
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li>Brand: ${product.brand}</li>
                                    <li class="pt-2">
                                        <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul>
                                <ul class="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <p class="text-center mb-0">$${product.price}</p>
                            </div>
                        </div>
                    </div>
        `; 
  });
}
function menShirt() {
    productsUrl = "https://dummyjson.com/products/category/mens-shirts";
    moreProducts();
}
function menWatches() {
    productsUrl = "https://dummyjson.com/products/category/mens-watches";
    moreProducts();
}
function womenShoes() {
    productsUrl = "https://dummyjson.com/products/category/womens-shoes";
    moreProducts();
}
function womenWatches() {
    productsUrl = "https://dummyjson.com/products/category/womens-watches";
    moreProducts();
}
function womenBags() {
    productsUrl = "https://dummyjson.com/products/category/womens-bags";
    moreProducts();
}
function womenJewelly() {
    productsUrl = "https://dummyjson.com/products/category/womens-jewellery";
    moreProducts();
}
function tops() {
    productsUrl = "https://dummyjson.com/products/category/tops";
    moreProducts();
}
function homeDecor() {
    productsUrl = "https://dummyjson.com/products/category/home-decoration";
    moreProducts();
}
function nextOne() {
    products_row.textContent = ''
    productsUrl = "https://dummyjson.com/products/category/groceries";
    moreProducts();
    homeDecor();
}
function nextTwo() {
    productsUrl = "https://dummyjson.com/products/category/tops";
    moreProducts();
}
function nextThree() {
    productsUrl = "https://dummyjson.com/products/category/tops";
    moreProducts();
}