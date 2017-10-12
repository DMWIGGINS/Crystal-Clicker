$(document).ready(function () {

// set variables for scores and crystal values
var targetscore = 0;
var playerscore = 0;
var wins = 0;
var losses = 0;
var whitecrystal = 0;
var firecrystal = 0;
var bluecrystal = 0;
var purplecrystal = 0;



//function to set game values back to beginning to start new game 
function newGame() {

    // set playerscore to 0
    playerscore = 0;

    // randomly generate target score between 19-120
    targetscore = Math.round((Math.random() * 101) + 19);
    console.log(targetscore);

    // randomly generate value of white crystal between 1-11
    whitecrystal = Math.round((Math.random() * 11) + 1);
    console.log(whitecrystal);

    // randomly generate value of fire crystal between 1-11
    firecrystal = Math.round((Math.random() * 11) + 1);
    console.log(firecrystal);

    // randomly generate value of blue crystal between 1-11
    bluecrystal = Math.round((Math.random() * 11) + 1);
    console.log(bluecrystal);

    // randomly generate value of purple crystal between 1-11
    purplecrystal = Math.round((Math.random() * 11) + 1);
    console.log(purplecrystal);
}

    // when white crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#whitecrystal").click(function () {
        alert("clicked white");
        playerscore = playerscore + whitecrystal;
        console.log(playerscore);
        $("#playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("#wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("#losses").append(losses);
            newGame();
        }
    });

    // when fire crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#firecrystal").click(function () {
        alert("clicked fire");
        playerscore = playerscore + firecrystal;
        console.log(playerscore);
        $("#playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("#wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("#losses").append(losses);
            newGame();
        }
    });

    // when blue crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#bluecrystal").click(function () {
        alert("clicked blue");
        playerscore = playerscore + bluecrystal;
        console.log(playerscore);
        $("#playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("#wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("#losses").append(losses);
            newGame();
        }
    });

    // when purple crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#purplecrystal").click(function () {
        alert("clicked purple");
        playerscore = playerscore + purplecrystal;
        console.log(playerscore);
        $("#playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("#wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("#losses").append(losses);
            newGame();
        }
    });

    
    });