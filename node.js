const twitter=document.querySelector("#twitter .num")
const youtube=document.querySelector("#youtube .num")
const facebook=document.querySelector("#facebook .num")

let idx=1
  
let interval=setInterval(frame,20)

function frame(){
    idx++;
    if(idx>99){clearInterval(interval)}
    twitter.innerHTML=`${idx*120}`
    youtube.innerHTML=`${idx*50}`
    facebook.innerHTML=`${idx*75}`
}
