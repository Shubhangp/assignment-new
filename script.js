// Show links
const barContainer = document.querySelector('.bar-container');
const mobile = document.querySelector('.mobile');
barContainer.addEventListener("click", function() {
  if(mobile.style.display === "block") {
    mobile.style.display = "none";
  } else {
    mobile.style.cssText = "display: block !important";
  }
})

//  Carousal2
let index = 1;
changeSlide(index);

function slideCountHandler(count) {
  changeSlide(index += count);
}

function currentSlide(count) {
  changeSlide(index = count);
}

function changeSlide(count) {
  let i;
  let slides = document.getElementsByClassName("carousal-slide2");
  if (count > slides.length) {index = 1}    
  if (count < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[index-1].style.display = "flex";
}

setInterval(function() {
    slideCountHandler(1)
    slideCountHandler2(1)
}, 4000);


let index2 = 1;
changeSlide2(index2);

function slideCountHandler2(count) {
  changeSlide2(index2 += count);
}

function currentSlide(count) {
  changeSlide2(index2 = count);
}

function changeSlide2(count) {
  let i;
  let slides = document.getElementsByClassName("carousal-slide1");
  if (count > slides.length) {index2 = 1}    
  if (count < 1) {index2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[index2-1].style.display = "flex";
}


// Form
let form = document.querySelector('.form');
let name = document.querySelector('.name');
let email = document.querySelector('.email');
let subject = document.querySelector('.subject');
let message = document.querySelector('.message');
let messageBox = document.querySelector('.message-box');

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if(name.value === '' || email.value === '' || subject.value === '' || message.value === '') {
    messageBox.innerHTML = "* All fields are compulsory  ";
    messageBox.classList = 'error';
    messageBox.classList.remove = 'success';
  } else {
    console.log(name.value, email.value, subject.value, message.value);
    messageBox.innerHTML = "Submitted Successfully!!  ";
    messageBox.classList = 'success';
    messageBox.classList.remove = 'error';
  }
});