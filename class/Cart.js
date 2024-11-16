"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    get items() {
        return [...this._items];
    }
    calculateWithoutDiscount() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
    calculateWithDiscount(discount) {
        return this._items.reduce((total, item) => total + (item.price * (discount / 100)), 0);
    }
    deleteItem(id) {
        return (this._items = this._items.filter(item => item.id !== id));
    }
}
exports.default = Cart;