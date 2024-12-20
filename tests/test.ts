import Movie from '../class/movie';

test('create movie', () => {
    const result = new Movie(
        1,
        'Мстители',
        2012,
        'США',
        'Avengers Assemble',
        ['fantasic', 'action', 'fantasy', 'adventure'],
        137,
    );

    expect(result).toBeInstanceOf(Movie);
    expect(result).toEqual({
        id: 1,
        name: 'Мстители',
        year: 2012,
        country: 'США',
        slogan: 'Avengers Assemble',
        jenre: ['fantasic', 'action', 'fantasy', 'adventure'],
        durationMinutes: 137, 
    });
})
import Buyable from "../tests/buyable";
import Cart from "../class/cart";

test('test create cart', () => {
    const result = new Cart();

    expect(result).toBeInstanceOf(Cart);
    expect(result).toEqual({_items:[]});
});

test('get cart', () => {
    const cart = new Cart();
    cart.add({
        id: 1, 
        name: 'Food', 
        price: 200
    });
    expect(cart.items).toEqual([
        {id: 1, 
        name: 'Food', 
        price: 200}
    ]);
});

test('calculate without discount', () => {
    const cart = new Cart();
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
    const cart = new Cart();
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
    const cart = new Cart();
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
        {id: 2, 
        name: 'drink', 
        price: 100}
    ]);
});