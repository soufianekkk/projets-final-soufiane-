const darkBtn = document.querySelector("#dark");
const navi = document.querySelector("nav");
const btnImg = document.querySelector("#dark img") 
const body = document.querySelector("body");

let onOff = true;

darkBtn.addEventListener('click', function () {
    navi.classList.toggle("navbar-dark");
    navi.classList.toggle("bg-dark");
    darkBtn.classList.toggle("btn-dark")
    document.querySelector("body").classList.toggle("bg-dark");
    

    if (btnImg.getAttribute("src") === "on.png") {
        btnImg.setAttribute("src", "off.png");
    } else {
        btnImg.setAttribute("src", "on.png");
    }
    

    if (onOff) {
        body.style.backgroundImage = "url(nuit.jpg)"
        console.log("C la nui")
        onOff = false;
    } else {
        body.style.backgroundImage = "url(jour.jpg)"
        console.log("C le jour")
        onOff = true;
    }

    console.log(onOff)

})