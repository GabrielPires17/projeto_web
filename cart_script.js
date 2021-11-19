import Cart from './cart.js';


const cart = new Cart()

const body = document.getElementsByTagName('body')[0];

cart.getBookList().forEach(book => {
    body.appendChild(book.to_html());
});
