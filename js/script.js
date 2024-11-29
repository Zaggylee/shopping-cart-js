const BASKET_ITEM = document.getElementById("basket-item");
const SOCKS_ITEM = document.getElementById("socks-item");
const BAG_ITEM = document.getElementById("bag-item");
const BASKET_DEL_BTN = document.getElementById("basket-del-btn");
const SOCKS_DEL_BTN = document.getElementById("socks-del-btn");
const BAG_DEL_BTN = document.getElementById("bag-del-btn");

const TOTAL_PRICE = document.getElementById("total-price");
let totalAmount = 0;
// deleting items
//basket
function basketDelBtn() {
  BASKET_ITEM.remove();
}
BASKET_DEL_BTN.addEventListener("click", basketDelBtn);

//socks
function socksDelBtn() {
  SOCKS_ITEM.remove();
}
SOCKS_DEL_BTN.addEventListener("click", socksDelBtn);

//bag
function bagDelBtn() {
  BAG_ITEM.remove();
}
BAG_DEL_BTN.addEventListener("click", bagDelBtn);

//adjust the quantity of each item through + and -
//basket
const BASKET_ADD = document.getElementById("basket-add");
const BASKET_SUB = document.getElementById("basket-sub");
const BASKET_COUNTER = document.getElementById("basket-counter");

let basketCount = 0;
//for subtraction
function basketSubtraction() {
  if (basketCount < 1) {
    return;
  }
  basketCount = basketCount - 1;
  let basketSellingPrice = 100;
  totalAmount = totalAmount - 1 * basketSellingPrice;
  TOTAL_PRICE.innerText = totalAmount + " " + "$";
  BASKET_COUNTER.innerText = basketCount;
}
BASKET_SUB.addEventListener("click", basketSubtraction);

//for addition
function basketAddition() {
  if (basketCount >= 10) {
    return;
  }
  basketCount = basketCount + 1;
  let basketSellingPrice = 100;
  totalAmount = totalAmount + 1 * basketSellingPrice;
  TOTAL_PRICE.innerText = totalAmount + " " + "$";
  BASKET_COUNTER.innerText = basketCount;
}
BASKET_ADD.addEventListener("click", basketAddition);

//socks
const SOCKS_ADD = document.getElementById("socks-add");
const SOCKS_SUB = document.getElementById("socks-sub");
const SOCKS_COUNTER = document.getElementById("socks-counter");

let socksCount = 0;
//for subtraction
function socksSubtraction() {
  if (socksCount < 1) {
    return;
  }
  socksCount = socksCount - 1;
  let sockSellingPrice = 20;
  totalAmount = totalAmount - 1 * sockSellingPrice;
  TOTAL_PRICE.innerText = totalAmount + " " + "$";
  SOCKS_COUNTER.innerText = socksCount;
}
SOCKS_SUB.addEventListener("click", socksSubtraction);

//for addition
function socksAddition() {
  if (socksCount >= 10) {
    return;
  }

  socksCount = socksCount + 1;
  let sockSellingPrice = 20;
  totalAmount = totalAmount + 1 * sockSellingPrice;
  TOTAL_PRICE.innerText = totalAmount + " " + "$";
  SOCKS_COUNTER.innerText = socksCount;
}
SOCKS_ADD.addEventListener("click", socksAddition);

//bag
const BAG_ADD = document.getElementById("bag-add");
const BAG_SUB = document.getElementById("bag-sub");
const BAG_COUNTER = document.getElementById("bag-counter");

let bagCount = 0;
//for subtraction
function bagSubtraction() {
  if (bagCount < 1) {
    return;
  }
  bagCount = bagCount - 1;
  let bagSellingPrice = 50;
  totalAmount = totalAmount - 1 * bagSellingPrice;
  TOTAL_PRICE.innerText = totalAmount + " " + "$";
  BAG_COUNTER.innerText = bagCount;
}
BAG_SUB.addEventListener("click", bagSubtraction);

//for addition
function bagAddition() {
  if (bagCount >= 10) {
    return;
  }
  bagCount = bagCount + 1;
  let bagSellingPrice = 50;
  totalAmount = totalAmount + 1 * bagSellingPrice;
  TOTAL_PRICE.innerText = totalAmount + " " + "$";
  BAG_COUNTER.innerText = bagCount;
}
BAG_ADD.addEventListener("click", bagAddition);

//for likes

//for basket
const BASKET_LIKE = document.getElementById("basket-like");
BASKET_LIKE.addEventListener("click", function () {
  BASKET_LIKE.style.color = "red";
});

//for socks
const SOCKS_LIKE = document.getElementById("socks-like");
SOCKS_LIKE.addEventListener("click", function () {
  SOCKS_LIKE.style.color = "red";
});

//for bag
const BAG_LIKE = document.getElementById("bag-like");
BAG_LIKE.addEventListener("click", function () {
  BAG_LIKE.style.color = "red";
});
