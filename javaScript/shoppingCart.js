var btn =document.querySelectorAll(".show")
document.querySelector(".detel_product").style.display="none"



btn.forEach(function(Add_to_shop){
    var Mang_Buy_now =localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
    Add_to_shop.addEventListener("click",function(event){{
var btnItem=event.target
var product =btnItem.parentElement
var productname =product.querySelector("h6").innerText
var productImg=product.querySelector("img").src
var product_price=product.querySelector("p").innerText
var mang_buy_now={
    Mua_img:productImg,
    Mua_title:productname,
    Mua_gia:product_price
}
Mang_Buy_now.push(mang_buy_now)
localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
alert("Thêm vào giỏ hàng thành công")
Gio_hang()

}})

})

var btn1 =document.querySelectorAll(".none")

// console.log(btn)
btn1.forEach(function(Add_to_shop){
    var Mang_Buy_now =localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
    Add_to_shop.addEventListener("click",function(event){{

var btnItem=event.target
var product =btnItem.parentElement
var productname =product.querySelector("h6").innerText
var productImg=product.querySelector("img").src
var product_price=product.querySelector("p").innerText
var mang_buy_now={
    Mua_img:productImg,
    Mua_title:productname,
    Mua_gia:product_price
}
Mang_Buy_now.push(mang_buy_now)
localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
alert("Thêm vào giỏ hàng thành công")
Gio_hang()
}})

})

