function onButtonClick() {
    alert("Button clicked")
}

const heading = document.getElementById("heading");
heading.addEventListener("mouseover",() => {
heading.style.backgroundColor = "yellow";
});

heading.addEventListener("mouseout", () => {
    heading.style.backgroundColor = "";

});