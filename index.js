
window.onload=function(){
// ----------------------------------hiện food------------------------------------
    let food=document.querySelector("#food")
    let drink=document.querySelector("#drink")
let foodclose=document.querySelector("#food-close")
let foodxacnhan=document.querySelector("#food-xacnhan")
food.addEventListener("click",function(){
    document.querySelector(".food-drink").style.display="flex"
})
drink.addEventListener("click",function(){
    document.querySelector(".food-drink").style.display="flex"
})
foodclose.addEventListener("click",function(){
    document.querySelector(".food-drink").style.display="none"
})
foodxacnhan.addEventListener("click",function(){
    document.querySelector(".food-drink").style.display="none"
})
// -------------------------------hiện đăng kí---------------------------------
let addressbtn= document.querySelector('#sign')
let addressclose=document.querySelector('#addres-close')
addressbtn.addEventListener("click",function(){
    document.querySelector(".addres").style.display="flex"
})
addressclose.addEventListener("click",function(){
    document.querySelector(".addres").style.display="none"
})
// ---------------------------------------đổi màu ô đặt vé----------------------------------
// let buttons=document.querySelectorAll('.hang1>button');
// console.log(buttons)
// for(let button of buttons){
//     button.onclick=function(){
//         if(button.style.backgroundColor==="white"){
//         button.style.backgroundColor="rgb(227, 39, 165)";
//     }else{
//         button.style.backgroundColor="white";
//     }
// }
// }
// let buttons2=document.querySelectorAll('.hang2');
// console.log(buttons2)
// for(let button of buttons2){
//     button.onclick=function(){
//         if(button.style.backgroundColor==="white"){
//         button.style.backgroundColor="rgb(227, 39, 165)";
//     }else{
//         button.style.backgroundColor="white";
//     }
// }
// }
// -----------------------------------hiện đăng nhập--------------------------------
let addressbtns=document.querySelector('#sign-in')
let addresscloses=document.querySelector('#address-close')
addressbtns.addEventListener("click",function(){
    document.querySelector(".address").style.display="flex"
})
addresscloses.addEventListener("click",function(){
    document.querySelector(".address").style.display="none"
})

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
}
// -------------------------------------------hiện check----------------------------------
// let xacnhan1=document.querySelector('#butxacnhan1')
//         let checkclose=document.querySelector('#check-close')
//         xacnhan1.addEventListener("click",function(){
//             document.querySelector('.check-form').style.display="flex"
//         })
//         checkclose.addEventListener("click",function(){
//             document.querySelector('.check-form').style.display="none"
//         })
// }
// -----------------------------------back to top--------------------------------
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
// ---------------------------------------------đổi màu ô phim-----------------------------------
let buttons = $(".hang1>button");
buttons.each(function() {
    $(this).on("click", function() {
        if ($(this).css('backgroundColor') === 'rgb(255, 255, 255)') {
            $(this).css('backgroundColor', 'rgb(227, 39, 165)');
        } else {
            $(this).css('backgroundColor', 'white');
        }
    });
});
// -----------------------------------------hiện check----------------------------------
let xacnhan1=$('#butxacnhan1')
let checkclose=$('#check-close')
xacnhan1.on("click",function(){
    $('.check-form').css('display','flex');
})
checkclose.on("click",function(){
    $('.check-form').css('display','none');
})
// ------------------------------------------search-----------------------------------------
let $search = $('input');
    let $movi = $('.movi');

    $search.on('input', function() {
        let txt = $(this).val();
        $movi.css('border', '').removeClass('hover-effect');

        let $moviname = $('.movi h2 a');
        $moviname.each(function() {
            if ($(this).text().includes(txt)) {
                $(this).closest('.movi').css('border', '5px solid red').addClass('hover-effect');
            }
        });
    });
});
 
