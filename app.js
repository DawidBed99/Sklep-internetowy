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
var count2 = 0;

//----------

clearBasket.addEventListener("click", () => {
  var childElements = document.querySelector(".items_container");
  var delChild = childElements.lastChild;
  while (delChild) {
    childElements.removeChild(delChild);
    delChild = childElements.lastChild;
    check = "";
  }
  count = 0;

  number_cont.classList.add("hidden");
});

basket.addEventListener("mouseover", () => {
  itemsBasket.classList.remove("hidden");
});
basket.addEventListener("mouseout", () => {
  itemsBasket.classList.add("hidden");
});
// basket.addEventListener("click", () => {
//   if (itemsBasket.classList.contains("hidden")) {
//     itemsBasket.classList.remove("hidden");
//   }
// });
//----------

//----------
var check = "";
addBasket.forEach((add_to_basket) => {
  add_to_basket.addEventListener("click", function () {
    var check2 = add_to_basket.parentElement.parentElement
      .querySelector(".phone")
      .getAttribute("src");
    if (check2 !== check) {
      count2 = 0;
      count++;
      count2++;
      basketnumber.innerHTML = count;
      number_cont.classList.remove("hidden");

      // console.log("Wybrano inny telefon");

      const item_crea = document.createElement("div");
      item_crea.className = "item_added";
      item_crea.setAttribute("id", count);
      // item_crea.id = count;
      itemsContainer.appendChild(item_crea);
      const smallphone = document.createElement("img");
      smallphone.className = "small_phone";
      const img_src = add_to_basket.parentElement.parentElement
        .querySelector(".phone")
        .getAttribute("src");
      smallphone.setAttribute("src", img_src);
      item_crea.appendChild(smallphone);
      const item_name = document.createElement("p");
      item_name.className = "phone_name";
      item_name.innerHTML =
        add_to_basket.parentElement.parentElement.querySelector(
          ".item_name"
        ).textContent;

      item_crea.appendChild(item_name);
      const item_price = document.createElement("p");
      item_price.className = "phone_price";

      item_price.textContent =
        "Cena: " +
        add_to_basket.parentElement.querySelector(".price_sale").textContent;

      item_crea.appendChild(item_price);

      const item_count = document.createElement("p");
      item_count.className = "item_count";

      item_count.textContent = "Ilość " + count2;

      item_crea.appendChild(item_count);

      //-------
      const bin = document.createElement("img");
      bin.className = "bin_img";
      bin.setAttribute("src", "images/bin.png");
      item_crea.appendChild(bin);
      bin.addEventListener("click", () => {
        const id = bin.parentElement.id;
        console.log(id);
        console.log(bin.parentElement);
        bin.parentElement.remove(id);
        count = count - 1;
        basketnumber.innerHTML = count;
        if (count === 0) {
          number_cont.classList.add("hidden");
        }
      });

      check = check2;
    } else {
      count2++;
      // console.log("wybrano ten sa telefon");
      const itemcount = document.querySelector(".item_count");
      console.log(itemcount);
      itemcount.textContent = "Ilość " + count2;
    }
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
