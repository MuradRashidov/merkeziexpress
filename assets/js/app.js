const burgerMenuTrigger = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const contact = document.querySelector(".contact");
const aboutImage = document.querySelector(".aboutImage");


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
// aboutImage.addEventListener('mouseover',showFlex);
// aboutImage.addEventListener('mouseleave',hideFlex);

// function showFlex() {
//    contact.classList.remove("d-none");
//    contact.classList.add("d-flex");
//  }

//  function hideFlex() {
//    contact.classList.remove("d-flex");
//    contact.classList.add("d-none");
//  }