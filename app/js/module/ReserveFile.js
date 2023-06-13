
import { CreatCard } from "./makeCard.js";
const mainCard_parentDiv = document.querySelector(".main__cards");


const  SERVER_URL = `https://hp-api.onrender.com/api/characters`;
 export const MakeCard = async () =>{
    try {
        let {data} = await axios(SERVER_URL);
        CreatCard(data , mainCard_parentDiv);
        
        
    } catch (err) {
        mainCard_parentDiv.innerHTML = `<p style="text-align: center;font-size: 45px; color: white; font-weight: bold;">A server error has occurred</p>`
    }
};