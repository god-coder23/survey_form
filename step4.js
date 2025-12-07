//step 1 info
let formgrp = document.querySelector(".form-group input[type='text']");
let btn1 = document.querySelector("#nextbtn2");
if (formgrp && btn1){
btn1.addEventListener("click",function(){
    console.log(formgrp.value);
})
}

//step 2 message
let message = document.querySelector("#message");
let nextbtn1 = document.querySelector("#next-btn");
if (message && nextbtn1){
    nextbtn1.addEventListener("click",function(){
        console.log(message.value);
    })
}
//step 3 checkbox
let options = document.querySelector("#options");
let submit = document.querySelector("#nextbtn");
if (options && submit){
    submit.addEventListener("click",function(){
        console.log(options.value);
    })
}
//step 4 confirmation
