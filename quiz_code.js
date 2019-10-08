var btn_examiner = document.querySelector("#examiner");
var btn_examinee = document.querySelector("#examinee");
var btn_newReg = document.querySelector("#reg_new_xmnr");
var btn_sign_in = document.querySelector("#sign_in");
var xmnr_card = document.querySelector("#new_examiner");
var btn_registerThenLogin = $(".new_registration");

var stop_writing = false;
// var new


// Listeners
btn_examiner.addEventListener("click", function() 
{
    document.querySelector("#sign_in_examiner").style="display:block";
    document.querySelector("#welcome_page").style="display:none";
    xmnr_card.style="display:none";
});

btn_sign_in.addEventListener("click", function(event)
{
    // debugger;
    event.preventDefault();
    document.querySelector("#welcome_page").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:block";
    document.querySelector("#new_examiner").style="display:none";
});

btn_registerThenLogin.addEventListener("click", function(event)
{
    // debugger;
    event.preventDefault();
    document.querySelector("#welcome_page").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:block";
    document.querySelector("#new_examiner").style="display:none";
});

btn_newReg.addEventListener("click", function(event)
{
    // debugger;
    event.preventDefault();
    document.querySelector("#welcome_page").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:none";
    document.querySelector("#new_examiner").style="display:block";
});

// btn_examinee.addEventListener("click", function() 
// {
//     document.getElementById("xmnr_card").style="display:none";
//     document.getElementById("sign_in_examiner").style="display:block";
// });

btn_newReg.addEventListener("click", function(event)
{
    // debugger;
    event.preventDefault();
    document.querySelector("#welcome_page").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:none";
    document.querySelector("#new_examiner").style="display:block";
});

// Functions
// function write_question()
// {
//     while (!stop_writing)
//     {
//         var QuestionObj
//         {
//             question:,

//         }
//     }
// }