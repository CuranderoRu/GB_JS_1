const goodsArray = getGoods();
let cartArray = [];
let cartSum = 0;

function getGoods() {
    return [
        {
            itemId: "01",
            imagePath: "./img/goods/Arduino%20Uno.png",
            title: "Arduino DevBoard",
            description: "Arduino development board with Atmega128 MCU",
            price: 1200,
            currency: "&#8381;"
        },
        {
            itemId: "02",
            imagePath: "./img/goods/arduino-nano-atmega328.jpg",
            title: "Arduino nano",
            description: "Arduino nano development board with Atmega128 MCU",
            price: 700,
            currency: "&#8381;"
        },
        {
            itemId: "03",
            imagePath: "./img/goods/esp32.jpg",
            title: "ESP32 DevBoard",
            description: "ESP32 based development board for IoT DIY projects",
            price: 650,
            currency: "&#8381;"
        },
        {
            itemId: "04",
            imagePath: "./img/goods/esp8266 NodeMCU.jpg",
            title: "ESP8266 DevBoard",
            description: "ESP8266 based development board for IoT DIY projects",
            price: 450,
            currency: "&#8381;"
        },
        {
            itemId: "05",
            imagePath: "./img/goods/raspberry_pi_3_b.jpg",
            title: "Raspberry Pi 3B",
            description: "Raspberry Pi 3B+ board is Linux based low energy consuming computer used for general purposes such as mediacenter, IoT HUB or think client desktop.",
            price: 2900,
            currency: "&#8381;"
        },
        {
            itemId: "06",
            imagePath: "./img/goods/raspberry_pi_zero.jpeg",
            title: "Raspberry Pi Zero",
            description: "Raspberry Pi Zero is a powerful low energy module for IoT projects.",
            price: 1800,
            currency: "&#8381;"
        },
        {
            itemId: "07",
            imagePath: "./img/goods/stm32.jpg",
            title: "STM32 DevBoard",
            description: "STM32 based industrial development board.",
            price: 960,
            currency: "&#8381;"
        },
    ];
}

function onBtnChangeClick(e) {
    let eventData = e.target.id.split('-');
    if (eventData[2] == "remove") {
        let cartItem = document.querySelector("#" + eventData[0] + "-" + eventData[1]);
        cartItem.remove();
        for (let i = 0; i < cartArray.length; i++) {
            if (cartArray[i].itemId == eventData[1]) {
                cartArray.splice(i,1);
                break;
            }
        }

    }
    recalculateCart();
}

function updateCart(cartArrayItem) {
    let cartItemId = "cart_item-" + cartArrayItem.itemId;
    let cartItem = document.querySelector("#" + cartItemId);
    let priceCaption;
    if (cartItem === null) {
        cartItem = document.createElement("div");
        cartItem.id = cartItemId;
        cartItem.classList.add('cart-items-item');
        let itemCaption = document.createElement("div");
        itemCaption.classList.add('cart-items-item-caption');
        itemCaption.textContent = cartArrayItem.title;
        cartItem.append(itemCaption);
        priceCaption = document.createElement("div");
        priceCaption.classList.add('cart-items-item-price');
        priceCaption.innerHTML = cartArrayItem.currency + cartArrayItem.price + ' x ' + cartArrayItem.quantity + ' = ' + cartArrayItem.currency + (cartArrayItem.price * cartArrayItem.quantity);
        cartItem.append(priceCaption);
        let btnRemove = document.createElement("a");
        btnRemove.classList.add('cart-items-item-remove');
        btnRemove.textContent = 'X';
        btnRemove.id = cartItemId + "-remove";
        btnRemove.addEventListener('click', onBtnChangeClick);
        cartItem.append(btnRemove);
        let cart = document.querySelector("#cart");
        cart.append(cartItem);
    } else { //item exists
        let child;
        for (let i = 0; i < cartItem.children.length; i++) {
            child = cartItem.children[i];
            if (child.classList.contains("cart-items-item-price")) {
                child.innerHTML = cartArrayItem.currency + cartArrayItem.price + ' x ' + cartArrayItem.quantity + ' = ' + cartArrayItem.currency + (cartArrayItem.price * cartArrayItem.quantity);
                break;
            }
        }
    }
}

function recalculateCart() {
    cartSum = 0;
    for (var i = 0; i < cartArray.length; i++) {
        cartSum += +(cartArray[i].quantity * cartArray[i].price).toFixed(2);
    }
    cartSum = (+cartSum.toFixed(2));
    let cartHeader = document.querySelector("#cart-header")
    cartHeader.innerHTML = "Корзина (" + "&#8381;" + cartSum + ")";
}


function addToCart(itemIndex) {
    if (itemIndex == -1) return;
    //    goodsArray[itemIndex];
    //    let cartItem = cartArray.find(item => item.itemId == goodsArray[itemIndex].itemId); //not recommended by MDN
    let cartItem = null;
    for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].itemId == goodsArray[itemIndex].itemId) {
            cartItem = cartArray[i];
            break;
        }
    }

    if (cartItem == null) {
        cartItem = cartArray[cartArray.push({
            itemId: goodsArray[itemIndex].itemId,
            title: goodsArray[itemIndex].title,
            price: goodsArray[itemIndex].price,
            currency: goodsArray[itemIndex].currency,
            quantity: 1,
        }) - 1];
    } else {
        cartItem.quantity += 1;
    }

    updateCart(cartItem);
    recalculateCart();
}

function onButtonBuyClick(e) {
    e.preventDefault();
    //    addToCart(goodsArray.findIndex(item => item.itemId == e.target.id.split("-")[1])); //not recommended by MDN
    let idx = -1;
    for (let i = 0; i < goodsArray.length; i++) {
        if (goodsArray[i].itemId == e.target.id.split("-")[1]) {
            idx = i;
            break;
        }
    }
    addToCart(idx);
}

function createItem(itemObj) {
    let fig = document.createElement("figure");
    fig.classList.add("catalog-item");
    let img = document.createElement("img");
    img.src = itemObj.imagePath;
    img.alt = itemObj.title;
    img.width = "150";
    img.height = "150";
    img.classList.add("catalog-item-figure-img");
    fig.append(img);
    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("catalog-item-figcaption");
    let span = document.createElement("span");
    span.classList.add("catalog-item-figcaption-title");
    span.textContent = itemObj.title;
    figcaption.append(span);
    let p = document.createElement("p");
    p.classList.add("catalog-item-figcaption-description");
    p.textContent = itemObj.description;
    figcaption.append(p);
    fig.append(figcaption);
    let price = document.createElement("div");
    price.classList.add("catalog-item-price");
    price.innerHTML = itemObj.currency + itemObj.price;
    fig.append(price);
    let btn = document.createElement("a");
    btn.href = "#";
    btn.classList.add("catalog-item-btn-buy");
    btn.id = "buy-" + itemObj.itemId;
    btn.textContent = "Купить";
    btn.addEventListener('click', onButtonBuyClick)
    fig.append(btn);
    return fig;
}

function init() {
    let fig;
    let items = document.querySelector("#catalog-items");
    for (let i = 0; i < goodsArray.length; i++) {
        fig = createItem(goodsArray[i]);
        items.append(fig);
    }
}
