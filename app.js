// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-btn");

addToCartBtns.forEach(x=>x.addEventListener("click", addToCart))
function addToCart(e) {
    const quantity = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value;
    productsCountEl.textContent = +productsCountEl.textContent + +quantity;
}
// change like state
let likeBtns = document.querySelectorAll(`.wish-list`);
likeBtns.forEach((btn) => btn.addEventListener(`click`, function(e){
        e.target.classList.toggle(`liked`);
    })
);
// modal
const modal = document.querySelector(".modal")
const moreInfo = document.querySelectorAll(".more-btn");
moreInfo.forEach((x=>x.addEventListener("click",openModal )));
function openModal() {
    modal.classList.add("show")
};
function closeModal() {
    modal.classList.remove("show")
};
let closeBtn = document.querySelector(".btn-close");
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", onClick)
function onClick(e) {
    if(e.target === modal) {
        closeModal()
    }
}
document.querySelector(".submit-form").addEventListener("click", function (e) {
    e.preventDefault();
});
//slider
$(".slider-block").slick({
    autoplay: true,
    dots: true,
});
//onscroll
window.addEventListener("scroll", onScroll)
function onScroll() {
      if(scrollY >= document.body.scrollHeight/2) {openModal()
        window.removeEventListener("scroll",onScroll)
    }
};
// AOS.init();
// counters
const inrecementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");
decrementBtns.forEach(x=>x.disabled = true)
inrecementBtns.forEach(x=>x.addEventListener("click", add))
decrementBtns.forEach(x=>x.addEventListener("click", minus))

function add(e){
   const value = e.target.previousElementSibling.getAttribute("value")
   const decrementBtn = e.target.parentNode.firstElementChild
   const incrementBtn = e.target.parentNode.lastElementChild

   function checkValue() {   
        const newValue = e.target.previousElementSibling.getAttribute("value")
        decrementBtn.disabled = false;
            if(newValue>=10) {incrementBtn.disabled = true;
            }  
    }
    e.target.previousElementSibling.setAttribute("value", +value+1)
    checkValue();
}

function minus(e){

    const value = e.target.nextElementSibling.getAttribute("value")
    const decrementBtn = e.target.parentNode.firstElementChild
    const incrementBtn = e.target.parentNode.lastElementChild
    
    function checkValue() {   
        const newValue = e.target.nextElementSibling.getAttribute("value")
            incrementBtn.disabled = false;
            if(newValue<=1) {decrementBtn.disabled = true;
            }      
    }
    e.target.nextElementSibling.setAttribute("value", +value-1)
    checkValue();
 }

//  //weather
// const API = "216fba67b97500eb7322c4b92f1812e5"
//  fetch(`http://api.openweathermap.org/data/2.5/weather?id=${}&lang=ru&appid=${API}`).then(function (resp) {return resp.json() }).then(function (data) {
//     //добавляем название города
//     document.querySelector('.weather__city').textContent = data.name;
//     //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
//     document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
//     //Добавляем описание погоды
//     document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
//     //Добавляем иконку погоды
//     document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//     })
//     .catch(function () {
//         //Обрабатываем ошибки
//     });

// class Counter {
//     constructor(incrementBtn, decrementBtn, inputField) {
//         this.domRefs = {
//             incrementBtn,
//             decrementBtn,
//             inputField,
//         };
//         this.toggleButtonState = function () {
//             let count = +this.domRefs.inputField.value;
//             this.domRefs.decrementBtn.disabled = count <= 1;
//             this.domRefs.incrementBtn.disabled = count >= 10;
//         };
//         this.toggleButtonState();

//         this.increment = function () {

//             this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
//             this.toggleButtonState();
//         };
//         this.decrement = function () {
//             this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
//             this.toggleButtonState();
//         };
//         this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
//         this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
//     }
// }

// const counter1 = new Counter(inrecementBtns,derecementBtns,productsCount)
// console.log(counter1);


