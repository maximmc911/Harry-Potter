
import { CreatCard } from "./makeCard.js";
const mainCard_parentDiv = document.querySelector(".main__cards");


const  SERVER_URL = `https://hp-api.onrender.com/api/characters`;
 export const MakeCard = async () =>{
    try {
        let {data} = await axios(SERVER_URL);
        console.log(data);
        data.map((info) => {
         
        switch (info.gender) {
            case `male`:
                console.log(`${info.name} - men`);
                break;
            case `female`:
                console.log(`${info.name} - women`);
                break;
        
        };
    });

        CreatCard(data , mainCard_parentDiv);
        
        
    } catch (err) {
        mainCard_parentDiv.innerHTML = `<p style="text-align: center;font-size: 45px; color: white; font-weight: bold;">A server error has occurred</p>`
    }
};