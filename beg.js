let cart = [];
let price = 0;

function updateCart() {
  const delivery = 60;
  let discount = price > 5000 ? price * 0.1 : 0;
  let total = price + delivery - discount;

  document.getElementById('cart-items').innerText = `Items: ${cart.length}`;
  document.getElementById('cart-price').innerText = `Total: ৳${price}`;
  document.getElementById('discount').innerText = `Discount: ৳${discount.toFixed(0)}`;
  document.getElementById('total-payable').innerText = `Payable: ৳${total.toFixed(0)}`;
}

function addToCart(priceValue) {
  cart.push(priceValue);
  price += priceValue;
  updateCart();
}

fetch('https://fakestoreapi.com/products?limit=6')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");
    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded shadow-md";
      div.innerHTML = `
        <img src="${item.image}" class="h-40 mx-auto" />
        <h3 class="text-sm font-bold mt-2">${item.title.slice(0, 30)}...</h3>
        <p class="text-green-600 font-semibold">৳${item.price * 100}</p>
        <button class="bg-blue-500 text-white px-3 py-1 mt-2 rounded" onclick="addToCart(${item.price * 100})">Add to Cart</button>
      `;
      container.appendChild(div);
    });
  });


let slideIndex = 0;
setInterval(() => {
  slideIndex = (slideIndex + 1) % 3;
  document.getElementById('slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}, 3000);
