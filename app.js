let div = document.querySelectorAll('div');
let deleteLater = document.querySelector('#deleteLater');
deleteLater.addEventListener('mousedown', () => {
    for (let i = 0; i < div.length; i++) {
        div[i].classList.toggle('divBorder');
    }
}
)