//function render Layout
function renderLayout(j) {
  return `
    
        <section class="book-section-container" id="firstBookSection(${j})">
          <header class="header-single-book" id="singleBookHeader(${j})">
           <div id="bookTitle(${j})"> </div>
          </header>

          <div class="seperator"></div>

         <section id="bookImg(${j})"> </section>

          <div class="seperator"></div>

         <section id="bookSpecs(${j})">
          <header class="header-book-specs" id="bookSpecsHeader(${j})"> </header>
          <table id="tableSpecs(${j})"> </table>
         </section>

          <div class="seperator"></div>

         <section class="comment-section-container" id="commentsSection(${j})">
          <header class="header-comments" id="commentsHeader">
             <h3>Kommentare</h3>
          </header>
          <div class="comment-table-container">
            <table id="commentsTable(${j})">
             
            </table>
            <div class="input-container">
              <input class="input-comment" id="commentInput(${j})" type="text" />
               <button onclick="addComment(${j})" class="submit-send-btn" id="submitCommitBtn(${j})">
                 <img
                   class="submit-send-btn-img"
                   src="./img/send.png"
                   alt="icon of send symbol"
                 />
               </button>
            </div>
          </div>
        </section>
      </section>`;
}
// function render title template
function renderTitle(element) {
  return `<h2>${element}</h2>`;
}
//function render img template
function renderImg(j) {
  return `<img id="genericImg(${j})" class="book-img" src="./img/books-7448036_1280.png" alt="Picture of a generic book">`;
}
//function render book Specs
function renderBookSpecs(elementAuthorName, elementYear, elementGenre, j) {
  return `  <tr>
              <td><strong>Autor:</strong></td>
              <td id="tdAuthor">
                <p id="authorName(${j})">${elementAuthorName}</p>
              </td>
            </tr>
            <tr>
              <td><strong>Erscheinungsjahr:</strong></td>
              <td id="tdpublishingYear">
                <p id="pusblishingYear(${j})">${elementYear}</p>
              </td>
            </tr>
            <tr>
              <td><strong>Genre:</strong></td>
              <td id="genre"(${j})>${elementGenre}</td>
            </tr>`;
}
//function render header sub template
function renderHeaderBookSpecs(elementPrice, j) {
  return `<div id="bookPrice">
            <p><strong>${elementPrice} €</strong></p>
          </div>

          <div class="favourite-sub-container" id="favouriteSubSection">             
            <p id="favCounter(${j})"> </p>             
            <button onclick="likeOnclick(${j})" class="fav-heart-btn" id="favBtn(${j})"><img id="likeIcon(${j})" class="fav-heart-btn-img heart-btn-greyscale" src="./img/heart-2034908_1280.png" alt=""> </button>
          </div>`;
}

function renderLikeAmount(elementLikesAmount, j) {
  return ` <p id="actualLikeAmount(${j})">${elementLikesAmount} Likes</p> `;
}
//function comments template
function renderComments(j, i, elementCommentUserName, elementComment) {
  return `     <tr>
                <td id="tdCommentUserName(${j})">
                  <p id="commentatorUserName(${i})"><u>${elementCommentUserName}: </u><br><br></p>               
                </td>
                <td id="tdUserComment(${j})">
                  <p id="userComment(${i})"><em>"${elementComment}"</em><br><br></p>               
                </td>
              </tr>
              `;
}
