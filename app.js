let countElem = document.getElementById("count");
count = countElem.innerText; 
let convCount = parseInt(count);
console.log(convCount);

const addbtn = document.getElementById("addid");
const subbtn = document.getElementById("subid");
const resbtn = document.getElementById("resid");
const seatbtn = document.querySelector(".seatClass");

addbtn.addEventListener("click", addFunc);
subbtn.addEventListener("click", subFunc);
resbtn.addEventListener("click", resetFunc);
seatbtn.addEventListener("click",seatSelect);

function addFunc() {
    console.log("clicked")
    convCount = convCount + 1
    countElem.innerText = convCount;
}

function subFunc() {
    console.log("clicked")
    if (convCount !== 0) {
    convCount = convCount - 1
    countElem.innerText = convCount;

}

}

function resetFunc() {

    countElem.innerText = 0;

}

function seatSelect() {

console.log("clicked")
seatbtn.classList.toggle("activa")
}