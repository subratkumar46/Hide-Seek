
window.onload = function () {
    Particles.init
        ({

            selector: '.background',
            // color:'blue',
            color: '#87b7ff',
            connectParticles: 'true',

            maxParticles: 200

        });
};
$('.backBtn').click(function() {
    location.reload();
});
$(document).ready(function () {
    var r = [];
    var mediumAry = [];
    var hardAry = [];
    var totalCount;
    var giftCount;
    var rating;
    $("#easybtn").click(function () {
        totalCount = 0;
        giftCount = 0;
        rating = 0;
        $(".gameMainDiv").css({ height: "100vh" });
        $("#diffText").text("EASY");
        $(".showDiff_out").show();
        $(".selectDifficulty").hide();
        $("#easy").show();
        $(".backBtn").show();
        $("#hard").hide();
        $("#medium").hide();

        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var n, m;
        for (n = 1; n <= 4; ++n) {
            var i = Math.floor((Math.random() * (9 - n)) + 1);
            r.push(a[i]);
            a[i] = a[9 - n];
        }

        for (m = 1; m <= 3; ++m) {
            console.log("." + r[m]);
            $("." + r[m]).addClass("gift");
        }

        console.log(r[0] + "  " + r[1] + "  " + r[2] + "  " + r[3]);
        $("." + r[0]).addClass("danger");

        // r.forEach(element => {
        //  console.log("."+element);
        //  $("."+element).addClass("gift");
        // });
    });

    $("#mediumbtn").click(function () {
        totalCount = 0;
        giftCount = 0;
        rating = 0;
        $(".backBtn").show();

        $("#diffText").text("MEDIUM");
        $(".showDiff_out").show();
        $(".gamediv .row").css({ height: "100px" });
        $(".gameMainDiv").css({ height: "100vh" });
        $(".selectDifficulty").hide();
        $("#easy").hide();
        $("#hard").hide();
        $("#medium").show();

        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        var n, m;
        for (n = 1; n <= 4; ++n) {
            var i = Math.floor((Math.random() * (16 - n)) + 1);
            mediumAry.push(a[i]);
            a[i] = a[16 - n];
        }

        for (m = 1; m <= 3; ++m) {
            console.log("." + mediumAry[m]);
            $("." + mediumAry[m]).addClass("gift");
        }

        console.log(mediumAry[0] + "  " + mediumAry[1] + "  " + mediumAry[2] + "  " + mediumAry[3]);
        $("." + mediumAry[0]).addClass("danger");

    });
    $("#hardbtn").click(function () {
        totalCount = 0;
        giftCount = 0;
        rating = 0;
        $(".backBtn").show();

        $("#diffText").text("HARD");
        $(".showDiff_out").show();
        $(".gamediv .row").css({ height: "75px" });
        $(".gamediv").css({ height: "630px" });
        $(".gameMainDiv").css({ height: "100vh" });
        $(".selectDifficulty").hide();
        $("#easy").hide();
        $("#hard").show();
        $("#medium").hide();


        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        var n, m;
        for (n = 1; n <= 4; ++n) {
            var i = Math.floor((Math.random() * (36 - n)) + 1);
            hardAry.push(a[i]);
            a[i] = a[36 - n];
        }

        for (m = 1; m <= 3; ++m) {
            console.log("." + hardAry[m]);
            $("." + hardAry[m]).addClass("gift");
        }

        console.log(hardAry[0] + "  " + hardAry[1] + "  " + hardAry[2] + "  " + hardAry[3]);
        $("." + hardAry[0]).addClass("danger");

    });

    // function easyReset() {
    //     for(var i=1;i<=9;i++){
    //         console.log("."+i);
    //         $("."+i).html("");
    //     }
    // }


    $("#easy #guessbtn button").click(function () {
        console.log("clicked");
        var className = $("#" + $('#easy #guessInput input').val());
        // var x=className.hasClass("gift");
        // console.log(x);


        totalCount++;
        if (className.hasClass("gift")) {
            giftCount++;

            $("#" + $('#easy #guessInput input').val()).html('<i class="fa-solid fa-gift"></i>');
            if (giftCount == 3) {
                $('#easy #rating').text(totalCount + "/9");
                $('#easy .input').hide();
                $('#easy .output').show();
            }

        }
        else if (className.hasClass("danger")) {
            for (var i = 1; i <= 9; i++) {
                console.log("." + i);
                $("." + i).html("");
            }
            giftCount = 0;
        }
        else {
            // totalCount++;
            $("#" + $('#easy #guessInput input').val()).html('<h2 style="color: red;font-family: Silkscreen, cursive;">MISS</h2>');
        }
    });

    $("#easy .resetBtn").click(function () {
        for (var i = 1; i <= 9; i++) {
            console.log("." + i);
            $("." + i).html("");
        }
        totalCount = 0;
        giftCount = 0;
        $('#easy .input').show();
        $('#easy .output').hide();
    });
    $("#medium .resetBtn").click(function () {
        for (var i = 1; i <= 16; i++) {
            console.log("." + i);
            $("." + i).html("");
        }
        totalCount = 0;
        giftCount = 0;
        $('#medium .input').show();
        $('#medium .output').hide();
    });
    $("#hard .resetBtn").click(function () {
        for (var i = 1; i <= 36; i++) {
            console.log("." + i);
            $("." + i).html("");
        }
        totalCount = 0;
        giftCount = 0;
        $('#hard .input').show();
        $('#hard .output').hide();
    });

    $("#medium #guessbtn button").click(function () {
        console.log("clicked");
        // console.log("#m"+$('#medium #guessInput input').val());
        var className = $("#m" + $('#medium #guessInput input').val());
        // var x=className.hasClass("gift");
        console.log(className.hasClass("gift"));
        // console.log(x);


        totalCount++;
        if (className.hasClass("gift")) {
            giftCount++;
            $("#m" + $('#medium #guessInput input').val()).html('<i class="fa-solid fa-gift"></i>');
            if (giftCount == 3) {
                $('#medium #rating').text(totalCount + "/16");
                $('#medium .input').hide();
                $('#medium .output').show();
            }
        }
        else if (className.hasClass("danger")) {
            for (var i = 1; i <= 16; i++) {
                console.log("." + i);
                $("." + i).html("");
            }
            giftCount = 0;
        }
        else {
            // totalCount++;
            $("#m" + $('#medium #guessInput input').val()).html('<h3 style="color: red;font-family: Silkscreen, cursive;">MISS</h3>');
        }
    });


    $("#hard #guessbtn button").click(function () {
        console.log("clicked");
        // console.log("#m"+$('#medium #guessInput input').val());
        var className = $("#h" + $('#hard #guessInput input').val());
        // var x=className.hasClass("gift");
        console.log(className.hasClass("gift"));
        // console.log(x);


        totalCount++;
        if (className.hasClass("gift")) {
            giftCount++;
            $("#h" + $('#hard #guessInput input').val()).html('<i class="fa-solid fa-gift"></i>');
            if (giftCount == 3) {
                $('#hard #rating').text(totalCount + "/36");
                $('#hard .input').hide();
                $('#hard .output').show();
            }
        }
        else if (className.hasClass("danger")) {
            for (var i = 1; i <= 36; i++) {
                console.log("." + i);
                $("." + i).html("");
            }
            giftCount = 0;
        }
        else {
            // totalCount++;
            $("#h" + $('#hard #guessInput input').val()).html('<h6 style="color: red;font-family: Silkscreen, cursive;">MISS</h6>');
        }
    });



});