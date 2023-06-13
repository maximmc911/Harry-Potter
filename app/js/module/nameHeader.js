const NameHeader = document.querySelector(".header__title");
let header = `World of Harry Potter`;
let nameHed= [];
export function writeHeaderText() {
   
    let index=0
    const arr = [];
    function Writetext() {
        if ( index < header.length) {
            arr.push(header[index])
            NameHeader.innerHTML =`<h1>${arr.join(``)}</h1>`;
        }
        return index++;
    }
    setInterval(Writetext , 500)
}