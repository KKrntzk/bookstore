//#region VARIABLEs

//#endregion

// function render all
function renderAll() {
  renderEachElement();
  renderEachTitle();
  // renderLayout();
  // renderTitle();
  // renderImg();
  // renderBookSpecs();
  // renderHeaderBookSpecs();
  // renderComments();
}

function renderEachElement() {
  let mainContainerRef = document.getElementById("mainContainer");
  for (let j = 0; j < books.length; j++) {
    mainContainerRef.innerHTML += renderLayout(j);
  }
}

function renderEachTitle() {
  let bookTitlesRef = document.getElementById("bookTitle(${j})");
  for (let i = 0; i < books.length; i++) {
    const element = books[i];
    bookTitlesRef.innerHTML += renderTitle(element.name);

    // for (let k = 0; k < ourArray.length; k++) {
    //   let titleRef = document.getElementById("bookTitle(0)");
    //   const element = ourArray[k];
    //   titleRef.innerHTML += renderTitle(element, k);
    // }
  }
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
