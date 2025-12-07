let text = document.querySelector("textarea");
let img3 = document.querySelector("#image3");
let img4 = document.querySelector("#image4");
let btn = document.querySelector("#nextbtn3");
btn.disabled = true;
function check(){
    if (text.value.trim() == ""){
        changeimgerror();
        btn.disabled = true;
        showerror("Please enter your message!");
        
    }
    else{
        normalimg();
        btn.disabled = false;
        hideerror();
        
    }
}

function changeimgerror(){
    img3.style.display = "none";
    img4.style.display = "block";
}
function normalimg(){
    img3.style.display = "block";
    img4.style.display = "none";
}
text.addEventListener("input",check)

function showerror(){
    img4.classList.add("shake");
    text.classList.add("errorarea");
}
function hideerror(){
    text.classList.remove("errorarea");
}