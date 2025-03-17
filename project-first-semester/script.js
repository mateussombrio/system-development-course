let cardsData = [
  {
    title: "RTX 4070 Super",
    description: "Placa de vídeo",
    image: "https://m.media-amazon.com/images/I/61PQ0ZfEN+L.jpg",
    price: "$350",
  },
  {
    title: 'LG UltraGear 24"',
    description: "Monitor LG",
    image:
      "https://dabee.com.br/wp-content/uploads/2024/11/Monitor-Gamer-LG-UltraGear-24-e-bom.webp",
    price: "$150",
  },
  {
    title: "Mouse Logitech G403 Hero",
    description: "Mouse Logitech bom",
    image:
      "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/l/o/logitech403-hero.png",
    price: "$50",
  },
  {
    title: "AMD Ryzen 7 5700X3D",
    description: "Processador Ryzen 7",
    image:
      "https://cdn.dooca.store/180/products/ryzen-5700x3d.png?v=1724437372&webp=0",
    price: "$100",
  },
  {
    title: "Motherboard ASRock B550 Pro4",
    description: "ASRock B550 Pro4 placa mae",
    image: "https://www.asrock.com/mb/photo/B550%20Pro4(M1).png",
    price: "$120",
  },
  {
    title: "Kingston Fury Beast, 16GB",
    description: "Memória RAM",
    image:
      "https://www.kingstonstore.com.br/cdn/shop/products/DDR4FBK11_9596bf21-5e69-487b-aa7c-4f1c6450cbd1.jpg?v=1627417974",
    price: "$30",
  },
];

let div_cards = document.querySelector("div_cards");

for (i = 0; i < cardsData.length; i++) {
  const cards = document.createElement("div");
  cards.classList.add("class_cards");

  const img = document.createElement("img");
  img.src = cardsData[i].image;
  img.alt = cardsData[i].title;

  const h3 = document.createElement("h3");
  h3.textContent = cardsData[i].title;

  const price = document.createElement("p");
  price.textContent = cardsData[i].price;

  cards.appendChild(img);
  cards.appendChild(h3);
  cards.appendChild(price);

  div_cards.appendChild(cards);
}
document.body.appendChild(div_cards)
