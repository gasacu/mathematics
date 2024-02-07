let $navTrigger = document.getElementById('navTrigger');
let $navMenu = document.getElementById('navMenu');

$navTrigger.addEventListener('click' , () => {
    $navMenu.classList.toggle('Active');
}, true);


document.querySelectorAll('.NavRightListItemLink').forEach(item => {
    item.addEventListener('click', function() {
        // Toogle active class to show or hide the sublist
        var sublist = this.nextElementSibling;
        if (sublist.classList.contains('active')) {
            sublist.classList.remove('active');
        } else {
            // Hide all other sublists
            document.querySelectorAll('.NavRightSubList').forEach(sub => {
                sub.classList.remove('active');
            });
            // Show this sublist
            sublist.classList.add('active');
        }
    });
});

document.addEventListener('click', function(event) {
    var navRight = document.querySelector('.NavRight');
    var clickedInsideNavRight = navRight.contains(event.target);

    if (!clickedInsideNavRight) {
        //Clicked outside .NavRight, so hide all sublists
        document.querySelectorAll('.NavRightSubList').forEach(sub => {
            sub.classList.remove('active');
        });
    }
});