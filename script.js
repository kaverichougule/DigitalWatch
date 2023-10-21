let hrs=document.getElementById("hours")
let min=document.getElementById("minutes")
let sec=document.getElementById("seconds")
let AmPm=document.getElementById("ampm")


function updateClock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"

    if(h>12){
        h=h-12
        ampm="PM"
    }
    h= (h<10?"0":"")+h
    m= (m<10?"0":"")+m
    s= (s<10?"0":"")+s

    hrs.innerText=h
    min.innerText=m
    sec.innerText=s
    AmPm.innerHTML=`
    <div class="col">&nbsp;${ampm}</div>`
    setTimeout(()=>{
        updateClock();
    },1000)
}
updateClock()
