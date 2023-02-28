let i = 0
let los
let los_index = Math.floor(Math.random() * (6796 + 1))
let lista_slow_tabl = []
let wier = 0;
let slowo

const xhr = new XMLHttpRequest()

xhr.onload = () => {
    if (xhr.status === 200) {
        for (i = 0; i < 6797; i++) {
            lista_slow_tabl.push(xhr.responseText.substring(i * 7, i * 7 + 5))
        }

        //los = lista_slow_tabl[los_index]
        los = "BABKA"
        los = los + los
    }
}
xhr.open('GET', 'lista_slow.txt', true);
xhr.send();


function enter() {
    document.getElementById("winner").innerHTML = ""
    let slowo_text
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

        slowo_text = `${slowo[0]}` + `${slowo[1]}` + `${slowo[2]}` + `${slowo[3]}` + `${slowo[4]}`

        i = 0
        while (slowo_text != lista_slow_tabl[i]) {
            if (i == 6797) {
                document.getElementById("winner").innerHTML = "Brak podanego słowa w bazie"
                break
            }
            i++
        }
    } if (document.getElementById("winner").textContent == "") {


        for (i = 0; i < los.length; i++) {
            los_tabl.push(los.charAt(i))
        }

        for (i = 0; i < 5; i++) {
            if (slowo[i] === los_tabl[i]) {
                kolory.push("orange")
                los_tabl.splice(i, 1, "")
                los_tabl.splice(i + 5, 1, "")

            } else {
                kolory.push("gray")
            }
        }
        for (i = 0; i < 5; i++) {

            if (slowo[i] === los_tabl[i + 1]) {
                if (kolory[i] != "orange") { kolory.splice(i, 1, "lightblue") }
            } else if (slowo[i] === los_tabl[i + 2]) {
                if (kolory[i] !== "orange") { kolory.splice(i, 1, "lightblue") }
            } else if (slowo[i] === los_tabl[i + 3]) {
                if (kolory[i] != "orange") { kolory.splice(i, 1, "lightblue") }
            } else if (slowo[i] === los_tabl[i + 4]) {
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
        if (kol === 4) break;
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
    let litera = document.getElementById("A").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function b() {
    let kol = 0;
    let litera = document.getElementById("B").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function c() {
    let kol = 0;
    let litera = document.getElementById("C").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function d() {
    let kol = 0;
    let litera = document.getElementById("D").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function e() {
    let kol = 0;
    let litera = document.getElementById("E").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function f() {
    let kol = 0;
    let litera = document.getElementById("F").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function g() {
    let kol = 0;
    let litera = document.getElementById("G").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function h() {
    let kol = 0;
    let litera = document.getElementById("H").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ii() {
    let kol = 0;
    let litera = document.getElementById("I").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function j() {
    let kol = 0;
    let litera = document.getElementById("J").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function k() {
    let kol = 0;
    let litera = document.getElementById("K").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function l() {
    let kol = 0;
    let litera = document.getElementById("L").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function m() {
    let kol = 0;
    let litera = document.getElementById("M").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function n() {
    let kol = 0;
    let litera = document.getElementById("N").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function o() {
    let kol = 0;
    let litera = document.getElementById("O").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function q() {
    let kol = 0;
    let litera = document.getElementById("Q").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function p() {
    let kol = 0;
    let litera = document.getElementById("P").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function r() {
    let kol = 0;
    let litera = document.getElementById("R").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function s() {
    let kol = 0;
    let litera = document.getElementById("S").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function t() {
    let kol = 0;
    let litera = document.getElementById("T").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function u() {
    let kol = 0;
    let litera = document.getElementById("U").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function v() {
    let kol = 0;
    let litera = document.getElementById("V").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function w() {
    let kol = 0;
    let litera = document.getElementById("W").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function x() {
    let kol = 0;
    let litera = document.getElementById("X").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function y() {
    let kol = 0;
    let litera = document.getElementById("Y").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function z() {
    let kol = 0;
    let litera = document.getElementById("Z").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function aa() {
    let kol = 0;
    let litera = document.getElementById("Ą").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function cc() {
    let kol = 0;
    let litera = document.getElementById("Ć").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ee() {
    let kol = 0;
    let litera = document.getElementById("Ę").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function oo() {
    let kol = 0;
    let litera = document.getElementById("Ó").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ll() {
    let kol = 0;
    let litera = document.getElementById("Ł").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function ss() {
    let kol = 0;
    let litera = document.getElementById("Ś").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function nn() {
    let kol = 0;
    let litera = document.getElementById("Ń").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function zz() {
    let kol = 0;
    let litera = document.getElementById("Ż").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}
function zzz() {
    let kol = 0;
    let litera = document.getElementById("Ź").textContent;
    let litera2 = document.getElementById(`${wier},${kol}`).textContent;
    while (litera2 != "") {
        kol++
        litera2 = document.getElementById(`${wier},${kol}`).textContent;
    }

    document.getElementById(`${wier},${kol}`).innerHTML = litera;
}