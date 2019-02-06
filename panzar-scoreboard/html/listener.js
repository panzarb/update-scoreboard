$(function()
{
    window.addEventListener('message', function(event)
    {
        var item = event.data;
        var buf = $('#wrap');
        buf.find('table').append("<h1 class=\"heading\"><strong>SERVERNAME</strong> ROLEPLAY</h1><p id='discord'>discord.me/servername</p>");
        if (item.meta && item.meta == 'close')
        {
            document.getElementById("ptbl").innerHTML = "";
            $('#wrap').hide();
            return;
        }
        buf.find('table').append(item.text);
        $('#wrap').show();
    }, false);
});