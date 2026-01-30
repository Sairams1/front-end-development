
const heading = document.getElementById('heading1');
heading.classList.add("css-heading");

const heading2 = document.getElementById('heading2');
heading2.classList.add('css-heading');

const paragraph = document.createElement('p');
paragraph.textContent = "I m progressing well in JavaScript.";
paragraph.style.color = "red";
document.body.appendChild(paragraph);
