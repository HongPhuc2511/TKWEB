window.onload=function(){
    let els=document.querySelectorAll(".forum");
    for(let e of els)
        e.classList.add("animate__animated");
    let evenEles=document.querySelectorAll(".forum:nth-child(even)");
    for(let e of evenEles)
        e.classList.add("animate__backInLeft");
    let oddEles=document.querySelectorAll(".forum:nth-child(odd)");
    for(let e of oddEles)
        e.classList.add("animate__backInRight");
}
