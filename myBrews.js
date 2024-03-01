// global variables
var brewArray = JSON.parse(localStorage.getItem("brews")) || [];
console.log(brewArray);

// Element variables for Form
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

//Element Variables for main
const listDiv = document.getElementById("container");

//add input from form to local storage array
function addBrew() {
  var brew = {
    technique: method.value,
    coffee: coffeeGrounds.value,
    water: water.value,
    coffeeUnits: coffeeUnits.value,
    waterUnits: waterUnits.value,
    cream: cream.value,
    milk: milk.value,
    sugar: sugar.value,
    flavor: flavor.value,
    notes: notes.value,
    grindSize: grindSize.value,
  };
  brewArray.push(brew);
  localStorage.setItem("brews", JSON.stringify(brewArray));
  location.reload();
}

// TODO: CHANGE THIS. make it just h3 under dive containter
// then use container as grid
//grid template columns: column widths here
//will auto wrap need it to be nested grids as need to delete entire rows
function printBrews() {
  brewArray.forEach((brew, index) => {
    var row = document.createElement("div");
    row.setAttribute("name", `${index}`);
    var element = document.createElement("h3");
    var elementText = document.createTextNode(brew.technique);
    element.appendChild(elementText);
    row.appendChild(element);
    var coffeeElement = document.createElement("h3");
    var coffeeEleText = document.createTextNode(
      `${brew.coffee} ${brew.coffeeUnits}`
    );
    coffeeElement.appendChild(coffeeEleText);
    row.appendChild(coffeeElement);
    var waterElement = document.createElement("h3");
    var waterEleText = document.createTextNode(
      `${brew.water} ${brew.waterUnits}`
    );
    waterElement.appendChild(waterEleText);
    row.appendChild(waterElement);
    var grindElement = document.createElement("h3");
    var grindEleText = document.createTextNode(brew.grindSize);
    grindElement.appendChild(grindEleText);
    row.appendChild(grindElement);
    var additionsElement = document.createElement("ul");
    var listElement = document.createElement("li");
    var listText = document.createTextNode(brew.cream);
    listElement.appendChild(listText);
    additionsElement.appendChild(listElement);
    row.appendChild(additionsElement);
    var noteElement = document.createElement("p");
    var noteEleText = document.createTextNode(brew.notes);
    noteElement.appendChild(noteEleText);
    row.appendChild(noteElement);
    listDiv.appendChild(row);
  });
}

//show pup-up modal
function showForm() {
  overlay.hidden = false;
}

//Hide pop-up modal
function exitForm() {
  overlay.hidden = true;
}

//Display grind input if Espresso chosen on form
function showGrind() {
  var x = method.value;
  if (x == "Espresso") {
    grindDiv.hidden = false;
  } else {
    grindDiv.hidden = true;
  }
}

//Event Listeners
addButton.addEventListener("click", addBrew);
exitButton.addEventListener("click", exitForm);
formButton.addEventListener("click", showForm);
method.addEventListener("change", showGrind);
overlay.addEventListener("click", (event) => {
  if (event.target == overlay) {
    exitForm();
  }
});
