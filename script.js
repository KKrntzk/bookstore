// function render all
function renderAll() {
  renderTitle();
  renderImg();
  renderLikes();
  renderPrice();
  renderComments();
}
// function render title template
const myObj = Object.keys(books);

function renderTitle() {
  let titleRef = document.getElementById("singleBookHeader");
}
//function render img template
function renderImg() {
  let imgRef = document.getElementById("bookImg");
  imgRef.innerHTML = `<img class="book-img" src="./img/book-161117_1280.png" alt="Picture of a generic book">`;
}
//function render likes template
function renderLikes() {
  let likeRef = document.getElementById("favouriteSubSection");
  likeRef.innerHTML = `  <p id="favCounter">${i}Likes</p>
              <button class="fav-heart-btn" id="favBtn"><img class="fav-heart-btn-img" src="./img/heart-2034908_1280.png" alt=""></button>`;
}
//function price template
function renderPrice() {
  let priceRef = document.getElementById("bookPrice");
  priceRef.innerHTML = `<p>${i}19,99</p>`;
}
//function comments template
function renderComments() {
  let commentsUserRef = document.getElementById("tdcommentatorUserName");
  let commentRef = document.getElementById("tduserComment");
  commentsUserRef.innerHTML = `<td id="commentatorUserName">leser2112</td>`;
  commentRef.innerHTML = `<td id="userComment">das Buch ist supi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</td>`;
}
// function onclick change like amount add class disable greyscale
