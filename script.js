//#region VARIABLEs

let objKeys = Object.keys(books);
// let objKeysTitles = Object.keys(books.name);
let ourArray = [];
//#endregion

// function render all
function renderAll() {
  renderEachElement();
  // renderLayout();
  // renderTitle();
  // renderImg();
  // renderBookSpecs();
  // renderHeaderBookSpecs();
  // renderComments();
}

// function getTitles() {

// }

function renderEachElement() {
  let mainContainerRef = document.getElementById("mainContainer");
  for (let j = 0; j < objKeys.length; j++) {
    mainContainerRef.innerHTML += renderLayout(j);
  }
  // for (let i = 0; i < objKeys.length; i++) {
  //   const books = objKeys[i];
  //   ourArray.push(books[objKeys[i]]);
  // }
}

function renderEachTitle() {
  let titleRef = document.getElementById("bookTitle");
  titleRef.innerHTML += renderTitle();
}

// const myObj = Object.keys(books);

// function onclick change like amount add class disable greyscale
function likesUpdate() {
  const likeRef = document.getElementById("favCounter");
  likeRef.innerHTML = ` <p id="favCounter">
                <p >${i + 1}Likes</p>
            </p>`;
  disableGreyscale();
}

function disableGreyscale() {
  let heartBtnRef = document.getElementById("favBtn");
  heartBtnRef.classList.remove("heart-btn-greyscale");
}
