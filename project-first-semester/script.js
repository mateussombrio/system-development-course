// DataBase
let cardsData = [
  {
    title: "RTX 4070 Super",
    description: "Placa de vídeo",
    image: "https://github.com/mateussombrio/system-development-course/blob/main/project-first-semester/assets/images/rtx-4070-super.png",
    price: "$ 350",
  },
  {
    title: 'LG UltraGear 24"',
    description: "Monitor LG",
    image:
      "https://dabee.com.br/wp-content/uploads/2024/11/Monitor-Gamer-LG-UltraGear-24-e-bom.webp",
    price: "$ 150",
  },
  {
    title: "Mouse Logitech G403 Hero",
    description: "Mouse Logitech bom",
    image:
      "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/l/o/logitech403-hero.png",
    price: "$ 50",
  },
  {
    title: "AMD Ryzen 7 5700X3D",
    description: "Processador Ryzen 7",
    image:
      "https://cdn.dooca.store/180/products/ryzen-5700x3d.png?v=1724437372&webp=0",
    price: "$ 100",
  },
  {
    title: "Motherboard ASRock B550 Pro4",
    description: "ASRock B550 Pro4 placa mae",
    image: "https://www.asrock.com/mb/photo/B550%20Pro4(M1).png",
    price: "$ 120",
  },
  {
    title: "Kingston Fury Beast, 16GB",
    description: "Memória RAM",
    image:
      "https://www.kingstonstore.com.br/cdn/shop/products/DDR4FBK11_9596bf21-5e69-487b-aa7c-4f1c6450cbd1.jpg?v=1627417974",
    price: "$ 30",
  },
];


// Creating Cards
let div_cards = document.querySelector(".div_cards");

for (i = 0; i < cardsData.length; i++) {
  const cards = document.createElement("div");
  cards.classList.add("class_cards");
// Div img and img element
  const div_img_card = document.createElement('div')
  div_img_card.classList.add('class_div_img_card')
  const img = document.createElement("img");
  img.classList.add("img_cards");
  img.src = cardsData[i].image;
  img.alt = cardsData[i].title;
// H3 element
  const h3 = document.createElement("h3");
  h3.textContent = cardsData[i].title;
// Price element
  const price = document.createElement("p");
  price.textContent = cardsData[i].price;

  const buttom_card = document.createElement("button");
  buttom_card.textContent = "Buy Now";

  cards.appendChild(div_img_card)
  div_img_card.appendChild(img)
  cards.appendChild(h3);
  cards.appendChild(price);
  cards.appendChild(buttom_card);   

  div_cards.appendChild(cards);
}
