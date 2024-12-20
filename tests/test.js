"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = __importDefault(require("../class/movie"));
test('create movie', () => {
    const result = new movie_1.default(1, 'Мстители', 2012, 'США', 'Avengers Assemble', ['fantasic', 'action', 'fantasy', 'adventure'], 137);
    expect(result).toEqual({
        id: 1,
        name: 'Мстители',
        year: 2012,
        country: 'США',
        slogan: 'Avengers Assemble',
        jenre: ['fantasic', 'action', 'fantasy', 'adventure'],
        durationMinutes: 137,
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = __importDefault(require("../class/cart"));
test('test create cart', () => {
    const result = new cart_1.default();
    expect(result).toBeInstanceOf(cart_1.default);
    expect(result).toEqual({ _items: [] });
});
test('get cart', () => {
    const cart = new cart_1.default();
    cart.add({
        id: 1,
        name: 'Food',
        price: 200
    });
    expect(cart.items).toEqual([
        { id: 1,
            name: 'Food',
            price: 200 }
    ]);
});
test('calculate without discount', () => {
    const cart = new cart_1.default();
    cart.add({
        id: 1,
        name: 'Food',
        price: 200
    });
    cart.add({
        id: 2,
        name: 'drink',
        price: 100
    });
    const result = cart.calculateWithoutDiscount();
    expect(result).toBe(300);
});
test('calculate with discount', () => {
    const cart = new cart_1.default();
    cart.add({
        id: 1,
        name: 'Food',
        price: 200
    });
    cart.add({
        id: 2,
        name: 'drink',
        price: 100
    });
    const result = cart.calculateWithDiscount(50);
    expect(result).toBe(150);
});
test('delete cart', () => {
    const cart = new cart_1.default();
    cart.add({
        id: 1,
        name: 'Food',
        price: 200
    });
    cart.add({
        id: 2,
        name: 'drink',
        price: 100
    });
    expect(cart.deleteItem(1)).toBeTruthy();
    expect(cart.items).toEqual([
        { id: 2,
            name: 'drink',
            price: 100 }
    ]);
});