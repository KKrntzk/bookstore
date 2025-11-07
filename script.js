//#region VARIABLEs

//#endregion

//#region FUNCTIONS

// function render all
function renderAll() {
  renderEachElement();
  renderEachTitle();
  // renderTitle();
  // renderImg();
  // renderBookSpecs();
  // renderHeaderBookSpecs();
  // renderComments();
}

//#region single render functions
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

function renderEachImg() {}

function renderEachHeaderBooksSpecs() {}

function renderEachBookSpecs() {}

function renderEachBooksComments() {}

//#endregion

//#region like function

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
//#endregion
//#endregion
