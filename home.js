//firstname
let nameinput = document.querySelector("#name");
let errortext = document.querySelector(".error1");
let dob = document.querySelector(".error3");
let btn = document.querySelector("#nextbtn2");
let image = document.querySelector("#image1");
let image2 = document.querySelector("#image2");
btn.disabled = true;
function check(){
    let name = nameinput.value.trim();
    if (name==""){
        showerror("First Name cannot be empty!");
        changeimg();
        shakeimg(image2);
    }
    else if (isDigit(name)){
        showerror("First Name cannot be digits");
        changeimg();
        shakeimg(image2);

    }
    else{
        clearerror();
        changeimg();
        normalimg();
    }
}
function showerror(message){
    errortext.textContent = message;
    btn.disabled = true;
    nameinput.classList.add("error");
    
}
function clearerror(){
    errortext.textContent = "";
    nameinput.classList.remove("error");
    if (!showerror && !isDigit){
        btn.disabled = false;
    }
}
function isDigit(name){
    for (let i=0;i<name.length;i++){
        if (name[i]>='0' && name[i]<="9"){
            return true
        }
    else{
        return false
    }
    }
}

nameinput.addEventListener("input",check);

//last name
let lastname = document.querySelector("#lastname");
let error2 = document.querySelector(".error2");
let btn2 = document.querySelector("#nextbtn2");
function check2(){
    let name = lastname.value.trim();
    if (name==""){
        showerror2("Last name cannot be empty!");
        lastname.classList.add("shake1");
        shakeimg(image2);
        changeimg();
    }
    else if (isDigit2(name)){
        showerror2("Last name cannot be digits");
        lastname.classList.add("shake1");
        shakeimg(image2);
        changeimg();
    }
    else{
        clearerror2();
        normalimg(image2);
    }
}
function showerror2(message){
    error2.textContent = message;
    btn2.disabled = true;
    lastname.classList.add("error2");
}
function clearerror2(){
    error2.textContent = "";
    btn2.disabled = false;
    lastname.classList.remove("error2");
}
function isDigit2(name){
    for (let i=0;i<name.length;i++){
        if (name[i]>='0' && name[i]<="9"){
            return true
        }
        else{
            return false
        }
    }
}

lastname.addEventListener("input",check2);

//change image when error
function changeimg(){
    image.style.display = "none";
    image2.style.display = "block";
}
//change to normal
function normalimg(){
    image.style.display = "block";
    image2.style.display = "none";
}

//shaking image
function shakeimg(img){
    img.classList.add("shake");
    setTimeout(() => {
        img.classList.remove("shake");
    }, 800);
}

//dob incorrect