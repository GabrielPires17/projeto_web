export default class GlobalStyle {
    bookStyle(div_card) {
        div_card.style.display = "flex";
        div_card.style.flexDirection = "column";
        div_card.style.alignItems = "center";
        div_card.style.marginBottom = "3vh";
    }

    bookInfoStyle(div_card) {
        div_card.style.display = "flex";
        div_card.style.width = "100%";
        div_card.style.marginTop = "1vh";
        div_card.style.flexDirection = "row";
        div_card.style.alignItems = "center";
        div_card.style.justifyContent = "space-evenly";
    }

    bookSpanStyle(div_card) {
        div_card.style.fontSize = "16pt";
    }

    bookImgStyle(div_card) {
        div_card.style.width = "10vw";
        div_card.style.height = "30vh";
    }

    bookIconAddToCart(div_card) {
        div_card.style.color = "#333";
        div_card.classList.add("fa");
        div_card.classList.add("fa-shopping-bag");
        div_card.classList.add("fa-2x");
    }
}
