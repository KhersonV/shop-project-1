// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-btn");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}

// change like state

let likeBtns = document.querySelectorAll(`.wish-list`);
console.log(likeBtns)
likeBtns.forEach((btn) => btn.addEventListener(`click`, function(e){
    
    e.target.classList.toggle(`liked`);
    e.target.style.background = "red"
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




