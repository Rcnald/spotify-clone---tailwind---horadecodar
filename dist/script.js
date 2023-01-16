let menuButton = document.getElementById('menu-mobile-button');
let menuNav = document.getElementById('menu-nav');

menuButton.addEventListener('click',function(){
    menuButton.classList.toggle('fa-bars')

    menuButton.classList.toggle('fa-solid')
    menuButton.classList.toggle('fa-xmark')

    menuButton.classList.toggle('text-3xl')
    menuButton.classList.toggle('text-2xl')

    menuNav.classList.toggle('hidden')
    menuNav.classList.toggle('flex')

})
