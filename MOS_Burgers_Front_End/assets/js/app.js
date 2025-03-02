let billarea = document.getElementById("bill_area_1");
let total = document.getElementById("price-total");
let ODRVal = "ODR#0001"
document.getElementById("chicken-burger").addEventListener("click", () => {
    billarea.value += "\nChicken Burger : $1.56";
    total.value = (parseFloat(total.value) + 1.56).toFixed(2);
})
document.getElementById("fish-burger").addEventListener("click", () => {
    billarea.value += "\nFish Burger : $1.55";
    total.value = (parseFloat(total.value) + 1.55).toFixed(2);
})
document.getElementById("beef-burger").addEventListener("click", () => {
    billarea.value += "\nBeef Burger : $1.90";
    total.value = (parseFloat(total.value) + 1.90).toFixed(2);
})
document.getElementById("egg-burger").addEventListener("click", () => {
    billarea.value += "\nEgg Burger : $1.30";
    total.value = (parseFloat(total.value) + 1.30).toFixed(2);
})
document.getElementById("ham-burger").addEventListener("click", () => {
    billarea.value += "\nHam Burger : $1.60";
    total.value = (parseFloat(total.value) + 1.60).toFixed(2);
})
document.getElementById("chicken-submarine").addEventListener("click", () => {
    billarea.value += "\nChicken Submarine : $2.00";
    total.value = (parseFloat(total.value) + 2.00).toFixed(2);
})
document.getElementById("fish-submarine").addEventListener("click", () => {
    billarea.value += "\nFish Submarine : $2.00";
    total.value = (parseFloat(total.value) + 2.00).toFixed(2);
})
document.getElementById("egg-submarine").addEventListener("click", () => {
    billarea.value += "\nEgg Submarine : $1.80";
    total.value = (parseFloat(total.value) + 1.80).toFixed(2);
})
document.getElementById("pork-submarine").addEventListener("click", () => {
    billarea.value += "\nPork Submarine : $2.20";
    total.value = (parseFloat(total.value) + 2.20).toFixed(2);
})
document.getElementById("beef-submarine").addEventListener("click", () => {
    billarea.value += "\nBeef Submarine : $2.30";
    total.value = (parseFloat(total.value) + 2.30).toFixed(2);
})
document.getElementById("large-chips").addEventListener("click", () => {
    billarea.value += "\nLarge Chips : $1.88";
    total.value = (parseFloat(total.value) + 1.88).toFixed(2);
})
document.getElementById("small-chips").addEventListener("click", () => {
    billarea.value += "\nSmall Chips : $1.15";
    total.value = (parseFloat(total.value) + 1.15).toFixed(2);
})
document.getElementById("coca-cola").addEventListener("click", () => {
    billarea.value += "\nCoca Cola CAN : $0.25";
    total.value = (parseFloat(total.value) + 0.25).toFixed(2);
})
document.getElementById("fanta").addEventListener("click", () => {
    billarea.value += "\nFanta CAN : $0.47";
    total.value = (parseFloat(total.value) + 0.47).toFixed(2);
})
document.getElementById("pepsi").addEventListener("click", () => {
    billarea.value += "\nPepsi CAN : $1.41";
    total.value = (parseFloat(total.value) + 1.41).toFixed(2);
})
document.getElementById("clear-button").addEventListener("click", () => {
    billarea.value = ODRVal;
    total.value = 0;
})
function filterDropdown() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let dropdown = document.getElementById("dropdown");

    for (let option of dropdown.options) {
        let text = option.text.toLowerCase();
        option.style.display = text.includes(input) ? "" : "none"; // Hide non-matching options
    }
}