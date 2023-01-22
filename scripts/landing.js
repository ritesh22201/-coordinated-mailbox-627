let storedata = JSON.parse(localStorage.getItem('store')) || [];

let anchor = document.querySelector('#anchor');
let nav = document.querySelector('nav');

let name1 = document.querySelector('.name1');
let email1 = document.querySelector('.email1');
let gender1 = document.querySelector('.gender1');
let logoutbtn = document.querySelector('#logout-btn');
let logout_sec = document.querySelector('#logout');

let image = document.createElement('img');
let main_sec = document.querySelector('main');

for (let i = 0; i < storedata.length; i++) {
    if (storedata[i].id == i) {
        
        image.setAttribute('src', 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png');
        image.classList.add('profile');
        nav.append(image);
        anchor.innerText = storedata[i].Name.split(' ')[0];
        anchor.href = '#';

        name1.textContent ="Name -" + " " + storedata[i].Name;
        email1.textContent ="Email -" + " " + storedata[i].Email;
        gender1.textContent ="Gender -" + " " + storedata[i].Gender;
    }
}

// Logout

logoutbtn.addEventListener('click', () => {
    name1.textContent = "";
    email1.textContent = "";
    gender1.textContent = "";
    anchor.textContent = "Login/Signup";
    image.style.display = 'none';
    anchor.href = './signup.html';
    logout_sec.style.display = 'none';
    storedata.forEach((el, i) => {
        storedata.splice(i);
    })
    localStorage.setItem('store', JSON.stringify(storedata));
})

image.addEventListener('click', () => {
    logout_sec.style.display = 'block';
})

main_sec.addEventListener('click', () => {
    logout_sec.style.display = 'none';
})

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
    el.style.left = `${i * 100}%`;
});

btn1.addEventListener('click', () => {
    count--;
    cars.forEach((el, i) => {
        el.style.transform = `translateX(-${count * 1200}px)`;
    })
});

btn2.addEventListener('click', () => {
    count++;
    cars.forEach((el, i) => {
        el.style.transform = `translateX(-${count * 1200}px)`;
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

