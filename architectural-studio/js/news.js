///////CONTENT//////////

const rightArrow = document.querySelector('#photos__right-arrow');
const leftArrow = document.querySelector('#photos__left-arrow');

rightArrow.addEventListener("click", function(event) {
  const photos = document.querySelector('#photos__photos');
  photos.scrollLeft += 1140;
  event.preventDefault();
});

leftArrow.addEventListener("click", function(event) {
  const photos = document.querySelector('#photos__photos');
  photos.scrollLeft -= 1140;
  event.preventDefault();
});

//////NEWS ARROWS//////

const rightArr = document.querySelector('#right-arrow');
const leftArr = document.querySelector('#left-arrow');

rightArr.addEventListener("click", function(event) {
  const news = document.querySelector('#news-news');
  news.scrollLeft += 325;
  event.preventDefault();
});

leftArr.addEventListener("click", function(event) {
  const news = document.querySelector('#news-news');
  news.scrollLeft -= 325;
  event.preventDefault();
});