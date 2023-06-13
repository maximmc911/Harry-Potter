 export const CreatCard = (info , parentDiv )  =>{

 
    parentDiv.innerHTML = info.map(
        (info) => 
        
    `
<div class="main__card">
    <div class="main__card_content">

        <div class="main__card__photo">
            <img src="${info.image}" alt="">
        </div>
        <div class="main__card__name"><p>${info.name}</p></div>
        <div class="main__card__secName"><p>${info.alternate_names}</p></div>
        <div class="main__card__birhday"><p>${info.dateOfBirth}</p></div>
        <div class="main__card__faculty"><p>Faculty:  ${info.house}</p></div>
            <button id="${info.infoid}" class="main__buttomInfo">
             More Info...
            </button>
           
    </div>
</div>
    `
    
    ).join(``);
};
/*
{image , name , alternate_names , house , id }
*/
