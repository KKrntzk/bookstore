//#region FUNCTIONS

//#region single render functions
function renderEachElement() {
  let mainContainerRef = document.getElementById("mainContainer");
  for (let j = 0; j < books.length; j++) {
    mainContainerRef.innerHTML += renderLayout(j);
    renderEachTitle(j);
    renderEachImg(j);
    renderEachHeaderBooksSpecs(j);
    renderEachBookSpecs(j);
    renderEachBooksComments(j);
    checkForLike(j);
  }
}

function renderEachTitle(j) {
  const bookTitlesRef = document.getElementById(`bookTitle(${j})`);
  const element = books[j].name;
  bookTitlesRef.innerHTML += renderTitle(element);
}

function renderEachImg(j) {
  const bookImgRef = document.getElementById(`bookImg(${j})`);
  bookImgRef.innerHTML += renderImg(j);
}

function renderEachHeaderBooksSpecs(j) {
  const HeaderBookSpecsRef = document.getElementById(`bookSpecsHeader(${j})`);
  const elementPrice = books[j].price;
  const elementLikesAmount = books[j].likes;
  HeaderBookSpecsRef.innerHTML += renderHeaderBookSpecs(
    elementPrice,
    elementLikesAmount,
    j
  );
}

function renderEachBookSpecs(j) {
  const bookSpecsRef = document.getElementById(`tableSpecs(${j})`);
  const elementAuthorName = books[j].author;
  const elementYear = books[j].publishedYear;
  const elementGenre = books[j].genre;
  bookSpecsRef.innerHTML += renderBookSpecs(
    elementAuthorName,
    elementYear,
    elementGenre,
    j
  );
}

function renderEachBooksComments(j) {
  const commentsTableRef = document.getElementById(`commentsTable(${j})`);
  for (let i = 0; i < books[j].comments.length; i++) {
    const elementCommentUserName = books[j].comments[i].name;
    const elementComment = books[j].comments[i].comment;
    commentsTableRef.innerHTML += renderComments(
      j,
      i,
      elementCommentUserName,
      elementComment
    );
    elementCommentUserName.innerHTML = document.getElementById(
      `commentatorUserName(${i})`
    );
    elementComment.innerHTML = document.getElementById(`userComment(${i})`);
  }
}

//#endregion

//#region like function

// function onclick change like amount add class disable greyscale
function checkForLike(j) {
  const likeRef = document.getElementById(`likeIcon(${j})`);
  if (books[j].liked == true) {
    likeRef.classList.remove("heart-btn-greyscale");
  }
}

function likeOnclick(j) {
  const likeRef = document.getElementById(`likeIcon(${j})`);
  likeRef.classList.toggle("heart-btn-greyscale");
  changeLikesAmount(j);
}

function changeLikesAmount(j) {
  let elementLikesAmount = books[j].likes;
  elementLikesAmount.innerHTML = books[j].likes + 1;
}

//#endregion
//#endregion
