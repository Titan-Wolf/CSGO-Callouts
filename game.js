//var la_map = getCookie("map");
var la_map = sessionStorage.getItem('map');
var nb_screen = 1;
var repertoire_img;
var num_map_tab;
var jouer=true;

document.getElementById("map_name").innerHTML = la_map;

switch (la_map) {
    case "Dust II":
        nb_screen = 46;
        num_map_tab = 0;
        repertoire_img = "img/dust2/";
        
        break;
    case "Inferno":
        nb_screen = 57;
        num_map_tab = 1;
        repertoire_img = "img/inferno/";
        
        break;
    case "Mirage":
        nb_screen = 48;
        num_map_tab = 2;
        repertoire_img = "img/mirage/";
        
        break;
    case "Overpass":
        nb_screen = 46;
        num_map_tab = 3;
        repertoire_img = "img/overpass/";
        
        break;
    case "Train":
        nb_screen = 44;
        num_map_tab = 4;
        repertoire_img = "img/train/";
        
        break;
    case "Nuke":
        nb_screen = 40;
        num_map_tab = 5;
        repertoire_img = "img/nuke/";
        
        break;
    case "Cache":
        nb_screen = 45;
        num_map_tab = 6;
        repertoire_img = "img/cache/";
        
        break;
    case "Anubis":
        nb_screen = 26;
        num_map_tab = 7;
        repertoire_img = "img/anubis/";
        
        break;
    default:
        window.alert("Error");
        break;
}

//window.alert("Are You Ready ?");

/* ~~ Fonctions ~~ */

