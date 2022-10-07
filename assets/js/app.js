const user_form = document.getElementById('user_form');
const msg = document.querySelector('.msg');
const loadingI = document.querySelector('.loadingIMG');

const emailFild = user_form.querySelector('input[name = "email"]');
const cellFild = user_form.querySelector('input[name = "cell"]');
const unameFild = user_form.querySelector('input[name = "uname"]');
const emailVm = document.querySelector('#emailVm');
const cellVm = document.querySelector('#cellVm');
const unVm = document.querySelector('#unVm');



user_form.addEventListener('submit', (e) => {
    e.preventDefault();

    loadingI.style.display = 'block';
    msg.innerHTML = '';

    let lodingTime = setTimeout( () => {
        loadingI.style.display = 'none';

        const form_data = new FormData(e.target);
        const {name, email, uname, cell, gender} = Object.fromEntries(form_data.entries());

        if ( !name || !email || !uname || !cell || !gender){
            msg.innerHTML = setAlert('Data can\'t be empty');
        }else{
            msg.innerHTML = setAlert('Data stable','success');
            e.target.reset();
            emailVm.textContent = '';
            emailVm.className = '';
            cellVm.innerHTML = ``;
            unVm.textContent = '';
        }

        
        clearTimeout(lodingTime);
    },2000);
});

//email fild valadition

emailFild.onkeyup = (e) => {
    let emailVal = e.target.value;
    if (emailCheck(emailVal) == false) {
        emailVm.textContent = 'Invalid Email';
        emailVm.className = 'text-danger';
    }
    else {
        emailVm.innerHTML = `<span>&#10003;</span> Correct`;
        emailVm.className = 'text-success';
    }
}


//number fild validation
cellFild.onkeyup = (event) => {
    let cellVal = event.target.value;
    if (cellCheck(cellVal) == false) {
       cellVm.textContent = 'Invalid Phone';
       cellVm.className = 'text-danger';

    }
    else {
        cellVm.innerHTML = `<span>&#10003;</span> Correct`;
        cellVm.className = 'text-success';
    }
}



//username fild validation
unameFild.onkeyup = (ev) => {
    let unameVal = ev.target.value;
    if (usernameCheck(unameVal) == false) {
        unVm.textContent = 'Invalid username';
        unVm.className = 'text-danger';

    }
    else {
        unVm.innerHTML = `<span>&#10003;</span> Correct`;
        unVm.className = 'text-success';
    }
}

