const navMain = document.querySelector(".items__nav__main");
const sectioninMain = document.querySelector(".main");

const navGryffindor = document.querySelector(".items__nav__Gryffindor");
const sectionGryffindor = document.querySelector(".Gryffindor");

const navSlytherin = document.querySelector(".items__nav__Slytherin");
const sectionSlytherin = document.querySelector(".Slytherin");

const navHufflepuff = document.querySelector(".items__nav__Hufflepuff");
const sectionHufflepuff = document.querySelector(".Hufflepuff");

const navRavenclaw = document.querySelector(".items__nav__Ravenclaw");
const sectionRavenclaw = document.querySelector(".Ravenclaw");

const navRavenOther = document.querySelector(".items__nav__Other"); 
const sectionOther = document.querySelector(".Other");

export function menuNav() {
    
    navGryffindor.addEventListener('click', () => {
            sectionGryffindor.classList.toggle("active")
    
            sectioninMain.classList.remove("active");
            sectionSlytherin.classList.remove("active");
            sectionHufflepuff.classList.remove("active");
            sectionRavenclaw.classList.remove("active");
            sectionOther.classList.remove("active");
        } );
    
    navMain.addEventListener('click', () => {
            //! Для возможности закрытия основного меню. Необходимо расскомментировать
          /*   sectioninMain.classList.toggle("active") */ 
    
            sectionGryffindor.classList.remove("active");
            sectionSlytherin.classList.remove("active");
            sectionHufflepuff.classList.remove("active");
            sectionRavenclaw.classList.remove("active");
            sectionOther.classList.remove("active");
        } );
    
        navSlytherin.addEventListener('click', () => {
            sectionSlytherin.classList.toggle("active")
    
            sectioninMain.classList.remove("active");
            sectionGryffindor.classList.remove("active");
            sectionHufflepuff.classList.remove("active");
            sectionRavenclaw.classList.remove("active");
            sectionOther.classList.remove("active");
        } );
    
    navHufflepuff.addEventListener('click', () => {
        sectionHufflepuff.classList.toggle("active")
    
            sectioninMain.classList.remove("active");
            sectionSlytherin.classList.remove("active");
            sectionGryffindor.classList.remove("active");
            sectionRavenclaw.classList.remove("active");
            sectionOther.classList.remove("active");
        } );
    
     navRavenclaw.addEventListener('click', () => {
       sectionRavenclaw.classList.toggle("active")
    
            sectioninMain.classList.remove("active");
            sectionSlytherin.classList.remove("active");
            sectionHufflepuff.classList.remove("active");
            sectionGryffindor.classList.remove("active");
            sectionOther.classList.remove("active");
        } );
    
     navRavenOther.addEventListener('click', () => {
        
        sectionOther.classList.toggle("active")
    
       
            sectioninMain.classList.remove("active");
            sectionSlytherin.classList.remove("active");
            sectionHufflepuff.classList.remove("active");
            sectionRavenclaw.classList.remove("active");
            sectionGryffindor.classList.remove("active");
        } );
}

