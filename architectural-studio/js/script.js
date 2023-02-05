////////SCROLL////////
const links = document.querySelectorAll('a[href^="#"]');// все ссылки, с атрибутом href, начинающимся с "#"
links.forEach(item => item.addEventListener('click',
 function(e) {
	e.preventDefault();
	const id = item.getAttribute('href').slice(1);

	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}));

//////SERVICES LISTS/////////

let lists = new Array('services-list_1','services-list_2');
listStart = function allclose() {
  for (i=0; i < lists.length; i++){
  document.getElementById(lists[i]).style.display = "none";
  }
}
function menuOpen(id){
  for (i=0; i < lists.length; i++){
  if (id !== lists[i]){
  document.getElementById(lists[i]).style.display = "none";
  }
  }
  if (document.getElementById(id).style.display == "block"){
  document.getElementById(id).style.display = "none";
  }else{
  document.getElementById(id).style.display = "block";
  }
}
window.onload=listStart;

document.querySelector(".list__design").addEventListener("click", function(e) {
    document.querySelector(".list__arrow").classList.toggle("active");
  });

document.querySelector(".list__renovation").addEventListener("click", function(e) {
    document.querySelector(".list__arrow-2").classList.toggle("active");
  });

  ////PHONE NUMBER INPUT////////

  window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.user__number'), function(input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+38 (0__) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

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

