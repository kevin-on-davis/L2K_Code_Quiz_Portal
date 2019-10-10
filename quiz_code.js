// Button variables
var btn_examiner = $("#examiner");
var btn_examinee = $("#examinee");
var btn_newReg = $("#reg_new_xmnr");
var btn_sign_in = $("#sign_in");
var btn_registerThenLogin = $("#new_registration");
var btn_write_question = $("#save_question");
var btn_save_quiz = $("#stop_entry")

var quiz = new Array();


// Logical pages for swapping displays
var splash_page = $("#welcome_page");
var register_page = $("#new_examiner");
var login_page = $("#sign_in_examiner");
var question_entry_page = $("#build_quiz");
var student_quiz_pages = $("#student_quiz");

var stop_writing = false;
// var new


// Listeners
btn_examiner.on('click', function()
{
    debugger;
    event.preventDefault();
    splash_page.css("display", "none");
    register_page.css("display", "none");
    question_entry_page.css("display", "none");
    student_quiz_pages.css("display", "none");

    login_page.slideDown("slow");
    login_page.css("display", "block");
});

btn_sign_in.on("click", function()
{
    // debugger;
    event.preventDefault();
    splash_page.css("display", "none");
    register_page.css("display", "none");
    question_entry_page.css("display", "none");
    student_quiz_pages.css("display", "none");

    login_page.slideDown("slow");
    login_page.css("display", "block");
});

btn_registerThenLogin.on("click", function(event)
{
    // debugger;
    event.preventDefault();
    splash_page.css("display", "none");
    register_page.css("display", "none");
    question_entry_page.css("display", "none");
    student_quiz_pages.css("display", "none");

    login_page.slideDown("slow");
    login_page.css("display", "block");
});

btn_newReg.on("click", function(event)
{
    // debugger;
    event.preventDefault();
    splash_page.css("display", "none");
    login_page.css("display", "none");
    question_entry_page.css("display", "none");
    student_quiz_pages.css("display", "none");

    register_page.slideDown("slow");
    register_page.css("display", "block");
});

btn_sign_in.on("click", function(event)
{
    // debugger;
    event.preventDefault();
    splash_page.css("display", "none");
    login_page.css("display", "none");
    register_page.css("display", "none");
    student_quiz_pages.css("display", "none");

    question_entry_page.slideDown("slow");
    question_entry_page.css("display", "block");
});

btn_write_question.on('click', write_question);

btn_save_quiz.on('click', function()
{
    localStorage.setItem("quiz", JSON.stringify(quiz));
    login_page.css("display", "none");
    register_page.css("display", "none");
    student_quiz_pages.css("display", "none");
    question_entry_page.css("display", "none");

    splash_page.slideDown("slow");
    splash_page.css("display", "none");
});


btn_examinee.on('click', function()
{
    btn_examiner.attr("disabled", true)
    splash_page.css("display", "none");
    login_page.css("display", "none");
    register_page.css("display", "none");
    question_entry_page.css("display", "none");

    student_quiz_pages.slideDown("slow");
    student_quiz_pages.css("display", "block");
});
// btn_examinee.addEventListener("click", function() 
// {
//     document.getElementById("xmnr_card").style="display:none";
//     document.getElementById("sign_in_examiner").style="display:block";
// });


// Functions
function write_question()
{
    // debugger;
    event.preventDefault();
    var questionForm = $("#myQuestions");
    var question = new Object();
 
    question.questiontext = $("#myQuestions input[name=question]").val();
    question.image_link = $("#myQuestions input[name=image_link]").val();
    question.audio_link = $("#myQuestions input[name=audio_link]").val();
    question.choices = [$("#myQuestions input[id=option1]").val(), $("#myQuestions input[id=option2]").val(), $("#myQuestions input[id=option3]").val(),$("#myQuestions input[id=option4]").val()];
    question.answer = $("#myQuestions input[id=correct_answer]").val();

    quiz_hldr = quiz.push(question);
    $("#myQuestions")[0].reset;
    // console.log(quiz);
};