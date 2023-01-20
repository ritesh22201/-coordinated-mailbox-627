// Hamburger Menu

let hamburger = document.querySelector('.hamburger');
let burgerMenu = document.getElementById('burger');
let main = document.querySelector('main');

hamburger.addEventListener('click', () => {
  burgerMenu.style.display = 'block';
})

main.addEventListener('click', () => {
  burgerMenu.style.display = 'none';
  document.style.background = 'linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))';
})


// Section-First

let slidebox = document.getElementById('slider');

function slideshow(images){
    let index = 1;
    let img = document.createElement('img');
    img.src = images[0];
    
    setInterval(function(){
      img.src = images[index];
      index++;
      if(index == images.length){
        index = 0;
      }
    }, 2000)
   
    slidebox.append(img);
}

// Using the following data for slideshow
var Images = [
  "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner3.jpg",
  "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner4.jpg",
  "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner-1.png",
  "https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner2.jpg"
]

slideshow(Images);


// Calculating the total earnings 

let range = document.getElementById('range');
let total = document.getElementById('total');
let totalVal = +total.textContent;
// total.textContent = totalVal;
range.addEventListener('input', () => {
  let value = Number(range.value);
  total.textContent = "₹" + value*totalVal;
})

// Returning back to the landing page.

let logo = document.getElementById('logo-icon');

logo.addEventListener('click', () => {
  window.location.href = './landing.html';
})