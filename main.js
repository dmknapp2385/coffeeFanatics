menuList = document.querySelector("nav ul");
methods = document.getElementById("methodoligies");

function showDiv() {
    console.log("in funciton")
  menuList.hidden = false;
}

methods.addEventListener("click", showDiv);
