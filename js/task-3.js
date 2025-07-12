const input = 
document.getElementById("nameInput");
const output = 
document.querySelector(".output");
input.addEventListener("input", () => {
const value = 
input.value.trim();
output .textContent = value !==
"" ? value : "Anonymous";
});
