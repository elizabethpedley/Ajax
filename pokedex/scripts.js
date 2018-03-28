$(document).ready(function(){
    function pokemon(num){
        for(var i=1;i<=num;i++){
            var link = '<img id="' + i + '" src="https://pokeapi.co/media/img/' + i + '.png">'
            $('#wrapper').append(link);
        }
    }
    pokemon(151);

    $('#wrapper').on('click','img', function(){
       var id = $(this).attr( "id" );
       $.get("https://pokeapi.co/api/v2/pokemon/"+id+"/", function(res){
            console.log(res);
            response = res;
            console.log(res.name);
            console.log(this);
            var content = '<h1>' + res.name + '</h1>';
            content += '<img src="https://pokeapi.co/media/img/'+id+'.png">';
            content += '<h3>Types</h3>';
            for(var i=0;i<res.types.length;i++){
                content += '<p>' + res.types[i].type.name + '</p>';
            }
            content += '<h3>Height</h3>';
            content += '<p>' + res.height + '</p>';
            content += '<h3>Weight</h3>';
            content += '<p>' + res.weight + '</p>';
            $('#stats').html(content);
       }, 'json');
    });
});
var response;