function get_scroll_top(page_number) {
    return document
        .querySelector(`.page${page_number}`)
        .offsetTop;
}

function set_scroll_to_target_element(scroll_y) {
    window.scrollTo({ top: scroll_y, behavior: 'smooth' })
}

const menu_item_list = document.querySelectorAll('.option');

menu_item_list.forEach(menu_item => {
    menu_item.addEventListener('click', event => {
        const element = event.target.nodeName == 'A' ?
            event.target :
            event.target.parentElement;
        const page_number = Number.parseInt(element.id) + 1;
        set_scroll_to_target_element(get_scroll_top(page_number));
    });
});