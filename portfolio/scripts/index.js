let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



function setSlide(n){
    slideIndex = n
    let i;
    let texts = document.getElementsByClassName("project_text");
    let images = document.getElementsByClassName("project_image");
    if (n > texts.length) {slideIndex = 1}
    if (n < 1) {slideIndex = texts.length}
    for (i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    texts[slideIndex-1].style.display = "block";
    images[slideIndex-1].style.display = "block";
}