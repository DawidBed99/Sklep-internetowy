const MENU = document.querySelectorAll(".choice");
const IPHONE = document.querySelectorAll(".iphone");
const HUAWEI = document.querySelectorAll(".Huawei");
const SAMSUNG = document.querySelectorAll(".Samsung");
const container = document.querySelector(".container");
var basketnumber = document.querySelector(".basket_number");
const addBasket = document.querySelectorAll(".add_to_basket");
var count = 0;
addBasket.forEach((add_to_basket) => {
  add_to_basket.addEventListener("click", function () {
    count++;
    console.log(count);
    basketnumber.innerHTML = count;
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
