let div = document.querySelectorAll('div');
let body = document.querySelector('body');
let deleteLater1 = document.querySelector('#deleteLater1');
let deleteLater2 = document.querySelector('#deleteLater2');
deleteLater1.addEventListener('mousedown', () => {
    for (let i = 0; i < div.length; i++) {
        div[i].classList.toggle('blackBorder');
    }
}
)
deleteLater2.addEventListener('mousedown', () => {
        body.classList.toggle('blackBorder');
}
)