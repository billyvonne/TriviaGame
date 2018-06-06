$('#start').on('click', function(){
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
})

var questions = [{
    question:"During his embarrassing Dundie award presentation, Michael covers a number of popular songs. To whom is Michael presenting a Dundie award when he sings along to 'You Sexy Thing' by '70s British funk band Hot Chocolate?",
    answers:["Ryan", "Kelly", "Jim", "Dwight"],
    correctAnswer:"Ryan"
}, {
    question:"What is Michael Scott's middle name?",
    answers:["William", "Gary", "Thomas", "James"],
    correctAnswer:"Gary"
}, {
    question:"This character became Jim's love interest after he moved to the Stamford branch in season three and joined the Scranton office during the merger. Who left the office to run her own branch when she discovered that Jim was still in love with Pam?",
    answers:["Merideth", "Angela", "Phyllis", "Karren"],
    correctAnswer:"Karren"
}, {
    question:"Dwight K. Schrute is a farmer. What is the name of the vegetable that he mainly farms?",
    answers:["Tomatoes", "Raddish", "Beets", "Lettuce"],
    correctAnswer:"Beets"
}, {
    question:"Which of the following is NOT the name of a character that Michael dates?",
    answers:["Holly", "Carol", "Jan", "Pam"],
    correctAnswer:"Pam"
}, {
    question:"What is the exclusive club that Pam, Oscar, and Toby establish in the episode 'Branch Wars'?",
    answers:["Finer Things Club", "Dunder Mifflin Book Club", "Fancy Things Club", "Tea Time Club"],
    correctAnswer:"Finer Things Club"
}, {
    question:"What city does the Office take place?",
    answers:["Scranton, PA", "Buffalo, NY", "Sanford, CT", "Point Place, WI"],
    correctAnswer:"Scranton, PA"
}, {
    question:"What substance does Jim put office supplies owned by Dwight and Andy into?",
    answers:["Pudding", "Jello", "Beans", "Cofee Beans"],
    correctAnswer:"Jello"
}, {
    question:"Which of the following Dunder Mifflin employees is found out to be gay in the episode 'Gay Witch Hunt'?",
    answers:["Stanley", "Kevin", "Oscar", "Andy"],
    correctAnswer:"Oscar"
}, {
    question:"BJ Novac, who is a writer for the show, plays which character?",
    answers:["Michael Scott", "Dwight Schrute", "Jim Halpert", "Ryan Howard"],
    correctAnswer:"Ryan Howard"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time's up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length; i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
            for(var j=0; j<questions[i].answers.length; j++){
            $('#subwrapper').append('<input type="radio" name="question-'+ i +'" value="' + questions[i].answers[j] + '">' + questions[i].answers[j] + '</input>')
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>');
    },

    done: function(){
        $.each($('input[name="question-0"]:checked'), function(){
            if($(this).val() == questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function(){
            if($(this).val() == questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function(){
            if($(this).val() == questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function(){
            if($(this).val() == questions[3].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function(){
            if($(this).val() == questions[4].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function(){
            if($(this).val() == questions[5].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function(){
            if($(this).val() == questions[6].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function(){
            if($(this).val() == questions[7].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9"]:checked'), function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });

    this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>Complete!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"<h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"<h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}