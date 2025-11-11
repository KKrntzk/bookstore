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
    renderEachLikeAmount(j);
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
  HeaderBookSpecsRef.innerHTML += renderHeaderBookSpecs(
    elementPrice.toFixed(2),
    j
  );
}

function renderEachLikeAmount(j) {
  const likeAmountRef = document.getElementById(`favCounter(${j})`);
  const elementLikesAmount = books[j].likes;
  likeAmountRef.innerHTML = renderLikeAmount(elementLikesAmount, j);
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
  commentsTableRef.innerHTML = "";
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

function checkForLike(j) {
  const likeRef = document.getElementById(`likeIcon(${j})`);
  if (books[j].liked == true) {
    likeRef.classList.remove("heart-btn-greyscale");
  }
}

function likeOnclick(j) {
  const likeRef = document.getElementById(`likeIcon(${j})`);
  likeRef.classList.toggle("heart-btn-greyscale");
  const actualLikeAmountRef = document.getElementById(`actualLikeAmount(${j})`);
  actualLikeAmountRef.innerHTML = "";
  changeLikesAmount(j);
  renderEachLikeAmount(j);
}

function changeLikesAmount(j) {
  const likeRef = document.getElementById(`likeIcon(${j})`);
  if (likeRef.classList.contains("heart-btn-greyscale")) {
    books[j].likes--;
  }
  if (!likeRef.classList.contains("heart-btn-greyscale")) {
    books[j].likes++;
  }
}
//#endregion

//#region commentsection

function addComment(j) {
  const inputRef = document.getElementById(`commentInput(${j})`);
  if (inputRef.value.length != 0) {
    books[j].comments.push({ name: "Herbert", comment: inputRef.value });
    renderEachBooksComments(j);
  }
  inputRef.value = "";
}
//#endregion

//#endregion
