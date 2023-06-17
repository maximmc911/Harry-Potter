
import { CreatCard } from "./makeCard.js";
const mainCard_parentDiv = document.querySelector(".main__cards");
const GryffindorCard_parentDiv = document.querySelector(".Gryffindor__cards");


const  SERVER_URL = `https://hp-api.onrender.com/api/characters`;
 export const MakeCard = async () =>{
    try {
        let {data} = await axios(SERVER_URL);
       const GryffindorCards = [];
        
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

                break;
            case "Slytherin":
                info.logoHouse = "./image/sliz-logo.png";

                break;
            case "":
                info.logoHouse = "./image/Other-logo.png";

                break;
            case "Ravenclaw":
                info.logoHouse = "./image/rave-logo.png";

                break;
            case "Hufflepuff":
                info.logoHouse = "./image/huff-logo.png";

                break;
            
        
            default:
                break;
        }
    });
   
    CreatCard(data , mainCard_parentDiv);

        
        
    } catch (err) {
        mainCard_parentDiv.innerHTML = `<p style="text-align: center;font-size: 45px; color: white; font-weight: bold;">A server error has occurred</p>`
    }
};