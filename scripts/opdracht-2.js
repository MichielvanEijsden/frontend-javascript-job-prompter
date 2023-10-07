const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
 //2a

switch (userInput) {
    case "marketing":
        console.log("je koos Marketing", departments.marketing.description);
        break
    case "sales":
        console.log("je koos Sales", departments.sales.description);
        break
    case "customer-service":
        console.log("je koos customer-service", departments["customer-service"].description);
        break
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
        break
}
