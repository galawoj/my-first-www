let numberCake = Math.floor((Math.random() * 11));


function play() {
    let userNumber = document.getElementById("userNumber").value;
    let message;



    if (userNumber < numberCake) {
       message = "Czy Ty masz mnie za ptaszka?!";
    } else if (userNumber > numberCake) {
        message = "Tyle to nawet Devilek nie zje!";
    } else if (userNumber*numberCake==100) {
        message = "Skąd wiedziałeś?? Ale się najadłam!";
    } else {
        message = "Zgadłeś!! Reszta jest dla Ciebie :)"
    }

    document.getElementById("message").innerHTML = message;
}
