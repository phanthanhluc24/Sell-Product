var demo=""
function listCategory(){
    for (let i=0; i<=category.length-1;i++){
        demo+='<div class="col-3"'; 
        demo += '<div class="card" style="width: 18rem; margin-left:15px;margin-bottom:20px;box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.12);border-radius: 8px;line-height:40px">'
        demo += '<img src="'+category[i].picture+'" class="card-img-top"  style="width: 270px;height:190px;border-radius:10px;" alt="...">'
        demo += '<div class="card-body">';
        demo += '<img src=" '+category[i].icon+'" class="">';
        demo += '<p class="card-text" style=" font-family: "Roboto",sans-serif;"> '+category[i].title+'</p>';
        demo += '</div>';
        demo += '</div>';
    }
    console.log(demo);
    document.getElementById("ss3-category").innerHTML += demo;
}