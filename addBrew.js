const addButton = document.getElementById("add-btn");
const exitButton = document.getElementById("exit-btn");
const formButton = document.getElementById("form-btn");
const overlay = document.getElementById("overlay");
const method = document.getElementById("method");
const coffeeGrounds = document.getElementById("coffee");
const water = document.getElementById("water");
const coffeeUnits = document.getElementById("cofUnits");
const waterUnits = document.getElementById("waterUnits");
const milk = document.getElementById("milk");
const cream = document.getElementById("cream");
const sugar = document.getElementById("sugar");
const flavor = document.getElementById("flavoring");
const notes = document.getElementById("notes");
const grindDiv = document.getElementById("grind_div");
const grindSize = document.getElementById("grind_size");
const formBox = document.getElementsByClassName("textbox");
function addBrew() {
  var brew = {
    method: method.value,
    coffeeGrounds: coffeeGrounds.value,
    water: water.value,
    cofUnits: coffeeUnits.value,
    waterUnits: waterUnits.value,
    cream: cream.value,
    milk: milk.value,
    sugar: sugar.value,
    flavor: flavor.value,
    notes: notes.value,
    grindSize: grindSize.value,
  };
  location.reload();
}
function showForm() {
  overlay.hidden = false;
}
function exitForm() {
  overlay.hidden = true;
}

function showGrind() {
  if ((method.value = "Espresso")) {
    grindDiv.hidden = false;
  }
}
addButton.addEventListener("click", addBrew);
exitButton.addEventListener("click", exitForm);
formButton.addEventListener("click", showForm);
method.addEventListener("change", showGrind);
overlay.addEventListener("click", (event) => {
  if (event.target == overlay) {
    exitForm();
  }
});
