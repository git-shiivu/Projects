let buttonFirst = document.querySelector("#buttonFirst");
let buttonSecond = document.querySelector("#buttonSecond");
let cookiesDiv = document.querySelector("#cookies");

buttonFirst.addEventListener("click", () =>{
    cookiesDiv.style.visibility = "hidden";
});
buttonSecond.addEventListener("click", () =>{
    cookiesDiv.style.visibility = "hidden";
});