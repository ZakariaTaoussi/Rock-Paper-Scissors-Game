var result = document.getElementById("result");
var image = document.getElementById("image");
var buttons = document.querySelectorAll("button");
var imagecomputer = document.getElementById("imagecomputer");

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        var userchoice = e.target.id;
     
        var imagesrc = './image/' + userchoice + '.png';
        image.setAttribute('src', imagesrc);
        var myArray = ["paper", "rock", "scissor"];
        var randomIndex = Math.floor(Math.random() * myArray.length);
var computerchoice = myArray[randomIndex];
var imagesrc2 = './image/' + computerchoice + '.png';
imagecomputer.setAttribute('src',imagesrc2 );
result.innerHTML = "";
if (userchoice === computerchoice) {
result.innerHTML = "Draw!";
} else if (
(userchoice === "rock" && computerchoice === "scissor") ||
(userchoice === "scissor" && computerchoice === "paper") ||
(userchoice === "paper" && computerchoice === "rock")
) {
result.innerHTML = "You Win!";
} else {
result.innerHTML = "Computer Wins!";
}
    });
});
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    result.innerHTML = "";
    image.setAttribute('src', './image/white.png');
    imagecomputer.setAttribute('src', './image/white.png');
});