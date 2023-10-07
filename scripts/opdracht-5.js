
// document.getElementById('department-description').textContent = ;
switch (userInput) {
    case 'marketing':
        document.getElementById('department-description').textContent = departments.marketing.description;
        break
    case 'sales':
        document.getElementById('department-description').textContent = departments.sales.description;
        break
    case 'customer-service':
        document.getElementById('department-description').textContent = departments["customer-service"].description;
        break
    default:
        document.getElementById('error-message').textContent ="Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
        break

}

// document.getElementById('role-title').textContent = ;
switch (choice){
    case "0":
        document.getElementById('role-title').textContent =departments[userInput].jobs[0].title;
        break
    case "1":
        document.getElementById('role-title').textContent =departments[userInput].jobs[1].title;
        break
    case "2":
        document.getElementById('role-title').textContent =departments[userInput].jobs[2].title;
        break
    case "3":
        document.getElementById('role-title').textContent =departments[userInput].jobs[3].title;
        break
    case "4":
        document.getElementById('role-title').textContent =departments[userInput].jobs[4].title;
        break
    default:
        document.getElementById('error-message').textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
        break
}

// document.getElementById('role-description').textContent = ;
switch (choice) {
    case "0":
        document.getElementById('role-description').textContent = departments[userInput].jobs[0].description;
        break
    case "1":
        document.getElementById('role-description').textContent = departments[userInput].jobs[1].description;
        break
    case "2":
        document.getElementById('role-description').textContent = departments[userInput].jobs[2].description;
        break
    case"3":
        document.getElementById('role-description').textContent = departments[userInput].jobs[3].description;
        break
    default:
        document.getElementById('error-message').textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
        break
}
