
const modal = document.querySelector(".modal__cards");
const overlay = document.querySelector(".owerlay");

const showModal = () => {
  modal.classList.add("show");
  overlay.classList.add("show");
};

const closeModal = () => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
};


export const CreatModal = (CardBtn = null, info = null) => {
    // console.log(info);
  CardBtn.forEach((CardBtn) => {

    CardBtn.addEventListener("click", () => {
      const CardBtnId = CardBtn.id;
      const infoCards = info.find(
        (el) => el.id === CardBtnId
      );
      modal.innerHTML = `
      <div class="card">
      <div class="card__close">
 <img src="./image/close-svgrepo-com.svg" style="width: 5rem; height: 5rem;" alt="">
      </div>
      <div class="card__house__logo">
          <img src="${infoCards.logoHouse}" alt="logo">
      </div>
  <div class="card__items">
      <div class="card__name"> 
         <div class="card__name__pers">
             <h3>
                 Name: <span> ${infoCards.name}</span> 
             </h3>
             <h3>
                 Alternate_names: <span> "${infoCards.alternate_names}"</span> 
             </h3>
             <h3>Species: <span>${infoCards.species}</span>
             </h3>
             <h3>Gender: <span>${infoCards.gender}</span>
             </h3>
             <h3>House: <span>${infoCards.house}</span>
             </h3>
             <h3>Date Of Birth: <span>${infoCards.dateOfBirth
             }</span>
             </h3>
             
              <h3>Eye Colour: <span>${infoCards.eyeColour}</span>
              </h3>
              <h3>Hair Colour: <span>${infoCards.hairColour}</span>
              </h3>
             <h3>Wizard: <span>${infoCards.wizard}</span>

             </h3>
             <h3>Ancestry: <span${infoCards.ancestry}</span>
             </h3>
             <h3>Hogwarts Student:  <span>${infoCards.hogwartsStudent}</span></h3>
            

         </div>
         <div class="card__name__magic">
          <h3 class="wand">Wand: </h3>
          </h3>
          <h3>Wood:  <span>${infoCards.wand.wood}</span></h3>
          <h3>Core:  <span>${infoCards.wand.core}</span></h3>
          <h3>Length:  <span>${infoCards.wand.lenght}</span></h3>
          <h3>Patronus:  <span>${infoCards.wand.patronus}</span></h3>
         </div>
      </div>
      <div class="card__name__Actor">
          <div class="Actor">

              <h3>Actor: <span>${infoCards.actor}</span>
              </h3>
              <h3>Alternate actors: <span>${infoCards.alternate_actors}</span>
              </h3>
          </div>
      </div>
      </div>
     
  </div>
		`;

      showModal();

      const closeModalBtn = document.querySelector(".card__close");

      closeModalBtn.addEventListener("click", closeModal);
      overlay.addEventListener("click", closeModal);
    });
    
  });
};


