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