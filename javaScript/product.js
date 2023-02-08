document.getElementById("update_product").style.display = "none";
var array = localStorage.getItem("list_product")
  ? JSON.parse(localStorage.getItem("list_product"))
  : [];

// Lấy dữ liệu từ form trang Admind
function Save() {
  (img = document.getElementById("anh_sp").value),// Lây giá trị từ form gán cho biến 
    (tile = document.getElementById("You_Name").value),
    (new_price = document.getElementById("Price").value),
    (old_price = document.getElementById("Old_price").value),
    (province = document.getElementById("input_province").value);

  // tạo một mảng lấy dữ liệu từ trên gán cho biến trong mảng
  var Mang = {
    img: img,
    tile: tile,
    new_price: new_price,
    old_price: old_price,
    province: province,
  };

  // Kiểm tra điều kiện
  if (
    img != "" &&
    tile != "" &&
    new_price != "" &&
    old_price != "" &&
    province != ""
  ) {// Tất cả biến phải có dữ liệu mới được đẩy vào LocalStrore
    array.push(Mang);
    localStorage.setItem("list_product", JSON.stringify(array));
  }
  Reset()
  document.querySelector(".container_form_input").style.display = "none";
  Show_style_table();
  Show_Data_Cart();
}
// Sửa thông tin từ Admind
function Editter(index) {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var index_list_pro = (document.getElementById("index_product").value = index);
  document.getElementById("anh_sp").value = array[index_list_pro].img;
  document.getElementById("You_Name").value = array[index_list_pro].tile;
  document.getElementById("Price").value = array[index_list_pro].new_price;
  document.getElementById("Old_price").value = array[index_list_pro].old_price;
  document.getElementById("input_province").value = array[index_list_pro].province;
  document.getElementById("update_product").style.display = "block";
  document.getElementById("save_product").style.display = "none";
  document.querySelector(".container_form_input").style.display = "block";
}
// Cập nhật lại sau khi sửa
function CapNhat() {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var index_list_pro = document.getElementById("index_product").value;
  array[index_list_pro] = {
    img: document.getElementById("anh_sp").value,
    tile: document.getElementById("You_Name").value,
    new_price: document.getElementById("Price").value,
    old_price: document.getElementById("Old_price").value,
    province: document.getElementById("input_province").value,
  };
  localStorage.setItem("list_product", JSON.stringify(array));
  Show_style_table();
  document.getElementById("update_product").style.display = "none";
  document.getElementById("save_product").style.display = "block";
  document.querySelector(".container_form_input").style.display = "none";
}
// Xóa sản phẩm từ Admind
function Deleter(index) {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  array.splice(index, 1);
  localStorage.setItem("list_product", JSON.stringify(array));
  Show_style_table();
}
// Lấy dữ liệu từ admind in ra dạng table ở trang Admind
function Show_style_table() {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var table = `
    <tr class="color_boder">
    <th class="id_product">ID</th>
    <th class="name_product">Name Product</th>
    <th class="price_product">Price</th>
    <th class="price_product_old">Old_Price</th>
    <th class="img_price">Image</th>
    <th class="action_product">Action</th>
  </tr>
  `;
  array.map((value, index) => {
    table += `
      <tr class="color_table_admin">
        <td>${index + 1}</td>
        <td>${value.tile}</td>
        <td>${value.new_price}</td>
        <td>${value.old_price}</td>
        <td><img src="${value.img
      }" alt=""height="50" width="50"  text-align: center;></td>
        <td><i onclick="Editter(${index})" class="fa-solid fa-pen pen_edit"></i> <i onclick="Deleter(${index})" class="fa-solid fa-trash-can trash_can"></i></td>
    </tr>
    `;
    document.querySelector(".Show_products_item").innerHTML = table;
  });
}
// Lấy dữ liệu từ Admind để in dạng card ở trang index
function Show_Data_Cart() {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var card = ``;
  array.map((value, index) => {
    card += `<div class="boder_da_nang" style="margin-left:5px;margin-right:5px,box-shadow:grey;">
       <img id="luc_img" src="${value.img}" height="198" width="224" >
        <h3 class="luc_title">${value.tile}</h3>
        <p class="luc_price">${value.new_price + " VND"}</p>
        <del class="luc_price_old">${value.old_price + " VND"}</del>
        <p class="luc_city">${value.province}</p>
       <button onclick="Detel(${index})" id="chi_tiet">Chi tiết</button> <button onclick="Shoping(${index})" id="cart" title="thêm vào giỏ hàng"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    `;
    document.querySelector(".luc_container_photo").innerHTML = card;
  });
  document.querySelector(".increment_number").innerHTML = Mang_Buy_now.length;
//   setTimeout(() => {
//     window.location.reload();
// }, 6000);
}
// Trang chi tiết sản phẩm
function Detel(index) {
  document.querySelector(".cover_body").style.display="block"
  document.querySelector(".detel_product").style.display = "block"
  var array = localStorage.getItem("list_product") ? JSON.parse(localStorage.getItem("list_product")) : [];
  document.querySelector(".detail_img").src = array[index].img
  document.querySelector(".detai_title").innerText = array[index].tile
  document.querySelector(".detail_price").innerText = array[index].new_price
  document.querySelector(".detail_provice").innerText = array[index].province

}
// Trang thêm vào giỏ hàng 
function Shoping(index) {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  (Buy_now_img = array[index].img),
    (Buy_now_title = array[index].tile),
    (Buy_now_price = array[index].new_price),
    (Buy_now_province = array[index].province);
  var mang_buy_now = {
    Mua_img: Buy_now_img,
    Mua_title: Buy_now_title,
    Mua_gia: Buy_now_price,
    Mua_tinh: Buy_now_province,
  };
  Mang_Buy_now.unshift(mang_buy_now);
  localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
  alert("Thêm vào giỏ hàng thành công");
  // document.querySelector(".increment_number").innerHTML=Mang_Buy_now.length
  Gio_hang();
}
// Trang giỏ hàng sau khi được thêm vào giỏ và đi đén thanh toán
function Gio_hang() {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  var tablet = `
  <tr>
  <th>STT</th>
  <th>Tên sản phẩm</th>
  <th>Ảnh sản phẩm</th>
  <th>Giá</th>
  <th>Số lượng</th>
  <th>Hành động</th>
  <th>Chọn</th>
 </tr>
  `;
  Mang_Buy_now.map((value, index) => {
    tablet += `
    <tr class="color_table_admin">
        <td>${index + 1}</td>
        <td>${value.Mua_title}</td>
        <td><img src="${value.Mua_img
      }" alt="" height="50" width="50"></img></td>
        <td id="gia_pro">${value.Mua_gia}</td>
        <td><input type="number" value="1" id="soluong"></td>
        <td><i onclick="Xoa_ngay(${index})" class="fa-solid fa-trash-can thung_rac"></i></td>
        <td><button class="thanh_toan" onclick="Buy_now(${index})"> OK </button></td>
    </tr>`;
    document.querySelector("#list_product_buy_now").innerHTML = tablet;
  });
}

