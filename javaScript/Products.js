// Lấy class left bao phủ class item và gán function
document.querySelector(".left").onclick=function(){
  var list = document.querySelectorAll(".item")
  document.querySelector(".container1").appendChild(list[0])
}

document.querySelector(".right").onclick=function(){
  var list = document.querySelectorAll(".item")
  document.querySelector(".container1").prepend(list[list.length-1])
}