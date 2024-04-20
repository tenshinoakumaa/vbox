import { makeAutoObservable } from "mobx";
import ICategory from "../interfaces/ICategory";
import IItem from "../interfaces/IItem";
import items from "../items";

class Items {
  items: ICategory[] = [];
  basket: IItem[] = [];
  count: number = 0;
  overallPrice: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    if (this.count >= 1) {
      this.count--;
    }
  }

  addItem(item: IItem) {
    const existingItem = this.basket.find(
      (basketItem) => basketItem.id === item.id
    );
    if (existingItem) {
      this.overallPrice += item.price;
    } else {
      this.basket.push(item);
      this.overallPrice += item.price;
    }
  }

  removeItem(item: IItem) {
    const index = this.basket.findIndex(
      (basketItem) => basketItem.id === item.id
    );
    if (index !== -1) {
      const basketItem = this.basket[index];
      if (basketItem.count <= 1) {
        this.basket.splice(index, 1);
      }
      this.overallPrice -= item.price;
    }
  }

  loadItems() {
    this.items = items;
  }

  increment(item: IItem) {
    item.count++;
  }

  decrement(item: IItem) {
    if (item.count >= 1) item.count--;
  }
}

const store = new Items();
export default store;
