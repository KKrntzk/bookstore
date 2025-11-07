//function render Layout
function renderLayout(j) {
  return `<section class="book-section-container" id="firstBookSection(${j})">
        <header class="header-single-book" id="singleBookHeader(${j})">
          <div id="bookTitle(${j})">           
          </div>

        </header>
        <div class="seperator"></div>
        <section id="bookImg(${j})">    
        </section>
        <div class="seperator"></div>
        <section id="bookSpecs(${j})">
          <header class="header-book-specs" id="bookSpecsHeader(${j})">          
          </header>

          <table id="tableSpecs(${j})">     
          </table>
        </section>
        <div class="seperator"></div>
        <section class="comment-section-container" id="commentsSection(${j})">
          <header class="header-comments" id="commentsHeader">
            <p>Kommentare</p>
          </header>

          <div class="comment-table-container" id="commentsTable(${j})">
            <table>
              <tr>
                <td id="tdCommentUserName(${j})">                 
                </td>
                <td id="tdUserComment(${j})">                
                </td>
              </tr>
            </table>
            <div class="input-container">
              <input class="input-comment" id="commentInput(${j})" type="text" />
              <button class="submit-send-btn" id="submitCommitBtn(${j})">
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
function renderTitle(j) {
  return `<p>${books.name(j)}</p>`;
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
