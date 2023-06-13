const Timer_ParentDiv = document.querySelector(".timer__check");
export function PresentTimer() {
   function CreatTimes() {
  
  
  const data = new Date();
  
  function CheckData(data) {
      let year =2026- data.getFullYear();
      let mon =11- data.getMonth();
      let day =30 - data.getDate()
      let hour =23- data.getHours();
      let min =59- data.getMinutes();
      let sec =59- data.getSeconds();
      return [{
         year, 
         mon , 
         day , 
         hour , 
         min , 
         sec
      }]
  };
  let time = CheckData(data);
  
  
  const CreatTime = ( time , Timer_ParentDiv )  =>{
      CheckData(data)
  
      Timer_ParentDiv.innerHTML = time.map(
         (info) => 
         
     `
     <div class="timer_year">
     <h2>Year</h2>
     <h3>${info.year}</h3>
  </div>
  <div class="timer__month">
     <h2>Month</h2>
     <h3>${info.mon}</h3>
  </div>
  <div class="timer__day">
     <h2>Day</h2>
     <h3>${info.day}</h3>
  </div>
  <div class="timer__hour">
     <h2>Hour</h2>
     <h3>${info.hour}</h3>
  </div>
  <div class="timer__min">
     <h2>Minute</h2>
     <h3>${info.min}</h3>
  </div>
  <div class="timer__sec">
     <h2>Sec</h2>
     <h3>${info.sec}</h3>
  
  </div>
     `
     
     ).join(``);
  };
  CreatTime(time , Timer_ParentDiv);
   };
   setInterval(CreatTimes , 500 );
   
}