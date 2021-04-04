let accordion = document.getElementById('accordion');
accordion.addEventListener('click', change);
function change(event) {
    var targ = event.target;
    if (targ.tagName !== 'H3') return; 
    if (targ.classList.contains('select')) {
        hideAll();
    } else {
        hideAll();
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}
function hideAll() {
    let h3El = accordion.querySelectorAll('h3');
    let divEl = accordion.querySelectorAll('div');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
    }
}
function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
}