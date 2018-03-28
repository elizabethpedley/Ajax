var key = '3ba22e53d1b083efc876a9e864f313e8';

$(document).ready(function() {
    $('form').submit(function() {
        var form = $(this).serializeArray();
        $('input[type=text]').val('');
        var link = 'http://api.openweathermap.org/data/2.5/weather?q='+form[0].value+'&units=imperial&&appid='+key;
        $.get(link, function(res) {
            var content = '<h1>'+ res.name +'</h1>';
            content += 'Temperature: ' + Math.floor(res.main.temp);
            $('#response').html(content);
        }, 'json');
        return false;
    });
});