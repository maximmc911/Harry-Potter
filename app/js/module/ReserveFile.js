
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
        console.log(data);
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