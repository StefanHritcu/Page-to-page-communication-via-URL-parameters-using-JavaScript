document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const loginData = document.querySelector('.login_data');
    const loginLink = document.querySelector('.login_link a');

    // Aggiungi un gestore di eventi per il cambiamento degli input
    nameInput.addEventListener('input', updateLoginData);
    surnameInput.addEventListener('input', updateLoginData);

    // Funzione per aggiornare il contenuto dell'elemento <h1>
    function updateLoginData() {
        const nameValue = nameInput.value;
        const surnameValue = surnameInput.value;
        loginData.textContent = `Name: ${nameValue}, Surname: ${surnameValue}`;
    }

    // Aggiungi un gestore di eventi per il clic sul link "LOGIN"
    loginLink.addEventListener('click', function (e) {
        e.preventDefault(); // Evita il comportamento predefinito del link (navigazione)

        // Ottieni il testo dall'elemento <h1> con la classe "login_data"
        const loginDataText = loginData.textContent;

        // Redirigi l'utente a "mainpage.html" con il testo inserito
        window.location.href = `mainpage.html?loginData=${encodeURIComponent(loginDataText)}`;
    });
});