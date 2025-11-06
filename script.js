//#region VARIABLEs

let objKeys = Object.keys(books);
let ourArray = [];
//#endregion

// function render all
function renderAll() {
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

// function render title template
function renderTitle() {
  let titleRef = document.getElementById("bookTitle");
  titleRef.innerHTML = `<p>Red Rising</p>`;
}
//function render img template
function renderImg() {
  let imgRef = document.getElementById("bookImg");
  imgRef.innerHTML = `<img class="book-img" src="./img/book-161117_1280.png" alt="Picture of a generic book">`;
}
//function render book Specs
function renderBookSpecs() {
  let bookSpecsRef = document.getElementById("tableSpecs");
  bookSpecsRef.innerHTML = `  <tr>
              <td>Autor</td>
              <td id="tdAuthor">
                <p id="authorName">Author</p>
              </td>
            </tr>
            <tr>
              <td>Erscheinungsjahr</td>
              <td id="tdpublishingYear">
                <p id="pusblishingYear">2015</p>
              </td>
            </tr>
            <tr>
              <td id="genre">Genre</td>
              <td>Sci-Fi</td>
            </tr>`;
}
//function render header sub template
function renderHeaderBookSpecs() {
  let BookSpecsHeaderRef = document.getElementById("bookSpecsHeader");
  BookSpecsHeaderRef.innerHTML = `<div id="bookPrice">
            <p>19,99</p>
            </div>
            <div class="favourite-sub-container" id="favouriteSubSection">             
             <p id="favCounter">
                 <p >Likes</p> 
            </p>             
              <button class="fav-heart-btn" id="favBtn"><img class="fav-heart-btn-img heart-btn-greyscale" src="./img/heart-2034908_1280.png" alt=""></button>
            </div>`;
}
//function comments template
function renderComments() {
  let commentsUserRef = document.getElementById("tdCommentUserName");
  let commentRef = document.getElementById("tdUserComment");
  commentsUserRef.innerHTML = ` <p id="commentatorUserName">leser2112</p>`;
  commentRef.innerHTML = `<p id="userComment">
                    das Buch ist supi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                  </p>`;
}
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
