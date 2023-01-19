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
let value = +range.value;
let total = document.getElementById('total');
let totalVal = 1536;
total.textContent = totalVal;
range.addEventListener('input', () => {
   totalVal += totalVal*value;
})