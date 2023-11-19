const burgerMenuTrigger = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".mobileMenu");
let isOpen = false;

burgerMenuTrigger.addEventListener("click",()=>{
     mobileMenu.classList.toggle("toggleBurgerMenu");
     if(!isOpen){
        mobileMenu.classList.remove("d-flex")
        isOpen = !isOpen;
     }
     else{
        mobileMenu.classList.add("d-flex")
        isOpen = !isOpen;
     }

})