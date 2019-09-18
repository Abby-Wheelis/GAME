
//functions to react to first answer
function YesMessage() {
  document.getElementById("yesmessage").innerHTML = "Great! Your first step is to choose which door to enter. Click one.";} 
  //pops up message if they choose yes
function NoMessage() {
document.getElementById("nomessage").innerHTML= "Too bad! You have to choose a door anyways!!";}
	//pops up message if they choose no
    

function OneOne() {
 document.getElementById("doorone").innerHTML= "Door 1";}   
function OneTwo() {
 document.getElementById("doortwo").innerHTML= "Door 2";}   
function OneThree() {
 document.getElementById("doorthree").innerHTML= "Door 3";}

 //doors show either way
 
 //attempting second tier rection
function OneMessage() {
    document.getElementById("oneonemessage").innerHTML= "Yay! The room you've entered contains three chests. Which color chest will you choose to open?"}
    
 function TwoOne() {
 document.getElementById("twoone").innerHTML= "Red";}
  function TwoTwo() {
 document.getElementById("twotwo").innerHTML= "Gold";}
  function TwoThree() {
 document.getElementById("twothree").innerHTML= "Silver";}
    
function TwoMessage() {
    document.getElementById("oneonemessage").innerHTML= "You are presented with three dark halways. Which will you explore?"}
    
 function TwoFour() {
 document.getElementById("twofour").innerHTML= "Left";}
  function TwoFive() {
 document.getElementById("twofive").innerHTML= "Middle";}
  function TwoSix() {
 document.getElementById("twosix").innerHTML= "Right";}
    
function ThreeMessage() {
    document.getElementById("oneonemessage").innerHTML= "Um...This room is empty. Time to go home I guess?"}
    
 function TwoSeven() {
 document.getElementById("twoseven").innerHTML= "Head Home";}
  function TwoEight() {
 document.getElementById("twoeight").innerHTML= "Get a Flashlight";}
  function TwoNine() {
 document.getElementById("twonine").innerHTML= "Proceed in the Dark";}
 
 //starting the last tier of functions
function BoxOneResult() {
    document.getElementById("finalresult").innerHTML= "Oh no! The chest you've opened released a terrible creature! RUN!!!"}
function BoxTwoResult() {
    document.getElementById("finalresult").innerHTML= "Congratulations!! The chest you opened is full of gold coins!"}
function BoxThreeResult() {
    document.getElementById("finalresult").innerHTML= "Oh well, there was nothing in this one. Could have been worse I guess."}
    
function PathOneResult() {
    document.getElementById("finalresult").innerHTML= "WOW!! The room you come upon is full of treasure and historical artifacts. What a successful adventure!!!"}
function PathTwoResult() {
    document.getElementById("finalresult").innerHTML= "Ohhhh NO!!! That was a bad idea, this path is full of snakes! We're out of here!!!"}
function PathThreeResult() {
    document.getElementById("finalresult").innerHTML= "At the end of a long hallway, you come to find three more dark paths. Are going to be here forever?"}
    
function DarkOneResult() {
    document.getElementById("finalresult").innerHTML= "Well, that wasn't as cool as I thought."}
function DarkTwoResult() {
    document.getElementById("finalresult").innerHTML= "Good idea!! As it turns out, this room is full of treasure and artiacts. Well done!!"}
function DarkThreeResult() {
    document.getElementById("finalresult").innerHTML= "Ow! You keep tripping over things. This wasn't the best plan."}
