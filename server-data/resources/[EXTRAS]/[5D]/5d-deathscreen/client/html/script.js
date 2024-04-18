$(document).ready(() =>
{
    window.addEventListener("message", (event) =>
    {
        let type = event.data.type;
        let data = event.data.data;

        switch (type)
        {
            case "toggleUI":
                toggleUI(data.toggle, data.time);
                break;
            case "time":
                setTimer(data.time);
                break;
            case "toggleDispatch":
                if (data.toggle)
                    $(".container-g").css("opacity", "1");
                else $(".container-g").css("opacity", "0.5");
                break;
            case "toggleRespawn":
                if (data.toggle)
                    $(".container-e").css("opacity", "1");
                else $(".container-e").css("opacity", "0.5");
                break;
            case "toggleResync":
                if (data.toggle)
                    $(".container-u").css("opacity", "1");
                else
                    $(".container-u").css("opacity", "0.5");
        }
    });
});

function setTimer(time)
{
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    if (seconds < 10) seconds = "0" + seconds;

    $("p5").text(`${minutes}:${seconds} Minutes`);
}

function toggleUI(bool, time)
{
    if (time)
        setTimer(time);
    if (bool)
        $("body").fadeIn();
    else
    {
        $("body").fadeOut(400, () =>
        {
            $(".container-g").css("opacity", "1");
        });
    }
}

