let storedata = JSON.parse(localStorage.getItem('store')) || [];
mobLogin(storedata);

// Adding the functionality of sign up / log in form.

let back = document.getElementById('left-img');
let pop_up = document.getElementById('pop-up');
let input = document.getElementById('input');

input.addEventListener('click', () => {
    pop_up.style.display = 'block';
})

back.addEventListener('click', () => {
    pop_up.style.display = 'none';
})

// For validating the length of the mobile number

let input2 = document.getElementById('mobile');
let button = document.querySelector('.btn-sub');

mobile.addEventListener('input', () => {
    if (input2.value.length == 10) {
        button.style.background = '#10a310';
    }
    else {
        button.style.background = '#e0e0e0';
    }
})

// For validating the length of the Email Address

let email = document.getElementById('email-btn');
let pop_up2 = document.getElementById('pop-up2');
let back2 = document.getElementById('left-img2');
let emailIn = document.getElementById('email');
let emailbtn = document.getElementById('btn-sub2');

email.addEventListener('click', () => {
    pop_up2.style.display = 'block';
})

back2.addEventListener('click', () => {
    pop_up2.style.display = 'none';
})

emailIn.addEventListener('input', (e) => {
    if (emailIn.value.toLowerCase().includes('@') && emailIn.value.toLowerCase().includes('.com')) {
        emailbtn.style.background = '#10a310';
    }
    else {
        emailbtn.style.background = '#e0e0e0';
    }
})

// LogIn with mobile

function mobLogin(data) {
    let passbox = document.getElementById('pass');
    let passInp = document.getElementById('pass-inp');

    data.forEach(el => {
        button.addEventListener('click', () => {
            if (el.mobile == input2.value) {
                passbox.style.display = 'block';
                if (el.pass == passInp.value) {
                    alert('Log In Successful');
                    window.location.href = './landing.html';
                }
            }
            else{
                
            }
        })
    })

}
