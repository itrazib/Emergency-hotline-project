// heart button click
console.log("Added js")
// heart buttons click using event deligation heart count
let count = 0;
document.getElementById("heart-btn-container").addEventListener("click",function(event){
     const displayCount = document.getElementById("heart-count");
    
    if(event.target.classList.contains('heart-btn')){
       count++;
       displayCount.innerText = count;
    }
})