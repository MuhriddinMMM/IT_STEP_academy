let mainNav = document.querySelector('.main-nav'), 
    menuBtn = document.querySelector('.mobile-toggle');;
menuBtn.addEventListener('click',function(){
  mainNav.classList.toggle('open');
})