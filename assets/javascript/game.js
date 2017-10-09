var targetscore = 0;
var playerscore = 0;
var wins = 0;
var losses = 0;
var starcrystal = 0;
var firecrystal = 0;
var purplecrystal = 0;
var bluecrystal = 0;
var turquoisecrystal = 0;



$(document).ready(function () {
    function newGame() {
        var playerscore = 0;
        var targetscore = Math.round((Math.random() * 101) + 19);
        console.log(targetscore);

        var starcrystal = Math.round((Math.random() * 11) + 1);
        console.log(starcrystal);

        var firecrystal = Math.round((Math.random() * 11) + 1);
        console.log(firecrystal);

        var purplecrystal = Math.round((Math.random() * 11) + 1);
        console.log(purplecrystal);

        var bluecrystal = Math.round((Math.random() * 11) + 1);
        console.log(bluecrystal);

        var turquoisecrystal = Math.round((Math.random() * 11) + 1);
        console.log(turquoisecrystal);

    }

    $("starcrystal").click(function () {
        playerscore = playerscore + starcrystal;
        $("playerscore").append(playerscore);

    });


});