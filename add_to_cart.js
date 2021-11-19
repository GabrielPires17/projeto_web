import Cart from './cart.js';
import Book from './book.js';


const add_to_cart_button_list = document.querySelectorAll('.add-to-cart');
const cart = new Cart()

add_to_cart_button_list.forEach((add_to_cart_button, index) => {
    add_to_cart_button.id = index + 1;
    add_to_cart_button.style.cursor = 'pointer';
    add_to_cart_button.addEventListener('click', event => {
        const clicked_button = event.target;
        const element_book_info = getParentRecursive(clicked_button, 'book-info');
        const element_book = getParentRecursive(element_book_info, 'book');
        const book_info_children = element_book_info.childNodes;
        const price_element = findElement(book_info_children, 'SPAN');
        const book_children = element_book.childNodes;
        const name_element = findElement(book_children, 'SPAN');
        const image_element = findElement(book_children, 'IMG');

        const id = clicked_button.id;
        const name = getElementValue(name_element, 'innerHTML');
        const price = getElementValue(price_element, 'innerHTML');
        const img_src = getElementValue(image_element, 'src');

        const book = new Book({ id, name, price, img_src });
        cart.addBook(book);
    })
});

function getParentRecursive(HTMLElement, queryClass) {
    if (HTMLElement.className == queryClass) return HTMLElement;
    return getParentRecursive(HTMLElement.parentNode, queryClass);
}

function findElement(HTMLElementList, queryElement) {
    for (const button_sibling of HTMLElementList) {
        if (button_sibling.nodeName == queryElement) {
            return button_sibling;
        }
    }
}

function getElementValue(HTMLElement, property) {
    return HTMLElement[property];
}