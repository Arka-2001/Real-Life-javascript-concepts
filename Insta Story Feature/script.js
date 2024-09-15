

var array=[
    {
        dp:"https://plus.unsplash.com/premium_photo-1723914107316-87a394faca93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2slMjBiaWtpbml8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1509733744500-6ca95eb595ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1517801635131-21c8f68fc4d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1529744462063-354be2028f49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1530658475523-40059c17a6b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1515161318750-781d6122e367?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1664359678863-a53f20264221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1529933240548-1c6394b149e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1691315720837-ba3509f28ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1593535726432-aaea2d189ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJlYWNrJTIwYmlraW5pfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1698447695797-df112ffb87fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://plus.unsplash.com/premium_photo-1687186953637-78a495aec485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1574539602047-548bf9557352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww",
        story:"https://plus.unsplash.com/premium_photo-1677283510950-54741b2c305f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMG1vZGVsfGVufDB8fDB8fHww"
    },
]


var clutter=""
array.forEach(function(elem,idx){
    clutter+=`  <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
// console.log(clutter);
document.querySelector(".storiyan").innerHTML=clutter

document.querySelector(".storiyan").addEventListener("click",function(dets){
    // console.log(array[dets.target.id].story);
    document.querySelector(".fullscreen").style.display="block"
    document.querySelector(".fullscreen").style.backgroundImage=`url(${array[dets.target.id].story})`
})

setTimeout(function(){
    document.querySelector(".fullscreen").style.display="none"
},3000)