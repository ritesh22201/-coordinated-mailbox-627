// Section-Second Caraousel button.

let btn1 = document.querySelector('.buttons > button:nth-child(1)');

let btn2 = document.querySelector('.buttons > button:nth-child(2)');

let cars = document.querySelectorAll('.cars > div');

let count = 0;
let counter = 300;

cars.forEach((el, i) => {
    el.style.left = `${i*100}%`;
});


btn1.addEventListener('click', () => {
    console.log("anisd")
    count--;
    cars.forEach((el, i) => {
        el.style.transform = `translateX(-${count*422}px)`;
    })
});

btn2.addEventListener('click', () => {
    console.log("anisd")
    count++;
    cars.forEach((el, i) => {
        el.style.transform = `translateX(-${count*100}%)`;
    })
})

