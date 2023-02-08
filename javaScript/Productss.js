document.querySelector(".cover_body").style.display="none"
// Ẩn sản phẩm có class là none
function An_product(){
    document.querySelector(".see_hide").style.display=("none")
    A=document.querySelectorAll(".none")
    for(var i=0;i<A.length;i++){
        A[i].style.display=("none")
    }    
}
An_product()
// function An_product hiện ra
function See_All(){
    // confirm("all")
    document.querySelector(".see_hide").style.display=("block")
    document.querySelector(".see_more").style.display=("none")
    A=document.querySelectorAll(".none")
    for(var i=0;i<A.length;i++){
        A[i].style.display=("block")
    } 
}
// Chạy lại function see_all
function See_Hide(){
    An_product()
    A=document.querySelectorAll(".show")
    for(var i=0;i<A.length;i++){
        A[i].style.display=("block")
    } 
    document.querySelector(".see_more").style.display=("block")
}

// function TimKiem(){
//     var search_pro
// }