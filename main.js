
let flag = true;
const mobileMenuBtn = document.getElementById('menu_icon');

/* On click on the menu button, toggle the visibility state of the menu button*/
mobileMenuBtn.addEventListener('click', function () {
    
    flag = !flag;

    if (flag) {
        /* Showing the burger menu button*/
        document.getElementById('menu_icon').src = "./assets/img/burger_menu_icon.png";
        document.getElementById("menu_icon").classList.toggle("view");
    } 
    
    else {
        /* Showing the closing menu button*/
        document.getElementById('menu_icon').src = "./assets/img/close_menu_icon.png";
    }
})

function showMenu() {
    /* On click on the menu button, toggle the visibility state of the menu */
    document.getElementById("menupanel").classList.toggle("view");
}