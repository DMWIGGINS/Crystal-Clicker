$(document).ready(function () {

    var targetscore = 0;
    var playerscore = 0;
    var wins = 0;
    var losses = 0;
    var whitecrystal = 0;
    var firecrystal = 0;
    var bluecrystal = 0;
    var purplecrystal = 0;




    function newGame() {
        var playerscore = 0;

        var targetscore = Math.round((Math.random() * 101) + 19);
        console.log(targetscore);

        var whitecrystal = Math.round((Math.random() * 11) + 1);
        console.log(whitecrystal);

        var firecrystal = Math.round((Math.random() * 11) + 1);
        console.log(firecrystal);

        var bluecrystal = Math.round((Math.random() * 11) + 1);
        console.log(bluecrystal);

        var purplecrystal = Math.round((Math.random() * 11) + 1);
        console.log(purplecrystal);
    }

    $("whitecrystal").click(function () {
        playerscore = playerscore + whitecrystal;
        $("playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("losses").append(losses);
            newGame();
        }
    });

    $("firecrystal").click(function () {
        playerscore = playerscore + firecrystal;
        $("playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("losses").append(losses);
            newGame();
        }
    });

    $("bluecrystal").click(function () {
        playerscore = playerscore + bluecrystal;
        $("playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("losses").append(losses);
            newGame();
        }
    });

    $("purplecrystal").click(function () {
        playerscore = playerscore + purplecrystal;
        $("playerscore").append(playerscore);
        if (playerscore === targetscore) {
            wins++;
            $("wins").append(wins);
            newGame();
        } else if (playerscore > targetscore) {
            losses++;
            ("losses").append(losses);
            newGame();
        }
    });

});