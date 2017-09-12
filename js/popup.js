var link = document.querySelector(".contacts .btn");

var popup = document.querySelector(".write_us_popup");

var close = popup.querySelector(".popup_close");

var form = popup.querySelector("form");

var mapLink = document.querySelector(".map");

var mapPopup = document.querySelector(".popup_map");

var mapClose = mapPopup.querySelector(".popup_close");

var inputname = popup.querySelector("[name=name]");

var email = popup.querySelector("[name=email]");

var text = popup.querySelector("[name=mail_txt]");

link.addEventListener("click", function (evt)
{
    evt.preventDefault();
    popup.classList.add("modal_show");

});

close.addEventListener("click", function (evt)
{
    evt.preventDefault();
    popup.classList.remove("modal_show");
});

form.addEventListener("submit", function (evt)
{
    if (!inputname.value || !email.value || !text.value)
    {
        evt.preventDefault();
        console.log("Нужно ввести данные");
    }
});

window.addEventListener("keydown", function (evt)
{
    if (evt.keyCode === 27)
    {
        if (popup.classList.contains("modal_show"))
        {
            popup.classList.remove("modal_show");
        }
    }
});

var maplink = document.querySelector(".map");

var mappopup = document.querySelector(".popup_map");

maplink.addEventListener("click", function (evt)
{
    evt.preventDefault();
    mappopup.classList.add("modal_show");
});

mapLink.addEventListener("click", function (evt)
{
    evt.preventDefault();
    mapPopup.classList.add("modal_show");
});

mapClose.addEventListener("click", function (evt)
{
    evt.preventDefault();
    mapPopup.classList.remove("modal_show");
});

window.addEventListener("keydown", function (evt)
{
    if (evt.keyCode === 27)
    {
        if (mapPopup.classList.contains("modal_show"))
        {
            mapPopup.classList.remove("modal_show");
        }
    }
});