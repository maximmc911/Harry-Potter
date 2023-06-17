
import { CreatCard } from "./makeCard.js";

const mainCard_parentDiv = document.querySelector(".main__cards");
const GryffindorCard_parentDiv = document.querySelector(".Gryffindor__cards");
const SlytherinСards_parentDiv = document.querySelector(".Slytherin__cards");
const HufflepuffCards_parentDiv = document.querySelector(".Hufflepuff__cards");
const RavenclawCards_parentDiv = document.querySelector(".Ravenclaw__cards");
const OtherCard_parentDiv = document.querySelector(".Other__cards");


const  SERVER_URL = `https://hp-api.onrender.com/api/characters`;
 export const MakeCard = async () =>{
    try {
        let {data} = await axios(SERVER_URL);

           const GryffindorCards = [];
          const SlytherinСards = [];
          const HufflepuffCards = [];
          const RavenclawCards = [];
          const OtherCard = [];
          data.map((info) => {
          
         switch (info.image) {
             case "":
                 switch (info.gender) {
                     case `male`:
                         info.image = "./image/anonMan.png" ;
                         
                         break;
                         
                         default:
                         info.image = "./image/anonGirl.png" ;
                        
                         break;
                 }
                 break;        
         };
         switch (info.house) {
             case "Gryffindor":
                 info.logoHouse = "./image/Gryffindor-Logo.png";
                 GryffindorCards.push(info);
   
                 break;
             case "Slytherin":
                 info.logoHouse = "./image/sliz-logo.png";
                 SlytherinСards.push(info);
   
                 break;
             case "":
                 info.logoHouse = "./image/Other-logo.png";
                 OtherCard.push(info);
   
                 break;
             case "Ravenclaw":
                 info.logoHouse = "./image/rave-logo.png";
                 RavenclawCards.push(info);
   
                 break;
             case "Hufflepuff":
                 info.logoHouse = "./image/huff-logo.png";
                 HufflepuffCards.push(info);
   
                 break;
             
         
             default:
                 break;
         }
     });
   
       
        

    //! Search start
        const searchmenu = document.querySelector(`.search__form input`);
        searchmenu.addEventListener(`input`, ()=>{
        const text = searchmenu.value;
        const searchedData = data.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase())|| item.house.toLowerCase().includes(text.toLowerCase()) );
            CreatCard(searchedData , mainCard_parentDiv);
        }); 
        const searchGrif = document.querySelector(`.Gryffindor__search__form input`);
        searchGrif.addEventListener(`input`, ()=>{
        const text = searchGrif.value;
        const searchedData = GryffindorCards.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , GryffindorCard_parentDiv);
        }); 
        const searchSlis = document.querySelector(`.Slytherin_search__form input`);
        searchSlis.addEventListener(`input`, ()=>{
        const text = searchSlis.value;
        const searchedData = SlytherinСards.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , SlytherinСards_parentDiv);
        }); 
        const searchHuff = document.querySelector(`.Hufflepuff__search__form input`);
        searchHuff.addEventListener(`input`, ()=>{
        const text = searchHuff.value;
        const searchedData = HufflepuffCards.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , HufflepuffCards_parentDiv);
        }); 
        const searchRav = document.querySelector(`.Ravenclaw_search__form input`);
        searchRav.addEventListener(`input`, ()=>{
        const text = searchRav.value;
        const searchedData = RavenclawCards.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , RavenclawCards_parentDiv);
        }); 
        const searchOther = document.querySelector(`.Other_search__form input`);
        searchOther.addEventListener(`input`, ()=>{
        const text = searchOther.value;
        const searchedData = OtherCard.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , OtherCard_parentDiv);
        }); 

    // !Search End
    CreatCard(data , mainCard_parentDiv);
    CreatCard(GryffindorCards , GryffindorCard_parentDiv);
    CreatCard(SlytherinСards , SlytherinСards_parentDiv);
    CreatCard(HufflepuffCards , HufflepuffCards_parentDiv);
    CreatCard(RavenclawCards , RavenclawCards_parentDiv);
    CreatCard(OtherCard , OtherCard_parentDiv);

        
    } catch (err) {
        mainCard_parentDiv.innerHTML = `<p style="text-align: center;font-size: 45px; color: white; font-weight: bold;">A server error has occurred</p>`
    }
};