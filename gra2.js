let lista_slow

const xhr = new XMLHttpRequest()

xhr.onload = () => {
    if(xhr.status === 200){
        lista_slow = (xhr.responseText)}
}
xhr.open('GET','lista_slow.txt',true);
xhr.send();
/*
for(i=0; i<6798;i++){
(i*9,i*9+4)
}
*/
//tekst.substring(0, 3)

let los = "babka"

los = los + los

let wier = 0;

let slowo



function enter() {
    let kolory = []
    let los_tabl = []
    if (document.getElementById(`${wier},4`).textContent != "") {


        slowo = [
            document.getElementById(`${wier},0`).textContent,
            document.getElementById(`${wier},1`).textContent,
            document.getElementById(`${wier},2`).textContent,
            document.getElementById(`${wier},3`).textContent,
            document.getElementById(`${wier},4`).textContent
        ]




        for (let i = 0; i < los.length; i++) {
            los_tabl.push(los.charAt(i))
        }

        for (i = 0; i < 5; i++) {
            if (slowo[i] == los_tabl[i]) {
                kolory.push("orange")
                los_tabl.splice(i, 1, "")
                los_tabl.splice(i + 5, 1, "")

            } else {
                kolory.push("gray")
            }
        }
        for (i = 0; i < 5; i++) {

            if (slowo[i] == los_tabl[i + 1]) {
                if (kolory[i] != "orange") { kolory.splice(i, 1, "lightblue") }
            } else if (slowo[i] == los_tabl[i + 2]) {
                if (kolory[i] != "orange") { kolory.splice(i, 1, "lightblue") }
            } else if (slowo[i] == los_tabl[i + 3]) {
                if (kolory[i] != "orange") { kolory.splice(i, 1, "lightblue") }
            } else if (slowo[i] == los_tabl[i + 4]) {
                if (kolory[i] != "orange") { kolory.splice(i, 1, "lightblue") }
            }
        }
        for (i = 0; i < 5; i++) {
            document.getElementById(`${wier},${i}`).style.backgroundColor = kolory[i]
        }
        for (i = 0; i < 5; i++) {
            document.getElementById(slowo[i]).style.backgroundColor = kolory[i]
        }

        if (kolory[0] + kolory[1] + kolory[2] + kolory[3] + kolory[4] == "orangeorangeorangeorangeorange") {
            document.getElementById("winner").innerHTML = "WYGRAŁEŚ BABECZKĘ!!!"
            wier = 6
        } else {
            wier = wier + 1
        }

    }
}

function backspace() {
    let kol = 0
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        if (kol == 4) break;
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }
    if (document.getElementById(`${wier},${4}`).textContent != "") {
        document.getElementById(`${wier},${4}`).innerHTML = "";
    } else {
        document.getElementById(`${wier},${kol - 1}`).innerHTML = "";
    }
}
function a() {
    let kol = 0
    let litera = document.getElementById("a").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function b() {
    let kol = 0;
    let litera = document.getElementById("b").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function c() {
    let kol = 0;
    let litera = document.getElementById("c").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function d() {
    let kol = 0;
    let litera = document.getElementById("d").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function e() {
    let kol = 0;
    let litera = document.getElementById("e").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function f() {
    let kol = 0;
    let litera = document.getElementById("f").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function g() {
    let kol = 0;
    let litera = document.getElementById("g").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function h() {
    let kol = 0;
    let litera = document.getElementById("h").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ii() {
    let kol = 0;
    let litera = document.getElementById("i").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function j() {
    let kol = 0;
    let litera = document.getElementById("j").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function k() {
    let kol = 0;
    let litera = document.getElementById("k").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function l() {
    let kol = 0;
    let litera = document.getElementById("l").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function m() {
    let kol = 0;
    let litera = document.getElementById("m").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function n() {
    let kol = 0;
    let litera = document.getElementById("n").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function o() {
    let kol = 0;
    let litera = document.getElementById("o").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function q() {
    let kol = 0;
    let litera = document.getElementById("q").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function p() {
    let kol = 0;
    let litera = document.getElementById("p").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function r() {
    let kol = 0;
    let litera = document.getElementById("r").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function s() {
    let kol = 0;
    let litera = document.getElementById("s").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function t() {
    let kol = 0;
    let litera = document.getElementById("t").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function u() {
    let kol = 0;
    let litera = document.getElementById("u").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function v() {
    let kol = 0;
    let litera = document.getElementById("v").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function w() {
    let kol = 0;
    let litera = document.getElementById("w").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function x() {
    let kol = 0;
    let litera = document.getElementById("x").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function y() {
    let kol = 0;
    let litera = document.getElementById("y").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function z() {
    let kol = 0;
    let litera = document.getElementById("z").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function aa() {
    let kol = 0;
    let litera = document.getElementById("ą").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function cc() {
    let kol = 0;
    let litera = document.getElementById("ć").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ee() {
    let kol = 0;
    let litera = document.getElementById("ę").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function oo() {
    let kol = 0;
    let litera = document.getElementById("ó").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ll() {
    let kol = 0;
    let litera = document.getElementById("ł").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ss() {
    let kol = 0;
    let litera = document.getElementById("ś").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function zz() {
    let kol = 0;
    let litera = document.getElementById("ż").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function zzz() {
    let kol = 0;
    let litera = document.getElementById("ź").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}