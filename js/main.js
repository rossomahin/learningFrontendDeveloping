let myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/firefox-icon.png") {
    myImage.setAttribute("src", "img/edge-fire.png");
  } else {
    myImage.setAttribute("src", "img/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt("Please, Enter ur name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
