let selection = 0;
function dishSelected(seletor) {
    const element = document.querySelector(".dishes .dish-selected");
    if (element != null) {
        element.classList.remove("dish-selected");
        element.classList.add("dish");
    }
    seletor.classList.remove("dish");
    seletor.classList.add("dish-selected");
    selection++;
    orderCart(selection);
}
function drinkSelected(seletor) {
    const element = document.querySelector(".drinks .dish-selected");
    if (element != null) {
        element.classList.remove("dish-selected");
        element.classList.add("dish");
    }
    seletor.classList.remove("dish");
    seletor.classList.add("dish-selected");
    selection++;
    orderCart(selection);
}
function dessertSelected(seletor) {
    const element = document.querySelector(".desserts .dish-selected");
    if (element != null) {
        element.classList.remove("dish-selected");
        element.classList.add("dish");
    }
    seletor.classList.remove("dish");
    seletor.classList.add("dish-selected");
    selection++;
    orderCart(selection);
}
function orderCart(selection) {
    const element = document.querySelector(".bottom-bar-order");
    if (selection === 3) {
        element.classList.remove("bottom-bar-order-selected");
        element.classList.add("bottom-bar-order-selected");
        element.innerHTML = "Fechar pedido";
    }
}
