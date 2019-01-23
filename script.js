let userScore = 0;
let compScore = 0;
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div  = document.getElementById("k");
const userScore_span = document.getElementById("user-result");
const computerScore_span = document.getElementById("computer-result");

function getCompChoice()
{   var compChoice = ['r', 'p','s','l','k']; 
    var randomNum = Math.floor(Math.random() *5);
    return compChoice[randomNum];
}


function getUserChoice()
{   
rock_div.addEventListener('click', () => results("r"));
    paper_div.addEventListener('click', () => results("p"));
    scissors_div.addEventListener('click', () => results("s")); 
    lizard_div.addEventListener('click', () =>results("l"));
    spock_div.addEventListener('click', () => results("k"));
}

function results(userChoice)
{
    var computerChoice = getCompChoice();
 var choicesCombined=userChoice+computerChoice;
    switch(choicesCombined)
        {
            case 'rr':
            case 'pp':
            case 'ss':
            case 'll': 
            case 'kk':    
              draw(userChoice);
              break;
            case 'rs': 
            case 'rl':    
            case 'pr':
            case 'pk':    
            case 'sp':
            case 'sl':    
            case 'lp':
            case 'lk':
            case 'kr':
            case 'ks':
              win(userChoice);
              break;
            case 'rp':
            case 'rk':    
            case 'ps':
            case 'pl':
            case 'sr':
            case 'sk':
            case 'lr':
            case 'ls':    
            case 'kp':
            case 'kl':    
              lose(userChoice);
              choicesCombined=reverseWord(choicesCombined); /**Reversing the word to be able to choose correctly from the IDs of li in #rules-list **/ 
                break;     }
     document.getElementById("comp_choice").innerHTML = 
       "Comp Choice: " + convertToWord(computerChoice);
document.getElementById("user_choice").innerHTML = "Your choice: "+  convertToWord(userChoice)+  "  ||  ";


   /**To glow the rule that made either of the two sides win**/  document.getElementById(choicesCombined).classList.add("rule-glow");
    setTimeout(()=> document.getElementById(choicesCombined).classList.remove("rule-glow"),1500);
}
function reverseWord(word)
{   var reversed="";
    for (let i=word.length-1; i>=0;i--)
    reversed += word[i];
return reversed;
}
function convertToWord(x)
{
    if (x=== 'r')
      return "Rock";
    else if (x=== 'p')
        return "Paper";
    else if (x === "s")
        return "Scissors";
    else if (x=== "l")
        return "Lizard";
    else return "Spock";
}

function win(userChoice)
{
userScore++;
userScore_span.innerHTML = userScore;    

    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout( () => document.getElementById(userChoice).classList.remove("green-glow"),1000) 


}


function lose(userChoice)
{
    compScore++;
    computerScore_span.innerHTML = compScore;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout( ()=> document.getElementById(userChoice).classList.remove("red-glow"), 1000);
     
    
}

function draw(userChoice)
{
    document.getElementById(userChoice).classList.add("grey-glow"); setTimeout(()=>document.getElementById(userChoice).classList.remove("grey-glow"), 1000);
        
}

function main()
{
    
 getUserChoice();
}

main();