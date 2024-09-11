

// const removebtn=document.querySelector("#remove")
var check=0
const addbtn=document.querySelector("#add")
const stranger=document.querySelector("h4")
 addbtn.addEventListener("click",function changeme(){
    if(check===0)
    {
        stranger.innerHTML="Friends"
        stranger.style.color="green"
        addbtn.innerHTML="Remove Friend"
        addbtn.style.backgroundColor = "grey"
        check=1;
    }

    else
    {
        stranger.innerHTML="Stranger"
        stranger.style.color="red"
        addbtn.style.backgroundColor = "green"
        addbtn.innerHTML="Add Friend"
        check=0;
    }
    

 })

//  removebtn.addEventListener("click",function(){
//     if(stranger.innerHTML=="Friends")
//     {
//         stranger.innerHTML="Stranger"
//         stranger.style.color="red"
//     }
//  })
