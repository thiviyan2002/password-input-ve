function strength(password) {
    let i = 0;
    if (password.length > 6) {
        i++;
    }
    if (password.length > 10) {
        i++;
    }
    if (/[A-Z]/.test(password)) {
        i++;
    }
    if (/[0-9]/.test(password)) {
        i++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
        i++;
    }
    return i;
}

document.addEventListener("keyup", function (e) {
    let password = document.querySelector('.p-input-container input').value;
    let strengthValue = strength(password);
    let container = document.querySelector('.strength-percent span');

    if (strengthValue === 0) {
        container.classList.remove('weak');
        container.classList.remove('average');
        container.classList.remove('strong');
    } else if (strengthValue <= 2) {
        container.classList.add('weak');
        container.classList.remove('average');
        container.classList.remove('strong');
    } else if (strengthValue > 2 && strengthValue <= 4) {
        container.classList.remove('weak');
        container.classList.add('average');
        container.classList.remove('strong');
    } else {
        container.classList.remove('weak');
        container.classList.remove('average');
        container.classList.add('strong');
    }
});

let pswrd = document.querySelector('#myPassword');
let show = document.querySelector('.show');
show.onclick = function () {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text');
        show.classList.add('hide');
    } else {
        pswrd.setAttribute('type', 'password');
        show.classList.remove('hide');
    }
}