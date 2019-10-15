// Button variables
var btn_examiner = $("#examiner");
var btn_examinee = $("#examinee");
var btn_newReg = $("#reg_new_xmnr");
var btn_sign_in = $("#sign_in");
var btn_registerThenLogin = $("#new_registration");
var btn_write_question = $("#save_question");
var btn_save_quiz = $("#stop_entry");
var btn_start_quiz = $("#start_quiz");
var btn_cancel_quiz = $("#cancel_quiz");
var btn_confirm_answer = $("#submit_answer")
var btn_saveStudent_info = $("#saveStudentResult");
var btn_show_LdrBrd = $("#showLeaderBoard");

var quiz = new Array();
var leader_board = new Array();


// Logical pages for swapping displays
var splash_page = $("#welcome_page");
var register_page = $("#new_examiner");
var login_page = $("#sign_in_examiner");
var question_entry_page = $("#build_quiz");
var student_quiz_page = $("#student_quiz");
var quiz_question_pages = $("#quiz_question");
var saveResults = $("#show_StudentResults");

// Constant declaration
const penalty = 10;

// Variable declaration
var quiz_life  = 0;
var question_life = 0;
var q_index = 0;
var correct_cnt = 0;
var incorrect_cnt = 0;
var myPeriod;

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
    student_quiz_page.css("display", "none");

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
    student_quiz_page.css("display", "none");

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
    student_quiz_page.css("display", "none");

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
    student_quiz_page.css("display", "none");

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
    student_quiz_page.css("display", "none");

    question_entry_page.slideDown("slow");
    question_entry_page.css("display", "block");
});

btn_write_question.on('click', write_question);

btn_save_quiz.on('click', function()
{
    localStorage.setItem("quiz", JSON.stringify(quiz));
    login_page.css("display", "none");
    register_page.css("display", "none");
    student_quiz_page.css("display", "none");
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

    student_quiz_page.slideDown("slow");
    student_quiz_page.css("display", "block");
});

btn_start_quiz.on("click", function()
{
    // debugger;
    event.preventDefault();
    // student_quiz_page.css("display", "none");

    q_index = 0;
    correct_cnt = 0;
    incorrect_cnt = 0;
    sample_quiz();
    ls_quiz = JSON.parse(localStorage.getItem("quiz"));

    quiz_life  = 1*(15*ls_quiz.length);

    load_questions(ls_quiz, q_index);
    btn_start_quiz.attr("disabled", true);
    btn_confirm_answer.attr("disabled", false);

    myPeriod = setInterval(myQuizInterval, 1000);
});

btn_cancel_quiz.on("click", function()
{
    quiz_question_pages.slideUp("slow");
    login_page.css("display", "none");
    register_page.css("display", "none");
    quiz_question_pages.css("display", "none");
    question_entry_page.css("display", "none");
    quiz_question_pages.css("display", "block");

    // student_quiz_page.css("display", "block");
    btn_start_quiz.attr("disabled", false);
    clearInterval(myPeriod);

})

btn_confirm_answer.on("click", function()
{
    if ($("input[name='option']:checked").val() == ls_quiz[q_index].answer)
    {
        // increment correct counter
        correct_cnt++;
    }
    else
    {
        // Increment incorrect answer
        // apply time penalty 
        incorrect_cnt++;
        quiz_life = Math.max(quiz_life - penalty, 0);

    };

    q_index ++;
    if (q_index < ls_quiz.length)
    {
        load_questions();
    }
    else
    {
        btn_confirm_answer.attr("disabled", true);
        quiz_question_pages.slideUp("slow");
        quiz_question_pages.css("display", "none");
        saveResults.css("display", "block");
        saveResults.slideDown("slow");
        clearInterval(myPeriod);
    };
    question_life = 0;
});

btn_saveStudent_info.on("click", function()
{
    event.preventDefault();
    var student_score = new Array();
    // var leader_board = new Array();

    student_score.student_name = $("#student_name input[name=student-name]").val();
    student_score.grade = Math.round((correct_cnt/ls_quiz.length) * 100);

    debugger;

    if (!localStorage.getItem("quiz_rankings"))
    {
        // student_score = [$("#student_name input[name=student-name]").val(), Math.round((correct_cnt/ls_quiz.length) * 100)];
        leader_board = [student_score];
    }
    else
    {
        leader_board = [JSON.parse(localStorage.getItem("quiz_rankings"))];
        // student_score = [$("#student_name input[name=student-name]").val(), Math.round((correct_cnt/ls_quiz.length) * 100)];
        arr_hldr = leader_board.push(student_score);
    }

    // var arr_hldr = leader_board.push(student_score);

    for (i=0; i < leader_board.length; i++)
    {
        $("#show_StudentResults").html(`<div width="4vw">${leader_board[i].student_name}</div> <div width="2vw">${leader_board[i].grade}</div>`).appendTo("#ldr_brd_window");
    }
});


