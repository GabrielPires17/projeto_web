import {
    add_cookie,
    list_cookie,
    remove_cookie,
} from './cookie.js';

import Book from './book.js';


export default class Cart {
    #loadBookList() {
        const book_list_from_cookies = list_cookie();
        if (book_list_from_cookies)
            book_list_from_cookies
                .forEach(book_item => {
                    const values_list = book_item.value.split('&&');
                    const new_book = new Book({
                        id: book_item.key,
                        name: values_list[0],
                        img_src: values_list[1],
                        price: values_list[2],
                    });
                    this.book_list.push(new_book);
                });
    }

    constructor() {
        this.book_list = [];
        this.#loadBookList()
    }

    addBook(book) {
        this.book_list.push(book);
        add_cookie(book.id, `${book.name}&&${book.img_src}&&${book.price}`);
    }

    removeBook(book_id) {
        const book_index = this.book_list
            .indexOf(book => book.id == book_id);
        this.book_list.splice(book_index, 1);
        remove_cookie(book_id);
    }

    getBook(book_id) {
        if (this.book_list) return this.book_list.find(book => book.id == book_id);
        this.#loadBookList();
        return this.getBook(book_id);
    }

    getBookList() {
        if (this.book_list) return this.book_list;
        this.#loadBookList();
        return this.getBookList();
    }
}