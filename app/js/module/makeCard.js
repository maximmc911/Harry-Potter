 import { CreatModal } from "./modalWindow.js";
 export const CreatCard = (info , parentDiv )  =>{

 
    parentDiv.innerHTML = info.map((info) => 
      
        
    `
<div class="main__card">
    <div class="main__card_content">

        <div class="main__card__photo">
        <div class="heroHouse">
             <img src="${info.logoHouse}" alt="">
             </div>
            <div class="heroPhoto">
            <img src="${info.image}" alt="">
            </div>
        
        </div>
        <div class="main__card__name"><p>${info.name}</p></div>
        <div class="main__card__secName"><p>${info.alternate_names}</p></div>
        <div class="main__card__birhday"><p>${info.dateOfBirth}</p></div>
        <div class="main__card__faculty"><p>Faculty:  ${info.house}</p></div>
            <button id="${info.id}" class="main__buttomInfo">
             More Info...
            </button>
           
    </div>
</div>
    `
    
    ).join(``);
    const CardBtn = document.querySelectorAll(".main__buttomInfo");
    console.log(CardBtn);
    CreatModal (CardBtn , info);
    console.log(info);
};
/*
{image , name , alternate_names , house , id }
*/
