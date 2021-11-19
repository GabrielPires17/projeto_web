import GlobalStyle from './global_style.js';


export default class Book {
    constructor({ id, name, img_src, price }) {
        this.global_style = new GlobalStyle()
        this.id = id;
        this.name = name;
        this.img_src = img_src;
        this.price = price;
    }

    to_html() {
        return this.#get_book_html();
    }

    #get_book_html() {
        const element_book = document.createElement('div');
        this.global_style.bookStyle(element_book);
        this.#append_book_name_html(element_book);
        this.#append_book_img_html(element_book)
        this.#append_book_info_html(element_book);
        return element_book;
    }

    #append_book_info_html(HTMLElement) {
        const element_book_info = document.createElement('div');
        const element_price = document.createElement('span');
        this.global_style.bookInfoStyle(element_book_info);
        this.global_style.bookSpanStyle(element_price);
        element_price.innerText = this.price;
        element_book_info.appendChild(element_price);
        HTMLElement.appendChild(element_book_info);
    }

    #append_book_name_html(HTMLElement) {
        const element_book_name = document.createElement('span');
        this.global_style.bookSpanStyle(element_book_name);
        element_book_name.innerText = this.name;
        HTMLElement.appendChild(element_book_name);
    }

    #append_book_img_html(HTMLElement) {
        const element_book_img = document.createElement('img');
        element_book_img.src = this.img_src;
        this.global_style.bookImgStyle(element_book_img);
        HTMLElement.appendChild(element_book_img);
    }
}