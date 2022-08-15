let dish = false;
let drink = false;
let dessert = false;
let mensagem;
function dishSelected(seletor) {
    const element = document.querySelector(".dishes .dish-selected");
    if (element != null) {
        element.classList.remove("dish-selected");
        element.classList.add("dish");
    }
    seletor.classList.remove("dish");
    seletor.classList.add("dish-selected");
    const element2 = document.querySelector(".dish-selected .dish-name");
    mensagem +=
        dish = true;
    orderCart(dish, drink, dessert);
}
function drinkSelected(seletor) {
    const element = document.querySelector(".drinks .dish-selected");
    if (element != null) {
        element.classList.remove("dish-selected");
        element.classList.add("dish");
    }
    seletor.classList.remove("dish");
    seletor.classList.add("dish-selected");
    drink = true;
    orderCart(dish, drink, dessert);
}
function dessertSelected(seletor) {
    const element = document.querySelector(".desserts .dish-selected");
    if (element != null) {
        element.classList.remove("dish-selected");
        element.classList.add("dish");
    }
    seletor.classList.remove("dish");
    seletor.classList.add("dish-selected");
    dessert = true;
    orderCart(dish, drink, dessert);
}
function orderCart(dish, drink, dessert) {
    const element = document.querySelector(".escondido");
    const element2 = document.querySelector(".bottom-bar-order");
    if (dish && drink && dessert) {
        element.classList.remove("escondido");
        element2.classList.remove("bottom-bar-order-selected");
        element2.classList.add("bottom-bar-order-selected");
        element.innerHTML = "Fechar Pedido";
    }
}
