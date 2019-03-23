console.log("the house always wins")

let id = document.getElementById("idInput");
let color = document.getElementById("colorInput");

console.log(id);
console.log(color);

let setCard = () => {
    const card = document.getElementById(id.value)
    console.log(card)
    card.style.color = color.value;
}

function resetForm() {
    document.getElementById("cardForm").resetForm
}