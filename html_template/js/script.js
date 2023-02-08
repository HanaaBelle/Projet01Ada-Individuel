let message = prompt("Bonjour ! Entrez votre Nom :");

console.log("Bonjour" + " " + message + " 👋");

document.getElementById("salut").innerHTML = message;

document.body.innerHTML += "<h2>" + " " + message + " " + " </h2>";
