const menu = document.querySelector('.menu_movile')
const menuDesplegable = document.querySelector('.menudeplegable')
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    menuDesplegable.classList.toggle('click')
})
