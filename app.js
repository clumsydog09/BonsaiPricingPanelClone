let faqQuesAns = document.querySelectorAll(".faqQuesAns");
let faqAns = document.querySelectorAll(".faqAns");
let faqArrow = document.querySelectorAll(".faqArrow");

for (let i = 0; i < 4; i++) {
    faqQuesAns[i].addEventListener('mousedown', function () {
        faqAns[i].classList.toggle('hidden');
        faqArrow[i].classList.toggle('transform');
    });
}

        faqArrow.addEventListener('mousedown', function () {
        })