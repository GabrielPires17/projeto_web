export function add_cookie(key, value) {
    document.cookie = `${key}=${value};`
}

export function read_cookie(key) {
    if (!document.cookie) return [];
    return document.cookie
        .split(';')
        .filter(cookie_item => cookie_item.split('=')[0] == key)[0]
        .split('=')[1]
}

export function list_cookie() {
    const cookie_content_list = document.cookie
        .split(';')
        .map(cookie_item => {
            const [key, value] = cookie_item.split('=');
            return (key && value) && { key, value };
        });
    return cookie_content_list[0] && cookie_content_list;
}

export function remove_cookie(key) {
    let yesterday = new Date()
    yesterday
        .setTime((current_date.getUTCDate() - 1) * 24 * 60 * 60 * 1000);
    document.cookie = `${key}=""; expires=${yesterday};`
}