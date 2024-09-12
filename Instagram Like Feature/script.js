

const con=document.querySelector(".container")
const loveicon=document.querySelector("i")

con.addEventListener("dblclick",function(){
    // console.log("hello");
    loveicon.style.transform="translate(-50%,-50%) scale(1)"
    loveicon.style.opacity=0.8
    setTimeout(function(){
        loveicon.style.opacity=0;
    },1000)
    setTimeout(function(){
        loveicon.style.transform="translate(-50%,-50%) scale(0)"
    },1200)
})


