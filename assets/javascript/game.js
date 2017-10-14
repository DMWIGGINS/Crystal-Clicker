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
        $("body").css("background-color", "#000000");

        // set playerscore to 0
        playerscore = 0;
        $("p4").text(playerscore);

        // randomly generate target score between 19-120
        targetscore = Math.round((Math.random() * 101) + 19);
        $("p1").text(targetscore);

        // randomly generate value of white crystal between 1-11
        whitecrystal = Math.round((Math.random() * 11) + 1);

        // randomly generate value of fire crystal between 1-11
        firecrystal = Math.round((Math.random() * 11) + 1)

        // randomly generate value of blue crystal between 1-11
        bluecrystal = Math.round((Math.random() * 11) + 1);

        // randomly generate value of purple crystal between 1-11
        purplecrystal = Math.round((Math.random() * 11) + 1);
    }
    /// Set values for new game for first round
    newGame();

    // when white crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#whitecrystal").click(function () {
        $("body").css("background-color", "#236997");
        playerscore = playerscore + whitecrystal;
        $("p4").text(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("p2").text(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            $("p3").text(losses);
            newGame();
        }
    });

    // when fire crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#firecrystal").click(function () {
       $("body").css("background-color", "#db2c00");
        playerscore = playerscore + firecrystal;
        $("p4").text(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("p2").text(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            $("p3").text(losses);
            newGame();
        }
    });

    // when blue crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#bluecrystal").click(function () {
        $("body").css("background-color", "#000acc");
        playerscore = playerscore + bluecrystal;
        $("p4").text(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("p2").text(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            $("p3").text(losses);
            newGame();
        }
    });

    // when purple crystal is clicked add value to playerscore and update on gameboard
    // compare playerscore to targetscore to see if game is over and update wins or losses as needed
    // generate new values to start new game

    $("#purplecrystal").click(function () {
        $("body").css("background-color", "#5c0056");
        playerscore = playerscore + purplecrystal;
        $("p4").text(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("p2").text(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            $("p3").text(losses);
            newGame();
        }
    });


});