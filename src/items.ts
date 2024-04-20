import ICategory from "./interfaces/ICategory";
const itemsArray: ICategory[] = [
  {
    id: 0,
    name: "Напитки",
    items: [
      {
        id: 0,
        name: "Coca-cola 0,5 л",
        category: "Газированный напиток",
        price: 600,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrUnZM7Pk-xYPVWiurJrbWH1YxUmmK0DxUmznawmNNA&s",
        count: 0,
      },
      {
        id: 1,
        name: "Sprite 0,5 л",
        category: "Газированный напиток",
        price: 600,
        img: "https://w7.pngwing.com/pngs/672/296/png-transparent-fizzy-drinks-sprite-faxe-kondi-cocktail-sprite-food-logo-beer-bottle.png",
        count: 0,
      },
      {
        id: 2,
        name: "Bonaqua 0,5 л",
        category: "Вода",
        price: 500,
        img: "https://www.coca-cola.com/content/dam/onexp/za/en/brand-desktop/BonAqua/bonaqua-still-desktop.png",
        count: 0,
      },
    ],
  },
  {
    id: 1,
    name: "Снеки",
    items: [
      {
        id: 0,
        name: "Snickers",
        category: "Шоколадный батончик",
        price: 550,
        img: "https://c0.klipartz.com/pngpicture/744/83/gratis-png-barra-de-chocolate-se-rien-pastel-mars-twix-snickers.png",
        count: 0,
      },
      {
        id: 1,
        name: "Twix",
        category: "Шоколадный батончик",
        price: 550,
        img: "https://c0.klipartz.com/pngpicture/646/1010/gratis-png-twix-chocolate-bar-mars-leche-leche.png",
        count: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Сэндвичи",
    items: [
      {
        id: 0,
        name: "Клаб-сендвич с ветчиной",
        category: "Клаб-сендвич",
        price: 950,
        img: "https://w7.pngwing.com/pngs/349/485/png-transparent-hamburger-club-sandwich-submarine-sandwich-sandwich-grilled-sandwich-with-vegetables-food-recipe-cheese-sandwich-thumbnail.png",
        count: 0

      },
    ],
  },
  {
    id: 3,
    name: "Комплексные обеды",
    items: [
      {
        id: 0,
        name: 'Мясо "по-французки" с рисом ',
        category: "Второе блюдо",
        price: 1350,
        img: "https://mix-tochka.ru/image/cache/catalog/goryachee/myaso-po-francuzski-400x400.png",
        count: 0

      },
    ],
  },
];

export default itemsArray;
