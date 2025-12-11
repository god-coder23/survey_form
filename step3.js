let btn = document.querySelector("#nextbtn5");
let img5 = document.querySelector("#image5");
let img6 = document.querySelector("#image6");
let step4 = document.querySelector("st");
let options = document.querySelector("#options");
btn.disabled = true;
checkoption();
btn.addEventListener("click",function(){
    changeimg();
    fly();
})
function fly(){
    img6.classList.add("fly");
    document.querySelector(".container").classList.add("fadeOut");
    setTimeout(() => {
        window.location.href = "step4.html";
    }, 2200);
}
function changeimg(){
    img5.style.display = "none";
    img6.style.display = "block";
}
function checkoption(){
    options.addEventListener("change",function(){
        if (options.value != "" || options.value != "Select the option"){
            btn.disabled = false;
        }
        else{
            btn.disabled = true;
        }
    })
}
function step4page(){
    fetch("step4.html")
        .then(res=>res.text())
        .then(html=>{
            document.querySelector("#step4page").innerHTML()=html;
            document.querySelector("#step4page").classList.add("show");
        })
}