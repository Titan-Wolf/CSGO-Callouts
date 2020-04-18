
var map_choisi;
sessionStorage.setItem('num_map', '1'); // Reset compteur mode 2

document.getElementById("co1").addEventListener('click', function(){
    //document.cookie="map=Dust II";
    sessionStorage.setItem('map', 'Dust II');
});

document.getElementById("co2").addEventListener('click', function(){
    //document.cookie="map=Inferno";
    sessionStorage.setItem('map', 'Inferno');
});

document.getElementById("co3").addEventListener('click', function(){
    sessionStorage.setItem('map', 'Mirage');
});

document.getElementById("co4").addEventListener('click', function(){
    sessionStorage.setItem('map', 'Overpass');
});

document.getElementById("co5").addEventListener('click', function(){
    sessionStorage.setItem('map', 'Train');
});

document.getElementById("co6").addEventListener('click', function(){
    sessionStorage.setItem('map', 'Nuke');
});

document.getElementById("co7").addEventListener('click', function(){
    sessionStorage.setItem('map', 'Cache');
});
