// Burger Menu 

let hamburger = document.querySelector('.hamburger');
let burger = document.getElementById('burger');
let main = document.querySelector('main');

hamburger.style.cursor = 'pointer';

hamburger.addEventListener('click', () => {
    burger.style.display = 'block';
})

main.addEventListener('click', () => {
    burger.style.display = 'none';
})

// Section-Second Caraousel button.

let btn1 = document.querySelector('.buttons > button:nth-child(1)');

let btn2 = document.querySelector('.buttons > button:nth-child(2)');

let cars = document.querySelectorAll('.cars > div');

let count = 0;

cars.forEach((el, i) => {
    el.style.left = `${i*100}%`;
});

btn1.addEventListener('click', () => {
    count--;
    cars.forEach((el, i) => {
        el.style.transform = `translateX(-${count*1200}px)`;
    })
});

btn2.addEventListener('click', () => {
    count++;
    cars.forEach((el, i) => {
        el.style.transform = `translateX(-${count*1200}px)`;
    })
})

// Section-Sixth 

let box = document.querySelector('.desc > div');
let heading = document.querySelector('.footer-heading');
let butn1 = document.querySelector('.butn1 > h1');
let butn2 = document.querySelector('.butn2 > h1');
let butn3 = document.querySelector('.butn3 > h1');
let butn4 = document.querySelector('.butn4 > h1');

butn1.addEventListener('click', () => {
    heading.textContent = 'About Boomcar';
    box.style.display = 'block';
})

butn2.addEventListener('click', () => {
    heading.textContent = 'Find more information about Zoomcar Blogs here';
    box.style.display = 'none';  
})

butn3.addEventListener('click', () => {
    heading.textContent = 'Find more information about Zoomcar Careers here';
    box.style.display = 'none'; 
})

butn4.addEventListener('click', () => {
    heading.textContent = 'Find more information about Zoomcar Help and Support here';
    box.style.display = 'none'; 
})

