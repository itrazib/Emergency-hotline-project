// heart button click
console.log("Added js")
let count = 0;
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
    //   coin counter
     const displayCoin = document.getElementById("coin-count");
     const coinCounter = parseInt(displayCoin.innerText)
     const counter = coinCounter;
      if(counter != 0 ){
         alert(`📞 Calling ${heading} ${number}...`)
        const counter = coinCounter - 20;
          displayCoin.innerText = counter; 
      }
      else{
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
      }
       
    })
}