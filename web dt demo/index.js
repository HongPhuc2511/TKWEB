window.onload=function(){
    let display=document.getElementById("display");
    let images=document.querySelectorAll(".thumb img");
    for(let im of images){
        im.onclick=function(){
            display.src=this.src;
        }
    }
    let product=document.querySelectorAll(".product>div");
    let but=document.querySelectorAll(".button button");
    for(let bu of but)
        bu.onclick=function(){
        let prefix=this.getAttribute("rel");
        display.setAttribute("src",`images/images/${prefix}1.jpg`);
    for(let i=0;i<images.length;i++)
    images[i].src=`images/images/${prefix}${i+1}.jpg`;
    for(let p of product)
    p.style.background=`linear-gradient(lightblue,${prefix.slice(0,-1)})`;
}  
}