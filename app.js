const MENU = document.querySelectorAll(".choice");
const IPHONE = document.querySelectorAll("#iphone");
const HUAWEI = document.querySelectorAll("#Huawei");
const SAMSUNG = document.querySelectorAll("#Samsung");
const container = document.querySelector(".container");
var basketnumber = document.querySelector(".basket_number");
const addBasket = document.querySelectorAll(".add_to_basket");
const number_cont = document.querySelector(".number_cont");
const basket = document.querySelector(".basket");
const itemsBasket = document.querySelector(".itemsinbasket");
const clearBasket = document.querySelector(".clear_text");
const itemsContainer = document.querySelector(".items_container");
const products = document.querySelectorAll(".mphone");
const image = document.querySelectorAll(".phone");
var count = 0;

//----------

clearBasket.addEventListener("click", () => {
  var childElements = document.querySelector(".items_container");
  var delChild = childElements.lastChild;
  while (delChild) {
    childElements.removeChild(delChild);
    delChild = childElements.lastChild;
  }
  count = 0;

  number_cont.classList.add("hidden");
});

// basket.addEventListener("mouseover", () => {
//   itemsBasket.classList.remove("hidden");
// });
// basket.addEventListener("mouseout", () => {
//   itemsBasket.classList.add("hidden");
// });
basket.addEventListener("click", () => {
  if (itemsBasket.classList.contains("hidden")) {
    itemsBasket.classList.remove("hidden");
  } else {
    itemsBasket.classList.add("hidden");
  }
});

addBasket.forEach((add_to_basket) => {
  add_to_basket.addEventListener("click", function () {
    count++;
    basketnumber.innerHTML = count;
    number_cont.classList.remove("hidden");
    var item_crea = document.createElement("div");
    item_crea.className = "item_added";
    itemsContainer.appendChild(item_crea);
    var smallphone = document.createElement("img");
    smallphone.className = "small_phone";
    var img_src = add_to_basket.parentElement.parentElement
      .querySelector(".phone")
      .getAttribute("src");
    smallphone.setAttribute("src", img_src);
    item_crea.appendChild(smallphone);
    var item_name = document.createElement("p");
    item_name.className = "phone_name";
    item_name.innerHTML =
      add_to_basket.parentElement.parentElement.querySelector(
        ".item_name"
      ).textContent;

    item_crea.appendChild(item_name);
    var item_price = document.createElement("p");
    item_price.className = "phone_price";

    item_price.textContent =
      "Cena: " +
      add_to_basket.parentElement.querySelector(".price_sale").textContent;

    item_crea.appendChild(item_price);
  });
});

MENU.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    MENU.forEach((choice) => choice.classList.remove("active"));
    e.target.classList.add("active");
    if (e.target.innerText === "Samsung") {
      SAMSUNG.forEach((Samsung) => {
        Samsung.classList.remove("hidden");
      });
      IPHONE.forEach((iphone) => {
        iphone.classList.add("hidden");
      });
      HUAWEI.forEach((Huawei) => {
        Huawei.classList.add("hidden");
      });
    } else if (e.target.innerText === "Iphone") {
      IPHONE.forEach((iphone) => {
        iphone.classList.remove("hidden");
      });
      SAMSUNG.forEach((Samsung) => {
        Samsung.classList.add("hidden");
      });
      HUAWEI.forEach((Huawei) => {
        Huawei.classList.add("hidden");
      });
    } else if (e.target.innerText === "Huawei") {
      HUAWEI.forEach((Huawei) => {
        Huawei.classList.remove("hidden");
      });

      SAMSUNG.forEach((Samsung) => {
        Samsung.classList.add("hidden");
      });
      IPHONE.forEach((iphone) => {
        iphone.classList.add("hidden");
      });
    } else {
      SAMSUNG.forEach((Samsung) => {
        Samsung.classList.remove("hidden");
      });
      IPHONE.forEach((iphone) => {
        iphone.classList.remove("hidden");
      });
      HUAWEI.forEach((Huawei) => {
        Huawei.classList.remove("hidden");
      });
    }
  });
});
