const sideBar = document.getElementsByClassName("sidebar"); //siderbar
const container = document.getElementsByClassName("container"); // container

// Show Sidebar
function SideBarMenuShow(){
    if(!sideBar[0].classList.contains('sidebar-fixed')){
        sideBar[0].classList.add('sidebar-toggle');
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.height = "auto";
        });
    }
}

// Hide Sidebar
function SideBarMenuHide(){
    if(!sideBar[0].classList.contains('sidebar-fixed')){
        sideBar[0].classList.remove('sidebar-toggle');
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.height = "0";
        });
    }
}

// Show fixed Sidebar
function SideBarFixed(event){
    event.preventDefault();

    if(sideBar[0].classList.contains('sidebar-fixed')){
        sideBar[0].classList.remove('sidebar-fixed');
        container[0].classList.remove('container-shrink');
        SideBarMenuHide();
    }else{
        SideBarMenuShow();
        sideBar[0].classList.add('sidebar-fixed');
        container[0].classList.add('container-shrink');
    }
}

// Events actions
// Sidebar hover
sideBar[0].addEventListener("mouseenter", SideBarMenuShow);
sideBar[0].addEventListener("mouseleave", SideBarMenuHide);

// Button show fixed Sidebar
let btnFixed = document.getElementById("btn-fixedmenu");
btnFixed.addEventListener("click", SideBarFixed);

// Submenu
// Reset submenus, close all
function ResetSubMenu () {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.classList.remove('submenu-collapse');
    });
    document.querySelectorAll('.more').forEach(more => {
        more.classList.remove('more-collapse');
    });
}

// Show/hide submenu, assign event all submenu elements
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', event => {

        arrow = item.querySelector('.more');
        submenu = item.nextElementSibling;

        if(arrow.classList.contains('more-collapse')){ // hide submenu
            arrow.classList.remove('more-collapse');
            submenu.classList.remove('submenu-collapse');
        }else{ // show submenu, previously hide all
            ResetSubMenu();
            arrow.classList.add('more-collapse');
            submenu.classList.add('submenu-collapse');
        }
        
    })
});


// dark/ light theme
changeTheme = function(){
    var css = document.getElementById("theme");

    filename = css.getAttribute('href');
    if(filename == 'css/dark.css'){
        css.setAttribute('href', 'css/light.css');
    }else{
        css.setAttribute('href', 'css/dark.css');
    }
}
// Button show fixed Sidebar
let btnTheme = document.getElementById("btn-change-theme");
btnTheme.addEventListener("click", changeTheme);