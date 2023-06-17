/* 



const searchInputValue = document.querySelector(`.search__form input`);
console.log(searchInputValue);
export function AllSearch() {
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
 */
    //! Search start
/* const searchInputValue = document.querySelector(`.search__form input`);
    console.log(searchInputValue);
    
 searchInputValue.addEventListener(`input`, ()=>{
    const text = searchInputValue.value;
   
    console.log(text);
    const searchedData = data.filter(item => 
        item.name.toLowerCase().includes(text.toLowerCase()));
        CreatCard(searchedData , mainCard_parentDiv);
    }); */
    // !Search End
/*     CreatCard(data , mainCard_parentDiv);
    CreatCard(GryffindorCards , GryffindorCard_parentDiv);
    CreatCard(SlytherinСards , SlytherinСards_parentDiv);
    CreatCard(HufflepuffCards , HufflepuffCards_parentDiv);
    CreatCard(RavenclawCards , RavenclawCards_parentDiv);
    CreatCard(OtherCard , OtherCard_parentDiv); */
/* 
searchInputValue.addEventListener(`input`, ()=>{
const text = searchInputValue.value;

console.log(text);
const searchedData = data.filter(item => 
    item.name.toLowerCase().includes(text.toLowerCase()));
    CreatCard(searchedData , mainCard_parentDiv); */
/* });
} */
export function makeSearch() {
    const searchmenu = document.querySelector(`.search__form input`);
        console.log(searchInputValue);
        
        searchmenu.addEventListener(`input`, ()=>{
        const text = searchmenu.value;
       
        console.log(text);
        const searchedData = data.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , mainCard_parentDiv);
        }); 
        const searchedData = data.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , mainCard_parentDiv);
        }); 
    
    const searchGrif = document.querySelector(`.search__form input`);
        console.log(searchGrif);
        
     searchInputValue.addEventListener(`input`, ()=>{
        const text = searchGrif.value;
       
        console.log(text);
        const searchedData = data.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase()));
            CreatCard(searchedData , mainCard_parentDiv);
        }); 
    
};