import {
  americano,
  arabic,
  capuccino,
  coffeeWithMilk,
  creamy,
  cuban,
  hawaiian,
  hot,
  ice,
  irish,
  latte,
  macchiato,
  mocaccino,
  traditional,
} from "./Images";

const Coffees = [
  {
    name: "Traditionial Express",
    img: traditional,
    tag: ["traditional"],
    note: "Traditional Coffee made with hot water and ground beans",
    id: 0,
    amount: 9.9,
  },
  {
    name: "American Express",
    img: americano,
    tag: ["traditional"],
    note: "Diluted espresso, less intense than traditional",
    id: 1,
    amount: 9.9,
  },
  {
    name: "Creamy Espresso",
    img: creamy,
    tag: ["traditional"],
    note: "Diluted espresso, less intense than traditional",
    id: 2,
    amount: 9.9,
  },
  {
    name: "Ice",
    img: ice,
    tag: ["traditional", "ice cream"],
    note: "Drink prepared with espresso and ice cubes",
    id: 3,
    amount: 9.9,
  },
  {
    name: "Coffee with milk",
    img: coffeeWithMilk,
    tag: ["traditional", "with milk"],
    note: "Half and half traditional espresso with steamed milk",
    id: 4,
    amount: 9.9,
  },
  {
    name: "Latte",
    img: latte,
    tag: ["traditional", "with milk"],
    note: "A shot of espresso with double the milk and creamy foam",
    id: 5,
    amount: 9.9,
  },
  {
    name: "Cappuccino",
    img: capuccino,
    tag: ["traditional", "with milk"],
    note: "Cinnamon drink made from equal doses of coffee, milk and foam",
    id: 6,
    amount: 9.9,
  },
  {
    name: "Macchiato",
    img: macchiato,
    tag: ["traditional", "with milk"],
    note: "Espresso mixed with some hot milk and froth",
    id: 7,
    amount: 9.9,
  },
  {
    name: "Mocaccino",
    img: mocaccino,
    tag: ["traditional", "with milk"],
    note: "Espresso with chocolate syrup, little milk and foam",
    id: 8,
    amount: 9.9,
  },
  {
    name: "Hot chocolate",
    img: hot,
    tag: ["special", "with milk"],
    note: "Drink made with chocolate dissolved in hot milk and coffee",
    id: 9,
    amount: 9.9,
  },
  {
    name: "Cuban",
    img: cuban,
    tag: ["special", "alcoholic", "ice cream"],
    note: "Iced espresso drink with rum, cream and mint",
    id: 10,
    amount: 9.9,
  },
  {
    name: "Hawaiian",
    img: hawaiian,
    tag: ["special"],
    note: "Sweet drink prepared with coffee and coconut milk",
    id: 11,
    amount: 9.9,
  },
  {
    name: "Arabic",
    img: arabic,
    tag: ["special"],
    note: "Drink prepared with Arabic coffee beans and spices",
    id: 12,
    amount: 9.9,
  },
  {
    name: "Irish",
    img: irish,
    tag: ["special", "alcoholic"],
    note: "Drink made from coffee, Irish whiskey, sugar and whipped cream",
    id: 13,
    amount: 9.9,
  },
];
export default Coffees;