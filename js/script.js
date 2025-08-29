// heart button click
console.log("Added js")
let count = 0;
const callHistory = [];
// count the coin
function getCoinCounter(){
    
             
}
// count the heart
function getHeartConter(){
   const displayCount = document.getElementById("heart-count");
    count++;
       displayCount.innerText = count;
}
// heart buttons click using event deligation heart count
document.getElementById("btn-container").addEventListener("click",function(event){
     
    if(event.target.classList.contains('heart-btn')){
      getHeartConter();
    }
})
const buttons = document.querySelectorAll('.call-btn');
for(const button of buttons){
    button.addEventListener("click", function(){
       const inner =  button.closest('.card');
       const heading = inner.querySelector('.heading').innerText;
       const number = inner.querySelector('.number').innerText;
       const history = document.querySelector('#call-list')
       const data = {
        heading:heading,
        number : number,
        time: new Date().toLocaleTimeString()
       }
       callHistory.push(data);
    //   coin counter
     const displayCoin = document.getElementById("coin-count");
     const coinCounter = parseInt(displayCoin.innerText)
     const counter = coinCounter;
      if(counter != 0 ){
         alert(`📞 Calling ${heading} ${number}...`)
        const counter = coinCounter - 20;
          displayCoin.innerText = counter; 
          const div = document.createElement("div");
          div.innerHTML = `
                <div class="flex justify-between items-center my-5 mx-1 p-5 rounded-[12px] bg-[#fafafa]">
                   <div>
                     <h2 class="text-[20px] font-semibold"> ${data.heading}</h2>
                    <h2 class="text-[18px] text-[#5C5C5C]">${data.number}</h2>
                   </div>
                    <div>
                        <p class="text-[18px]">${data.time}</p>
                    </div>
              </div>
            `
            history.appendChild(div);
      }
      else{
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
      }
       
    })
}