// Sau khi nhấn Buy now sẽ thực hiện function này để thanh toán
function Buy_now(index) {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  var tieu_de = Mang_Buy_now[index].Mua_title;
  var gia = Mang_Buy_now[index].Mua_gia;
  var soluong = document.getElementById("soluong").value;
  var tong = parseInt(gia) * parseInt(soluong);
  var mua = `
      <h1 style="text-align:center;font-family:'Roboto',sans-serif">Thanh toán</h1>
      <div class="check_out" style="color:#FFFFFF;background-color:#FF006B;font-family: 'Roboto',sans-serif;font-size:20px;margin-top:20px;width:500px;margin-left:500px;padding-left:20px;border: 1px solid black">
      <p>Tên sản phẩm: ${tieu_de}</p>
      <p>Giá sản phẩm: ${gia}</p> 
      <p>Số lượng: ${soluong}</p>
      <p>Tổng: ${tong} </p>
      </div>
      <ul class="display_flex">
        <li><button class="check_out_1" style="width: 200px;margin-left:400px;height: 50x;font-size:24px;font-family:'Roboto',sans-serif;background-color:#1E9FD0 ; " onclick="Toi_Xe_Mua(${index})">Mua Ngay </button> </li>
        <li><button class="back_home" onclick="Go_back()">  <a href="/pages/product.html">Quay Về</a> </button></li>
        <li><button class="buy_again" onclick="Mua_Tiep()">Mua Tiếp </button></li>
      </ul>
      
  `;

  document.getElementById("Tong").innerHTML = mua;
  document.querySelector(".buy_again").style.display = "none";
  document.querySelector(".back_home").style.display = "none";
}
// Xóa sản phẩm từ giỏ hàng nếu không thích mua nữa
function Xoa_ngay(index) {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  Mang_Buy_now.splice(index, 1);
  localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
  Gio_hang();
}

// Sau khi mua sản phẩm sẽ bị xóa
function Toi_Xe_Mua(index) {
  confirm("Bạn đã mua thành công");
  document.querySelector(".buy_again").style.display = "block";
  document.querySelector(".check_out_1").style.display = "none";
  document.querySelector(".back_home").style.display = "block";
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  Mang_Buy_now.splice(index, 1);
  localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
  Gio_hang();
}
// Nhấn mua tiếp sẽ thực hiện lại quá trình trên
function Mua_Tiep() {
  document.querySelector(".check_out").style.display = "none";
  document.querySelector(".check_out_1").style.display = "none";
  Buy_now();
  Toi_Xe_Mua();
}
function Reset() {
  img = document.getElementById("anh_sp").value = "";
  tile = document.getElementById("You_Name").value = "";
  new_price = document.getElementById("Price").value = "";
  old_price = document.getElementById("Old_price").value = "";
  province = document.getElementById("input_province").value = "";
}

document.querySelector(".container_form_input").style.display = "none";

function Add_product() {
  document.querySelector(".container_form_input").style.display = "block";
}

function Close(){
  document.querySelector(".cover_body").style.display="none"
  document.querySelector(".detel_product").style.display = "none"
}













