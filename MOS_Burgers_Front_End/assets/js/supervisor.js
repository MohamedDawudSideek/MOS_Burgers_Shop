function filterDropdown() {
    let input = document.getElementById("searchInputFood").value.toLowerCase();
    let dropdown = document.getElementById("dropdownfood");

    for (let option of dropdown.options) {
        let text = option.text.toLowerCase();
        option.style.display = text.includes(input) ? "" : "none"; // Hide non-matching options
    }
}
function previewImage() {
    let input = document.getElementById("imageInput");
    let preview = document.getElementById("imagePreview");

    let file = input.files[0]; // Get the selected file
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result; // Set image preview
            preview.style.display = "block";
        }
        reader.readAsDataURL(file);
    }
}
function previewImage2() {
    let input = document.getElementById("imageUpdate");
    let preview = document.getElementById("imagePreviewUpdate");

    let file = input.files[0]; // Get the selected file
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result; // Set image preview
            preview.style.display = "block";
        }
        reader.readAsDataURL(file);
    }
}
function updateImage() {
    let dropdown = document.getElementById("dropdownfood");
    let image = document.getElementById("imagePreviewUpdate")
    let selectedValue = dropdown.value;
    //console.log(selectedValue);
    switch (selectedValue) {
        case "Chicken Burger": image.src = "../assets/img/Chicken_Burger.jpeg"; break;

        case "Fish Burger": image.src = "../assets/img/Fish_Burger.jpeg"; break;

        case "Egg Burger": image.src = "../assets/img/Egg_Burger.jpeg"; break;

        case "Beef Burger": image.src = "../assets/img/Beef_Burger.jpeg"; break;

        case "Ham burger": image.src = "../assets/img/Ham_Burger.jpeg"; break;

        case "Large Chips": image.src = "../assets/img/Large_Chips.jpeg"; break;

        case "Small Chips": image.src = "../assets/img/Small_Chips.jpeg"; break;

        case "Chicken Submarine": image.src = "../assets/img/Chicken_Submarine.jpeg"; break;

        case "Fish Submarine": image.src = "../assets/img/Fish_Submarine.png"; break;

        case "Egg Submarine": image.src = "../assets/img/Egg_Submarine.png"; break;

        case "Beef Submarine": image.src = "../assets/img/Beef_Submarine.png"; break;

        case "Pork Submarine": image.src = "../assets/img/Pork_Submarine.png"; break;

        case "Fanta": image.src = "../assets/img/Fanta_Softdrink.png"; break;

        case "Coca Cola": image.src = "../assets/img/CocaCola_Softdrink.jpeg"; break;

        case "Pepsi": image.src = "../assets/img/Pepsi_Softdrink.jpeg"; break;

    }

    // if (selectedValue) {
    //     image.src = selectedValue + ".jpg"; // Change this based on your image filenames
    //     image.style.display = "block";
    // } else {
    //     image.style.display = "none";
    // }
}