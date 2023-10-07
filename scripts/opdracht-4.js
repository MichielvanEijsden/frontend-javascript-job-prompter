console.log(userInput + " is een leuke afdeling on te werken. Er werken momenteel " + departments[userInput].numberOfEmployees + " medewerkers.")

const choice = prompt('je koos ' + userInput + '.' + "Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in. 0: " + departments[userInput].jobs[0].title + ', 1: ' + departments[userInput].jobs[1].title + ', 2: ' + departments[userInput].jobs[2].title + ', 3: ' + departments[userInput].jobs[3].title)

console.log(choice)

switch (choice) {
    case "0":
        console.log("je koos " + departments[userInput].jobs[0].title + ", " + departments[userInput].jobs[0].description);
        break
    case "1":
        console.log("je koos " + departments[userInput].jobs[1].title + ", " + departments[userInput].jobs[1].description);
        break
    case "2":
        console.log("je koos " + departments[userInput].jobs[2].title + ", " + departments[userInput].jobs[2].description);
        break
    case"3":
        console.log("je koos " + departments[userInput].jobs[3].title + ", " + departments[userInput].jobs[3].description);
        break
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
        break
}