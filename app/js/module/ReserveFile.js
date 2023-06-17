
import { CreatCard } from "./makeCard.js";
const mainCard_parentDiv = document.querySelector(".main__cards");


const  SERVER_URL = `https://hp-api.onrender.com/api/characters`;
 export const MakeCard = async () =>{
    try {
        let {data} = await axios(SERVER_URL);
        console.log(data);
        const arrPhoto = [];
        const arrMenPhoto = [];
        const arrGirlPhoto = [];
         data.map((info) => {
         
        switch (info.image) {
            case "":
                switch (info.gender) {
                    case `male`:
                        info.image = "./image/anonMan.png" ;
                        arrMenPhoto.push(info)
                        break;
                        
                        default:
                        info.image = "./image/anonGirl.png" ;
                        arrGirlPhoto.push(info)
                        break;
                }
                break;
            default:
                arrPhoto.push(info)
            break;

        
        };
    });
    const allArr = [
        ... arrPhoto,
        ... arrGirlPhoto ,
        ... arrMenPhoto ,
    ];
    CreatCard(allArr , mainCard_parentDiv);

        
        
    } catch (err) {
        mainCard_parentDiv.innerHTML = `<p style="text-align: center;font-size: 45px; color: white; font-weight: bold;">A server error has occurred</p>`
    }
};