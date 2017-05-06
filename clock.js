$(document).ready(function() {
    var buzzer = $("#buzzer")[0];
    var workTime = parseInt($("#workTime").html());
    var breakTime = parseInt($("#breakTime").html());
    var workCounter, breakCounter;
    var timerOn;

    $("#start").click(function() {
        if (!timerOn) {
            workCounter = setInterval(workTimer, 1000);
            workTime *= 60;
            breakTime *= 60;
            timerOn = true;
        }

        function workTimer() {
            if (workTime == 0) {
                buzzer.play();
                clearInterval(workCounter);
                breakCounter = setInterval(breakTimer, 1000);
                $("#status").html("Break");
            } else if (workTime > 0) {
                workTime -= 1;
                if (workTime % 60 >= 10) {
                    $("#timing").html(Math.floor(workTime / 60) + ":" + workTime % 60);
                } else {
                    $("#timing").html(Math.floor(workTime / 60) + ":" + "0" + workTime % 60);
                }
            }
        }

        function breakTimer() {
            breakTime -= 1;
            if (breakTime == 0) {
                clearInterval(breakCounter);
            }
            if (breakTime % 60 >= 10) {
                $("#timing").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
            } else {
                $("#timing").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
            }
        }

    });


    $("#reset").click(function() {
        workTime = 25;
        breakTime = 5;
        $("#workTime").html(workTime);
        $("#timing").html(workTime);
        $("#breakTime").html(breakTime);
        $("#status").html("Work");
        clearInterval(workCounter);
        clearInterval(breakCounter);
        timerOn = false;
    });

    $("#decWorkTime").click(function() {
        if (!timerOn) {
            if (workTime > 1) {
                workTime -= 1;
                $("#workTime").html(workTime);
            }
        }
    });

    $("#incWorkTime").click(function() {
        if (!timerOn) {
            workTime += 1;
            $("#workTime").html(workTime);
        }
    });

    $("#decBreakTime").click(function() {
        if (!timerOn) {
            if (breakTime > 1) {
                breakTime -= 1;
                $("#breakTime").html(breakTime);
            }
        }
    });

    $("#incBreakTime").click(function() {
        if (!timerOn) {
            breakTime += 1;
            $("#breakTime").html(breakTime);
        }
    });

});