function main(mode){
    switch (mode) {
        case 1: // aleatoire
            var nb_alea = aleatoire(nb_screen); 
            break;
    
        case 2:
            var old = sessionStorage.getItem('num_map');
            var nb_alea = ordonne(parseInt(old));
            break;

        default:
            break;
    }
    
    var rep1,rep2,rep3;

    // Set Image 
    document.getElementById("img_alea").setAttribute("src", repertoire_img + nb_alea.toString() + ".jpg");

    // Set Reponses
    choix_callout(num_map_tab,nb_alea);

    document.getElementById("but1").value = rep1;
    document.getElementById("but2").value = rep2;
    document.getElementById("but3").value = rep3;

    // Get Reponse
    document.getElementById('but1').addEventListener('click', function () {
        if(rep1 == reponse_tab[num_map_tab][nb_alea-1] && jouer == true){
            //console.log("GG !!");
            document.querySelector('.reponse').classList.add('reponse_win');
            jouer=false;
        } else if(jouer == true){
            //console.log("NOP");
            document.querySelector('.reponse').classList.add('reponse_lose');
            jouer=false;
        }
        setTimeout(() => {  window.location.reload(); }, 2000);
    });
    document.getElementById('but2').addEventListener('click', function () {
        if(rep2 == reponse_tab[num_map_tab][nb_alea-1]){
            //console.log("GG !!");
            document.querySelector('.reponse').classList.add('reponse_win');
            jouer=false;
        } else if(jouer == true){
            //console.log("NOP");
            document.querySelector('.reponse').classList.add('reponse_lose');
            jouer=false;
        }
        setTimeout(() => {  window.location.reload(); }, 2000);
    });
    document.getElementById('but3').addEventListener('click', function () {
        if(rep3 == reponse_tab[num_map_tab][nb_alea-1]){
            //console.log("GG !!");
            document.querySelector('.reponse').classList.add('reponse_win');
            jouer=false;
        } else if(jouer == true){
            //console.log("NOP");
            document.querySelector('.reponse').classList.add('reponse_lose');
            jouer=false;
        }
        setTimeout(() => {  window.location.reload(); }, 2000);
    });

    function choix_callout(num_map_tab,nb_alea){
        // tab_no_melanger[bonne rep, rep alea 1, rep alea 2];
        do {
            alea1 = aleatoire(nb_screen);
            alea2 = aleatoire(nb_screen);
        } while (alea1 == nb_alea || alea2 == nb_alea || alea2 == alea1);

        var tab_no_melanger = [reponse_tab[num_map_tab][nb_alea-1],reponse_tab[num_map_tab][alea1-1],reponse_tab[num_map_tab][alea2-1]];
        
        do {
            rep1 = tab_no_melanger[Math.floor(Math.random()*tab_no_melanger.length)];
            rep2 = tab_no_melanger[Math.floor(Math.random()*tab_no_melanger.length)];
            rep3 = tab_no_melanger[Math.floor(Math.random()*tab_no_melanger.length)];
        } while (rep1 == rep2 || rep1 == rep3 || rep2 == rep3);
    }

    function aleatoire(max){
        var num = Math.random() * (max - 1) + 1;
        //console.log(Math.floor(num).toString());
        return Math.floor(num);
    }

    function ordonne(old){
        if(old == undefined) old =0;
        if(old == nb_screen){
            new_v = 1;
            window.alert("END");
        } 

        var new_v = old + 1;
        sessionStorage.setItem('num_map', new_v);
        return new_v;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* ~~ Tableaux Reponses ~~ */

// reponse_tab[la map][la reponse];
var reponse_tab = [
    // DUST 2
    ["A_CAR","A_LONG","A_PLAT","A_RAMP","B_BACK_SITE","B_BOXES_ou_FRIBERG","B_CLOSET","B_DOORS","B_PLAT","B_XBOX",
    "BACK_PLAT","BARRELS","BLUE_BOX","CAR","CATWALK","CLOSE_LEFT","CT_MID_ou_MID_TO_B","CT_RAMP","CT_SPAWN","DEFAULT_B",
    "DOUBLE_STACK_OU_TOTEM","ELEVATOR","FENCE","GOOSE","LONG_DOORS_ou_SAS","LOWER_TUNNEL","MID","MID_DOORS","NINJA","OUTSIDE_LONG",
    "OUTSIDE_TUNNEL","PALM","PIT","PIT_PLAT","SCAFFOLD","SHORT","SHORT_BOOST","SIDE_PIT","SITE_A","SUICIDE",
    "T_PLAT","T_SPAWN","TOP_MID_RIGHT","UPPER_TUNNEL","WINDOWS","XBOX"],
    // INFERNO
    ["APPS_STAIRS","ARCH","B_CAR","B_SITE","BACK_SITE","BALCONY","BANANA","BENCH","BLACK_ALLEY","BLAZE",
    "BOILER","BOOST","BOTTOM_MID","BRIDGE","CLOSE_APPS","CLOSE_LEFT","COFFINS","CONSTRUCTIONS_ou_RUINS","CT","CT_APPS",
    "CT_BOOST_ou_FLOWER","CT_SPAWN","DARK","DOSIA","FIRST_ORANGE","FOUTAIN","GARDEN","GRAVE_YARD","KITCHEN","LEDGE",
    "LIBRARY","LIVING_ROOM","LOGS","LONG_A","LONG_CORNER","MID","PATIO_ou_PORCH","PIT","POOL","QUAD",
    "SANDBAGS","SANDBAGS_CONSTRUCTION","SECOND_MID","SECOND_MID_DOORS","SECOND_ORANGE","SHORT_A","SPEEDWAY","STAIRS","T_APPS","T_RAMP",
    "T_SPAWN","TERRACE","TOP_MID","TREE","TRUCK","UNDER_PASS","WELL","WINDOWS_APPS"],
    // MIRAGE
    ["APPS_RAMP","ARCHES","B_APPS","B_DEFAULT","B_SHORT","B_SITE","BACK_SITE","BALCONY","BENCH","BLACK_ALLEY",
    "BOOST","CART","CATWALK","CHAIR","CONNECTOR","CT","EBOX","FIREBOX","HOUSE","JUNGLE",
    "KITCHEN","LADDER_ROOM","MARKET","B_PLAT","MARKET_DOOR","MARKET_WINDOW","MID","MID_BENCH","MID_BOXES","NINJA",
    "PALACE","PILLARS_PALACE","RAMP_A","SANDWICH","SHADOW","SNEAKY","STAIRS","T_ROOF","T_SPAWN","TETRIS",
    "TICKET","TOP_MID","TRASH","TRIPLE_BOX","TV","VAN","VENT","WINDOW"],
    // OVERPASS
    ["A_SITE","ABC_OU_GRAFFITI","ALLEY","B_SITE","BALOONS","BANK","BENCH","BOOST","BRIDGE","CAFE",
    "CANALS_OU_SEWERS","CLOSE_LEFT","CONNECTOR","DEFAULT_A","FLOWERS","FOUNTAIN","HEAVEN","HITMARKER","LADDER","LONG_A",
    "LONG_BOOST","LOWER_TUNNELS","MID","MONSTER","OPTIMUS","PILLAR","PIT","PLAYGROUND","ROCK","SANDBAGS_OU_B_SHORT",
    "SHORT_A","SHORT_TUNNEL","SIGNPOST","SQUEAKY","STORAGE","T_SPAWN","TOILET","TOILET_LONG","TOXIC","TRACKS",
    "TRASH","TREE","UPPER_TUNNELS","VAN","WALKWAY","WATER"],
    // TRAIN
    ["A_BLUE","A_BOMB_TRAIN","A_MAIN","A_RED","A1","A2","A3","ALLEY","B_BOMB_TRAIN","B_HALLS",
    "B_RAMP","B_RED","BACKSITE","BROWN_HALLS","CATWALK","CLOSE","CT_SPAWN","CT_STAIRS","CT_TUNNELS","CUBBY",
    "DANGER_OU_CAMERA","DUMPSTER","EBOX","GREEN","HEADSHOT","HEAVEN","HELL","IVY","KITCHEN","LADDER",
    "OIL","OLD_BOMB","OLOF","POP_DOG","SANDWICH","SHOWER","SIDEWALK","SUMMIT","T_SPAWN","T_STAIRS",
    "UPPER_B","WHITE","YELLOW","Z_CONNECTOR"],
    // NUKE
    ["A_SITE","B_SITE","BACK_VENT","BIG_BOX","BOOST","BOTTOM_RAMP","BRIDGE","CONTROL","CT_BOX","CT_RED",
    "CT_SPAWN","DARK","DECON","DOOR","GARAGE","HEADSHOT","HEAVEN","HELL","HUT","LOBBY",
    "LOCKERS","MAIN","MUSTANG","OUTSIDE","RADIO","RAFTERS","RAMP","SECRET","SQUEAKY","STACK",
    "T_RED","T_ROOF","T_SPAWN","TETRIS","TROPHY","TUNNELS","TURN_PIKE","VENT","VENT(1)","WINDOW"],
    // CACHE
    ["A_DEFAULT","A_NEW_BOX","B_DEFAULT","B_HALLS","B_RAMP","BALCONY","BOOST","BOXES","CHECKERS","CT_HALLS",
    "CT_SPAWN","CUBBY","DEFAULT_BOX","DUMPSTER","ELEKTRO","FORKLIFT_YELLOW","GARAGE","HEADSHOT","HEAVEN","HELL",
    "HIGHWAY","LOCKERS","LONG_A","MAIN_A","MAIN_B","MID","NBK","NEW_BOX","PIT","QUAD",
    "RAFTERS","ROOF","SANDBAGS","SHROUD","SPRAY","SQUEAKY","SUN_ROOM","T_BOXES","T_SPAWN","T_TRUCK",
    "TOXIC","TREE","TRUCK","VENT","WHITE_BOX"],
    // ANUBIS
    ["CT_SIDE_UPPER","A_SITE","ALLEY","B_SITE","BACKSITE_B","BOAT","BRIDGE","CANAL","CONNECTOR","CT_SPAWN",
    "FOUNTAIN","HEAVEN","LOWER_TUNNEL","MAIN","MIDDLE","MIDDLE_DOOR","OUTSIDE_LONG","PALACE","RUINS","SNIPER",
    "STREET","T_SIDE_UPPER","T_SPAWN","T_STAIRS","TUNNEL","WALKWAY"]
];

//console.log(dust2.length);
//console.log(reponse_tab[0][0]);

/* ~~ Game ~~ */
main(2);
