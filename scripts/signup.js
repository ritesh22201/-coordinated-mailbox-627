let storedata = JSON.parse(localStorage.getItem('store')) || [];
mobLogin();
emailLogin();

// { Name: 'Ritesh Goswami', Email: 'riteshgoswami22201@gmail.com', Password: '1234', Mobile: '8434022201', Gender: 'Male', id : 0}
// Adding the functionality of sign up / log in form.

let back = document.getElementById('left-img');
let pop_up = document.getElementById('pop-up');
let input = document.getElementById('input');
let section1 = document.getElementById('sec-1');

input.addEventListener('click', () => {
    pop_up.style.display = 'block';
    section1.style.display = 'none';
})

back.addEventListener('click', () => {
    pop_up.style.display = 'none';
    section1.style.display = 'block';
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
    section1.style.display = 'none';
})

back2.addEventListener('click', () => {
    pop_up2.style.display = 'none';
    section1.style.display = 'block';
})

emailIn.addEventListener('input', (e) => {
    if (emailIn.value.toLowerCase().includes('@') && emailIn.value.toLowerCase().includes('.com')) {
        emailbtn.style.background = '#10a310';
    }
    else {
        emailbtn.style.background = '#e0e0e0';
    }
})

// Form 1

// LogIn with mobile

function check_name(user_mobile) {
    for (let i = 0; i < storedata.length; i++) {
        if (user_mobile == storedata[i].Mobile) {
            storedata[i].id = i;
            localStorage.setItem('store', JSON.stringify(storedata));
            return true;
        }
    }
}

function check_pass(pass) {
    for (let i = 0; i < storedata.length; i++) {
        if (pass == storedata[i].Password) {
            return true;
        }
    }
}

let register = document.getElementById('register');

function mobLogin(data) {
    let form1 = document.querySelector('#form1');
    let form2 = document.querySelector('#form2');
    let mob_data = document.querySelector('#pop-up > div:nth-child(1)');
    let back3 = document.querySelector('.left-img3');

    form1.addEventListener('submit', (e) => {
        e.preventDefault();

        if (check_name(form1.mobile.value)) {
            if (check_pass(form1.password1.value)) {
                alert('Log In Successful');
                window.location.href = './landing.html';
            }
            else {
                alert('Wrong Credentials');
            }
        }
        else {
            alert("User is not registered");
            mob_data.style.display = 'none';
            register.style.display = 'block';
            back3.addEventListener('click', () => {
                register.style.display = 'none';
                mob_data.style.display = 'block';
            })

            form2.addEventListener('submit', (event) => {
                event.preventDefault();
                console.log('abcd');
                let user_data = {
                    Name: form2.name.value,
                    Mobile: form2.mobile_no.value,
                    Email: form2.email_id.value,
                    Password: form2.pass.value,
                    Gender: form2.gender.value
                }

                storedata.push(user_data);
                localStorage.setItem('store', JSON.stringify(storedata));
                alert('User Registered Successfully');
                register.style.display = 'none';
                mob_data.style.display = 'block';
            })
        }
    })

}

// For Email logIn

function check_email(user_email) {
    for (let i = 0; i < storedata.length; i++) {
        if (user_email == storedata[i].Email) {
            storedata[i].id = i;
            localStorage.setItem('store', JSON.stringify(storedata));
            return true;
        }
    }
}

function emailLogin(data) {
    let form2 = document.querySelector('#form2');
    let form3 = document.querySelector('#form3');
    // let register = document.getElementById('register');
    let email_data = document.querySelector('#pop-up2 > div');
    let back3 = document.querySelector('.left-img4');

    form3.addEventListener('submit', (event1) => {
        event1.preventDefault();

        if (check_email(form3.email.value)) {
            if (check_pass(form3.password2.value)) {
                alert('Log In Successful');
                window.location.href = './landing.html';
            }
            else {
                alert('Wrong Credentials');
            }
        }
        else {
            alert("User is not registered");
            email_data.style.display = 'none';
            register.style.display = 'block';

            // back3.addEventListener('click', () => {
            //     register.style.display = 'none';
            //     mob_data.style.display = 'block';
            // })

            form2.addEventListener('submit', (event) => {
                event.preventDefault();
                
                let user_data = {
                    Name: form2.name.value,
                    Mobile: form2.mobile_no.value,
                    Email: form2.email_id.value,
                    Password: form2.pass.value,
                    Gender: form2.gender.value
                }

                storedata.push(user_data);
                localStorage.setItem('store', JSON.stringify(storedata));
                alert('User Registered Successfully');
                register.style.display = 'none';
                mob_data.style.display = 'block';
            })
        }
    })

}

