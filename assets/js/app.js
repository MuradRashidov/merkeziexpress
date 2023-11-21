const burgerMenuTrigger = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".mobileMenu");
let isOpen = false;

burgerMenuTrigger.addEventListener("click",()=>{
     mobileMenu.classList.toggle("toggleBurgerMenu");
     if(!isOpen){
        mobileMenu.classList.remove("d-none")
        isOpen = !isOpen;
     }
     else{
        mobileMenu.classList.add("d-none")
        isOpen = !isOpen;
     }

})