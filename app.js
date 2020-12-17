
var alItem = document.querySelectorAll(".item");
var itemPlus = document.querySelectorAll(".fa-plus");
var itemMinus = document.querySelectorAll(".fa-minus");
var totPrice = document.querySelector(".cart-total-price");
var deleteButtons = document.querySelectorAll(".fa-times");
// hearts coloring

deleteButtons.forEach( el => {
  el.addEventListener("click", () => {
    el.parentElement.parentElement.remove()
  });
})

let hearts = document.querySelectorAll('.fa-heart');
console.log(hearts)
Array.from(hearts).map( el => {
el.addEventListener("click" , () => {
  el.classList.toggle("red")
  
});
});

//  Add an Item
Array.from(itemPlus).map(el => {
  el.addEventListener('click', () => {
    el.parentElement.nextElementSibling.value = parseInt(el.parentElement.nextElementSibling.value) + 1;
    var price = Number(el.parentElement.parentElement.nextElementSibling.innerHTML)
    console.log(totPrice);
    console.log(price)
    totPrice.innerHTML = parseInt(totPrice.innerHTML)+ price + "$";
});
});

//delete an item
Array.from(itemMinus).map(el =>{
  el.addEventListener('click', () =>{
    if (parseInt(el.parentElement.previousElementSibling.value) > 0 ){
      el.parentElement.previousElementSibling.value = parseInt(el.parentElement.previousElementSibling.value) - 1;
      var price = Number(el.parentElement.parentElement.nextElementSibling.innerHTML)
    console.log(totPrice);
    totPrice.innerHTML = parseInt(totPrice.innerHTML) - price + "§"}
  });
    });

