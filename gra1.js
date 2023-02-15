let numberCake = Math.floor((Math.random() * 11));


function play() {
    let userNumber = document.getElementById("userNumber").value;
    let message;




    if (isNaN(userNumber)==true) {
        message = "Co masz na myśli???";  
    } else if (userNumber*numberCake<0) {
        message = "Co masz na myśli???"; 
    } else if (userNumber < numberCake) {
        message = "Czy Ty masz mnie za ptaszka?! Zgaduj dalej!";  
    } else if (userNumber > numberCake) {
        message = "Tyle to nawet Devilek nie zje! Zgaduj dalej!";
    } else if (userNumber*numberCake==100) {
        message = "Skąd wiedziałeś?? Ale się najadłam!";
    } else if (userNumber*numberCake==0) {
        message = "Babeczki jeszcze ciepłe! Proszę, poczęstuj się, ale kilka mi zostaw:)";   
    } else {
        message = "Zgadłeś!! Reszta jest dla Ciebie :)"
    }

    document.getElementById("message").innerHTML = message;
}
