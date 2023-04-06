
player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("player1name_").innerHTML=player1_name + " : ";
document.getElementById("player2name_").innerHTML=player2_name + " : ";
 document.getElementById("player1score").innerHTML=player1score;
 document.getElementById("player2score").innerHTML=player2score;
 document.getElementById("question").innerHTML="Question Turn is " + player1_name;
 document.getElementById("answer").innerHTML="Answer Turn is " + player2_name;

 function send(){
    
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number1").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>" + number1 + " X " + number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>" ;
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    

}
 question_turn="player1";
 answer_turn="player2";

 function check()
 {
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score=player1score +1;
            document.getElementById("player1score").innerHTML=update_player1_score;
        
        }
        else
        {
            update_player2_score=player2_score +1;
            document.getElementById("player2score").innerHTML=update_player2_score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn= "player2";
        document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML= "Question Turn - " +player1_name;
    }
 }