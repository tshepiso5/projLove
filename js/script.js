$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse();
      $(".menuItem").stopPropagation();
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

// $(function () {
//   document.querySelector(".menuItem").addEventListener("click", function (event) {
//     event.stopPropagation();
//   })
// })

// console.log(document.getElementById("pic-tile"));
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var img13 = document.getElementById("myImg13");
var img14 = document.getElementById("myImg14");
var img15 = document.getElementById("myImg15");
var img16 = document.getElementById("myImg16");
var img17 = document.getElementById("myImg17");
var img18 = document.getElementById("myImg18");
var img19 = document.getElementById("myImg19");
var img20 = document.getElementById("myImg20");

var modalImg = document.getElementById("img01");
var modalImg1 = document.getElementById("img02");
var modalImg2 = document.getElementById("img03");
var modalImg3 = document.getElementById("img04");
var modalImg4 = document.getElementById("img05");
var modalImg5 = document.getElementById("img06");
var modalImg6 = document.getElementById("img07");
var modalImg7 = document.getElementById("img08");
var modalImg8 = document.getElementById("img09");
var modalImg9 = document.getElementById("img10");
var modalImg10 = document.getElementById("img11");
var modalImg11 = document.getElementById("img12");
var modalImg13 = document.getElementById("img13");
var modalImg14 = document.getElementById("img14");
var modalImg15 = document.getElementById("img15");
var modalImg16 = document.getElementById("img16");
var modalImg17 = document.getElementById("img17");
var modalImg18 = document.getElementById("img18");
var modalImg19 = document.getElementById("img19");
var modalImg20 = document.getElementById("img20");

var captionText = document.getElementById("caption");
var captionText1 = document.getElementById("caption1");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img7.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img8.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img9.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img10.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img11.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img13.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img14.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img15.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img16.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img17.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img18.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img19.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img20.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";}
