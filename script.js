let $navTrigger = document.getElementById('navTrigger');
let $navMenu = document.getElementById('navMenu');

$navTrigger.addEventListener('click' , () => {
    $navMenu.classList.toggle('Active');
}, true);