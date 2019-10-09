// Button variables
var btn_examiner = document.querySelector("#examiner");
var btn_examinee = document.querySelector("#examinee");
var btn_newReg = document.querySelector("#reg_new_xmnr");
var btn_sign_in = document.querySelector("#sign_in");
var btn_registerThenLogin = document.querySelector("#new_registration");
var btn_write_question = document.querySelector("#save_question");

var quiz = new Array();


// Logical pages for swapping displays
var xmnr_card = document.querySelector("#new_examiner");

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
    document.querySelector("#new_examiner").style="display:none";
    document.querySelector("#build_quiz").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:block";
});

btn_registerThenLogin.addEventListener("click", function(event)
{
    // debugger;
    event.preventDefault();
    document.querySelector("#welcome_page").style="display:none";
    document.querySelector("#new_examiner").style="display:none";
    document.querySelector("#build_quiz").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:block";
});

btn_newReg.addEventListener("click", function(event)
{
    // debugger;
    event.preventDefault();
    document.querySelector("#welcome_page").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:none";
    document.querySelector("#build_quiz").style="display:none";
    document.querySelector("#new_examiner").style="display:block";
});

btn_sign_in.addEventListener("click", function(event)
{
    // debugger;
    event.preventDefault();
    document.querySelector("#welcome_page").style="display:none";
    document.querySelector("#sign_in_examiner").style="display:none";
    document.querySelector("#new_examiner").style="display:none";
    document.querySelector("#build_quiz").style="display:block";
});

btn_write_question.addEventListener("click", function(event){
    debugger;
    var questionForm = $("#myQuestions");
    var question = new Object();
 
    event.preventDefault();
    question.questiontext = $("#myQuestions input[name=question]").val();
    question.image_link = $("#myQuestions input[name=image_link]").val();
    question.audio_link = $("#myQuestions input[name=audio_link]").val();
    question.choices = [$("#myQuestions input[id=option1]").val(), $("#myQuestions input[id=option2]").val(), $("#myQuestions input[id=option3]").val(),$("#myQuestions input[id=option4]").val()];
    question.answer = $("#myQuestions input[id=correct_answer]").val();

    quiz_hldr = quiz.push(question);
    console.log(quiz);
});


// btn_examinee.addEventListener("click", function() 
// {
//     document.getElementById("xmnr_card").style="display:none";
//     document.getElementById("sign_in_examiner").style="display:block";
// });


// Functions
// function write_question()
// {
//     debugger;
//     var questionForm = $("#myQuestions");
//     var question = new Object();
 
//     event.preventDefault();
//     question.questiontext = $("#myQuestions input[name=question]").val();
//     question.image_link = $("#myQuestions input[name=image_link]").val();
//     question.audio_link = $("#myQuestions input[name=audio_link]").val();
//     question.choices = [$("#myQuestions input[id=option1]").val(), $("#myQuestions input[id=option2]").val(), $("#myQuestions input[id=option3]").val(),$("#myQuestions input[id=option4]").val()];
//     question.answer = $("#myQuestions input[id=correct_answer]").val();

//     quiz = push(question);
//     console.log(quiz);
// };