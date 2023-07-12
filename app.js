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
const added = document.querySelectorAll(".item_added");
const sumPrice = document.querySelector(".price_all2");

//----------------------------------------
//Czyszczenie calego koszyka
function clearingBasket() {
  var childElements = document.querySelector(".items_container");
  var delChild = childElements.lastChild;
  check = "";
  sumPrice.innerHTML = "0zł";
  sum = 0;
  while (delChild) {
    childElements.removeChild(delChild);
    delChild = childElements.lastChild;
  }
  count = 0;
  count2 = 0;
  count3 = 1;
  number_cont.classList.add("hidden");
}
clearBasket.addEventListener("click", () => {
  clearingBasket();
});
//------------------------------------------
//------------------------------------------
//Wyswietlanie koszyka
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
//-------------------------------------

//-------------------------------------
//Obsluga koszyka
var count = 0;
var count2 = 0;
var sum = 0;
var count3 = 1;
var check = "";

function createBasketContainer() {
  const item_crea = document.createElement("div");
  item_crea.className = "item_added";
  item_crea.setAttribute("id", count);
  itemsContainer.appendChild(item_crea);
  return item_crea;
}

function createBasketElementPhoto(img_src) {
  const smallphone = document.createElement("img");
  smallphone.className = "small_phone";
  smallphone.setAttribute("src", img_src);
  return smallphone;
}

addBasket.forEach((add_to_basket) => {
  add_to_basket.addEventListener("click", function () {
    //Obliczanie lacznej ceny -----------------
    var price_amount =
      add_to_basket.parentElement.querySelector(".price_sale").innerHTML;

    sum = sum + parseFloat(price_amount);
    // console.log("Suma " + sum);
    sumPrice.innerHTML = sum + "zł";
    //----------------------------------

    // if (count2 >= 1) {
    //   var childElements2 = document.querySelector(".items_container");
    //   var check_child =
    //     childElements2.lastChild.querySelector(".phone_name").innerHTML;
    //   // console.log(check_child);
    //   var check_child3 = childElements2.lastChild;
    //   console.log("Tutaj   " + check_child3);
    // }

    // var check2 = add_to_basket.parentElement.parentElement
    //   .querySelector(".phone")
    //   .getAttribute("src");

    var check2 =
      add_to_basket.parentElement.parentElement.querySelector(
        ".item_name"
      ).innerHTML;
    // console.log("Check2 " + check2);
    const choosenPhone = document.querySelectorAll(".item_added");
    const choosenPhone3 = document.querySelector(".phone_name");
    const choosenPhone2 =
      add_to_basket.parentElement.parentElement.querySelector(
        ".item_name"
      ).innerHTML;
    if (check2 === check || check2 === choosenPhone3) {
      {
        // const itemcount = document.querySelectorAll(".item_count");

        // itemcount.forEach((item_count) => {
        choosenPhone.forEach((item_added) => {
          console.log(item_added.querySelector(".item_count"));
          // if (
          //   item_added.querySelector(".phone_name").textContent !==
          //   choosenPhone2
          // ) {
          //   count3 = 1;
          // }
          if (
            item_added.querySelector(".phone_name").textContent ===
            choosenPhone2
          ) {
            count3++;
            const ilosc = item_added.querySelector(".item_count");
            ilosc.innerHTML = count3;
          }

          // item_count.textContent = count3;
        });

        // });
        // console.log("count3 " + count3);
        // console.log(document.querySelector(".item_added"));
      }
    } else {
      count3 = 1;
      count2 = 0;
      count2++;
      // console.log("count2 " + count2);
      count++;
      //---------------------------------------------------------------------------------
      //Wsywietlanie czerwonej kropki
      basketnumber.innerHTML = count;
      number_cont.classList.remove("hidden");
      //---------------------------------------------------------------------------------

      //Tworzenie kontenera dla malego elementu dodanego do koszyka
      const item_created = createBasketContainer();
      console.log(item_created);
      //---------------------------------------------------------------------------------
      //Dodawanie zdjecia telefonu

      const img_src = add_to_basket.parentElement.parentElement
        .querySelector(".phone")
        .getAttribute("src");
      const phonePhoto = createBasketElementPhoto(img_src);
      item_created.appendChild(phonePhoto);
      //---------------------------------------------------------------------------------

      //Dodawanie nazwy telefonu
      const item_name = document.createElement("p");
      item_name.className = "phone_name";
      item_name.innerHTML =
        add_to_basket.parentElement.parentElement.querySelector(
          ".item_name"
        ).textContent;

      item_created.appendChild(item_name);
      //Dodawanie ceny telefonu
      const item_price = document.createElement("p");
      item_price.className = "phone_price";
      var pricea =
        add_to_basket.parentElement.querySelector(".price_sale").innerHTML;

      item_price.textContent = "Cena: " + pricea * count2 + "zł";

      item_created.appendChild(item_price);
      //Dodawanie ilosci dodanych telefonow napis
      const item_count_text = document.createElement("p");
      item_count_text.className = "quantity";
      item_count_text.textContent = "Ilość: ";
      item_created.appendChild(item_count_text);
      //Dodawanie ilosci dodanych telefonow liczba
      const item_count = document.createElement("p");
      item_count.className = "item_count";
      item_count.textContent = count2;
      item_created.appendChild(item_count);

      //-------
      //obsluga Przycisku usuwania dodanego elementu
      const bin = document.createElement("img");
      bin.className = "bin_img";
      bin.setAttribute("src", "images/bin.png");
      item_created.appendChild(bin);
      bin.addEventListener("click", () => {
        const id = bin.parentElement.id;
        // console.log(id);
        // console.log(bin.parentElement);
        bin.parentElement.remove(id);
        count = count - 1;
        console.log("Jaki jest count 2  " + count2);
        basketnumber.innerHTML = count;
        const times = bin.parentElement.querySelector(".item_count").innerHTML;
        console.log(sum);
        sum = sum - parseFloat(price_amount) * parseFloat(times);
        console.log(sum);
        sumPrice.innerHTML = sum + "zł";
        console.log(bin.parentElement);
        if (count === 0) {
          number_cont.classList.add("hidden");
        }
        check = "";
      });
      count2 = 0;
      check = check2;
    }
  });
});

//-----------------------------------------------
//Przelacanie miedzy kategoriami
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
