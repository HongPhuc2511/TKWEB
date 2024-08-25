// -------------------------------hiện đăng kí---------------------------------
window.onload=function(){
let addressbtn= document.querySelector('#sign')
let addressclose=document.querySelector('#addres-close')
addressbtn.addEventListener("click",function(){
    document.querySelector(".addres").style.display="flex"
})
addressclose.addEventListener("click",function(){
    document.querySelector(".addres").style.display="none"
})
// -----------------------------------hiện đăng nhập--------------------------------
let addressbtns=document.querySelector('#sign-in')
let addresscloses=document.querySelector('#address-close')
addressbtns.addEventListener("click",function(){
    document.querySelector(".address").style.display="flex"
})
addresscloses.addEventListener("click",function(){
    document.querySelector(".address").style.display="none"
})
// ---------------------------------------đổi màu ô đặt vé----------------------------------
let buttons=document.querySelectorAll('.hang1>button');
for(let button of buttons){
    button.onclick=function(){
        if(button.style.backgroundColor==="white"){
        button.style.backgroundColor="rgb(227, 39, 165)";
    }else{
        button.style.backgroundColor="white";
    }
}
}
// ----------------------------------------hiện đặt vé-------------------------------------
let datve=document.querySelector('.datve')
let closechonghe=document.querySelector('#chonghe-close')
let xacnhan=document.querySelector('.butxacnhan')
datve.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
closechonghe.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="none";
})
xacnhan.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="none";
})
// ----------------------------------------search----------------------------------------
let search=document.querySelector('input')
let movi=document.querySelector('.movi')
console.log(movi)
    search.onchange=function(){
        let txt=this.value;
        for(let m of movi){
            m.style.border="";
        }
        console.log(movi)
        let moviname=document.querySelectorAll('.movi h2 a')
        for(let m of moviname){
            if(p.innerText.includes(txt)===true){
                p.parentElement.style.border="2px solid red"
            }          
        }
    }
// --------------------------------------phim sap chieu---------------------------------------
let phimdangchieu=document.querySelector('.phimdangchieu')
    let phimsapchieu=document.querySelector('.phimsapchieu')
    phimdangchieu.addEventListener("click",function(){
        document.querySelector('.movies').style.display="flex"
        document.querySelector('.movies1').style.display="none"
    })
    phimsapchieu.addEventListener("click",function(){
        document.querySelector('.movies').style.display="none"
        document.querySelector('.movies1').style.display="flex"
    })
// ------------------
let datve100=document.querySelector('.datve100')
datve100.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve2=document.querySelector('.datve2')
datve2.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve3=document.querySelector('.datve3')
datve3.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve4=document.querySelector('.datve4')
datve4.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve5=document.querySelector('.datve5')
datve5.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve6=document.querySelector('.datve6')
datve6.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve7=document.querySelector('.datve7')
datve7.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve8=document.querySelector('.datve8')
datve8.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve9=document.querySelector('.datve9')
datve9.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve10=document.querySelector('.datve10')
datve10.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve11=document.querySelector('.datve11')
datve11.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve12=document.querySelector('.datve12')
datve12.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve13=document.querySelector('.datve13')
datve13.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve14=document.querySelector('.datve14')
datve14.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
let datve15=document.querySelector('.datve15')
datve15.addEventListener("click",function(){
    document.querySelector(".chonghe").style.display="flex";
})
// -------------------------------------------hiện check----------------------------------
let xacnhan1=document.querySelector('#butxacnhan1')
        let checkclose=document.querySelector('#check-close')
        xacnhan1.addEventListener("click",function(){
            document.querySelector('.check-form').style.display="flex"
        })
        checkclose.addEventListener("click",function(){
            document.querySelector('.check-form').style.display="none"
        })

}
// -----------------------------------back to top--------------------------
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#backtotop').fadeIn();
        }else{
            $('#backtotop').fadeOut();
        }
    });
    $('#backtotop').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    })
// ---------------------------------------menu cố định------------------------------------
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('.menucodinh').fadeIn();
        }else{
            $('.menucodinh').fadeOut();
        }
    })
});
// -------------------------------------------hiện check----------------------------------