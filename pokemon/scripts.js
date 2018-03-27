window.onload = function(){
    function pokemon(num){
        for(var i=1;i<=num;i++){
            var wrapper = document.getElementById('wrapper');
            var link = '<img src="https://pokeapi.co/media/img/' + i + '.png">'
            console.log(link)
            wrapper.innerHTML += link;
        }
    }
    pokemon(151);
}