// Functions
function sample_quiz()
{
    let question = new Object();
 
    question.questiontext = "What is the real name of the mutant known as Wolverine?";
    question.image_link = "";
    question.audio_link = "";
    question.choices = ["Logan", "James Howlett", "Victor Creed", "Kyle Gibny"];
    question.answer = "James Howlett";

    quiz_hldr = quiz.push(question);

    question.questiontext = "What cosmic power possessed Jean Grey?";
    question.image_link = "";
    question.audio_link = "";
    question.choices = ["Power Cosmic", "Power Primordial", "Phoenix Force", "Cytorrak"];
    question.answer = "Phoenix Force";

    quiz_hldr = quiz.push(question);

    question.questiontext = "What smell accompanies Nightcrawler's teleportation?";
    question.image_link = "";
    question.audio_link = "";
    question.choices = ["levender", "brimstone", "sulpher", "ammonia"];
    question.answer = "brimstone";

    quiz_hldr = quiz.push(question);

    question.questiontext = "What effect does Shadowcat's phasing have on machinery?";
    question.image_link = "";
    question.audio_link = "";
    question.choices = ["fuses parts", "disintegrates metal", "no effect", "disrupts electrical fields"];
    question.answer = "disrupts electrical fields";

    quiz_hldr = quiz.push(question);

    question.questiontext = "Which villian is linked to Havok, by way of the energy which provides their power?";
    question.image_link = "";
    question.audio_link = "";
    question.choices = ["The Living Monolith", "Omega Red", "Polaris", "Captain Marvel"];
    question.answer = "The Living Monolith";

    quiz_hldr = quiz.push(question);

    localStorage.setItem("quiz", JSON.stringify(quiz));
};

function write_question()
{
    event.preventDefault();
    var question = new Object();
 
    question.questiontext = $("#myQuestions input[name=question]").val();
    question.image_link = $("#myQuestions input[name=image_link]").val();
    question.audio_link = $("#myQuestions input[name=audio_link]").val();
    question.choices = [$("#myQuestions input[id=option1]").val(), $("#myQuestions input[id=option2]").val(), $("#myQuestions input[id=option3]").val(),$("#myQuestions input[id=option4]").val()];
    question.answer = $("#myQuestions input[id=correct_answer]").val();

    quiz_hldr = quiz.push(question);
    $("#myQuestions").reset;
};

function load_questions()
{
    event.preventDefault();
    question_life = 0;

    // student_quiz_page.css("display", "none");
    quiz_question_pages.css("display", "block");
    quiz_question_pages.slideUp("slow");
    if (!ls_quiz[q_index].audio_link)
    {
        // $(`<audio controls><source src="https://freesound.org/people/RICHERlandTV/sounds/216090/" /></audio>`);
        $(ls_quiz[q_index].audio_link).appendTo("#audio_box");
    }
    $("#ask_question").html(ls_quiz[q_index].questiontext);
    $("#rb_group").empty();
    for (ch_index=0; ch_index < ls_quiz[q_index].choices.length; ch_index++)
    {
        $(`<span><input id="rb_grp_item" type="radio" name="option" value="${ls_quiz[q_index].choices[ch_index]}" /> ${ls_quiz[q_index].choices[ch_index]}</span>`).appendTo("#rb_group");
    }

    quiz_question_pages.slideDown("slow");
    // q_index++;
}

function myQuizInterval()
    {

        if (String(Math.floor(quiz_life/3600)).padStart(2, 0) + ':' +
        String(Math.floor(quiz_life/60)).padStart(2,0) + ':' +
        String(Math.floor(quiz_life % 60)).padStart(2, 0) == "00:00:00")
        {
            clearInterval(myPeriod);
            btn_confirm_answer.attr("disabled", true);
        }
        else
        {
            quiz_life -= 1;
            question_life += 1;

            $("#quiz_timer").html("Quiz Timer : " + String(Math.floor(quiz_life/3600)).padStart(2, 0) + ':' +
            String(Math.floor(quiz_life/60)).padStart(2,0) + ':' +
            String(Math.floor(quiz_life % 60)).padStart(2, 0));

            $("#question_timer").html("Question Timer : " + String(Math.floor(question_life/3600)).padStart(2, 0) + ':' +
            String(Math.floor(question_life/60)).padStart(2,0) + ':' +
            String(Math.floor(question_life % 60)).padStart(2, 0));
        }
    }


