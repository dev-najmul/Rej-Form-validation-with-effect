/**
 * Custom Alert Function 
 */

const setAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between" role="alert">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}



/**
 * Email Check Function 
 */


const emailCheck = (email) => {
    let emailPattern = /^[a-z0-9_\.-]{1,}@[a-z0-9]{2,}\.[a-z0-9]{1,5}$/;

    return emailPattern.test(email);
}



/**
 * Email Check Function 
 */


const cellCheck = (cell) => {
    let cellPattern = /^(01|\+8801|8801)[0-9]{9}$/;

    return cellPattern.test(cell);
}


/**
 * username Check Function 
 */


const usernameCheck = (user) => {
    let Pattern = /^[a-z\.]{2,}[a-z0-9]{1,5}$/;

    return Pattern.test(user);
}