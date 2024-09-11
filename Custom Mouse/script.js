
const cur=document.querySelector(".cursor")
const main1=document.querySelector(".main")

main1.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x+"px"
    cur.style.top=dets.y+"px"
})





