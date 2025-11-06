//#region VARIABLEs

let objKeys = Object.keys(books);
let ourArray = [];
//#endregion

// function render all
function renderAll() {
  renderLayout();
  renderTitle();
  renderImg();
  renderBookSpecs();
  renderHeaderBookSpecs();
  renderComments();
}

for (let i = 0; i < objKeys.length; i++) {
  const element = objKeys[i];
  ourArray.push(books[objKeys[i]]);
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
