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
        <div class="main__card__name"><h4>${info.name}</h4></div>
        <div class="main__card__secName"><h4>${info.alternate_names}</h4></div>
        <div class="main__card__birhday"><h4>${info.dateOfBirth}</h4></div>
        <div class="main__card__faculty"><h4>Faculty:  ${info.house}</h4></div>
            <button id="${info.id}" class="main__buttomInfo">
             More Info...
            </button>
           
    </div>
</div>
    `
    
    ).join(``);
    const CardBtn = document.querySelectorAll(".main__buttomInfo");
    CreatModal (CardBtn , info);
};
/*
{image , name , alternate_names , house , id }
*/
