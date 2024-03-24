// global variables
let brewArray = JSON.parse(localStorage.getItem("brews")) || [];

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
  let brew = {
    technique: method.value,
    coffee: coffeeGrounds.value,
    water: water.value,
    coffeeUnits: coffeeUnits.value,
    waterUnits: waterUnits.value,
    cream: cream.checked,
    milk: milk.checked,
    sugar: sugar.checked,
    flavor: flavor.checked,
    notes: notes.value,
    grindSize: grindSize.value,
  };
  brewArray.push(brew);
  localStorage.setItem("brews", JSON.stringify(brewArray));
  location.reload();
}

//print saved brews on main page
function printBrews() {
  brewArray.forEach((brew, index) => {
    let row = document.createElement("div");
    row.setAttribute("name", `${index}`);

    //Method and delete span
    let element = document.createElement("h3");
    element.innerHTML = `<span>&#x1F5D1<span> ${brew.technique}`;
    // let elementText = document.createTextNode(spanText + brew.technique);
    row.appendChild(element);

    //Coffee Grounds
    let coffeeElement = document.createElement("h3");
    let coffeeEleText;
    if (brew.coffee != "") {
      coffeeEleText = document.createTextNode(
        `${brew.coffee} ${brew.coffeeUnits}`
      );
    } else {
      coffeeEleText = document.createTextNode(`---`);
    }
    coffeeElement.appendChild(coffeeEleText);
    row.appendChild(coffeeElement);

    //Water amount
    let waterEleText;
    if (brew.water != "") {
      waterEleText = document.createTextNode(
        `${brew.water} ${brew.waterUnits}`
      );
    } else {
      waterEleText = document.createTextNode(`---`);
    }
    let waterElement = document.createElement("h3");
    waterElement.appendChild(waterEleText);
    row.appendChild(waterElement);

    //Grind Size
    let grindElement = document.createElement("h3");
    let grindEleText;
    if (brew.grindSize != "") {
      grindEleText = document.createTextNode(brew.grindSize);
    } else {
      grindEleText = document.createTextNode(`---`);
    }
    grindElement.appendChild(grindEleText);
    row.appendChild(grindElement);

    // list elements

    let additionsElement = document.createElement("ul");

    if (brew.cream) {
      let listElement = document.createElement("li");
      let listText = document.createTextNode(cream.value);
      listElement.appendChild(listText);
      additionsElement.appendChild(listElement);
    }
    if (brew.milk) {
      let listElement = document.createElement("li");
      let listText = document.createTextNode(milk.value);
      listElement.appendChild(listText);
      additionsElement.appendChild(listElement);
    }
    if (brew.sugar) {
      let listElement = document.createElement("li");
      let listText = document.createTextNode(sugar.value);
      listElement.appendChild(listText);
      additionsElement.appendChild(listElement);
    }
    if (brew.flavor) {
      let listElement = document.createElement("li");
      let listText = document.createTextNode(flavor.value);
      listElement.appendChild(listText);
      additionsElement.appendChild(listElement);
    }
    row.appendChild(additionsElement);

    //Notes
    let noteElement = document.createElement("p");
    let noteEleText = document.createTextNode(brew.notes);
    noteElement.appendChild(noteEleText);
    row.appendChild(noteElement);
    listDiv.appendChild(row);
  });

  // add event listeners to span
  let spans = document.getElementsByTagName("span");
  for (let span of spans) {
    span.addEventListener("click", deleteBrew);
  }
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
  let x = method.value;
  if (x == "Espresso") {
    grindDiv.hidden = false;
  } else {
    grindDiv.hidden = true;
  }
}

const deleteBrew = (e) => {
  let parent = e.target.closest("div");
  let index = parent.getAttribute("name");
  brewArray.splice(index, 1);
  localStorage.setItem("brews", JSON.stringify(brewArray));
  location.reload();
};

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
