// LengthValidation
function lengthValidation() {
    let password = document.getElementById('password').value;
    let passwordLength = password.length;
    let lengthControl = document.getElementById('lengthControl');
    let icon = document.getElementById('lengthIcon');

    if (passwordLength >= 9) {
        lengthControl.style.color = 'green';
        icon.className = 'fa-solid fa-check';
    }
    else if (password.length == 0) {
        lengthControl.style.color = 'black';
        icon.className = 'fa-solid fa-x';
    }
    else {
        lengthControl.style.color = 'red';
        icon.className = 'fa-solid fa-x';
    }
}

// UpperValidation
function upperValidation() {
    let password = document.getElementById('password').value;
    const pattern = /[A-Z]/;
    let upperControl = document.getElementById('upperControl');
    let icon = document.getElementById('upperIcon');

    if (pattern.test(password) == true) {
        upperControl.style.color = 'green';
        icon.className = 'fa-solid fa-check';
    }
    else if (password.length == 0) {
        upperControl.style.color = 'black';
        icon.className = 'fa-solid fa-x';
    }
    else {
        upperControl.style.color = 'red';
        icon.className = 'fa-solid fa-x';
    }

}

// numberValidation
function numberValidation() {
    let password = document.getElementById('password').value;
    const pattern = /[0-9]/;
    let numberControl = document.getElementById('numberControl');
    let icon = document.getElementById('numberIcon');

    if (pattern.test(password) == true) {
        numberControl.style.color = 'green';
        icon.className = 'fa-solid fa-check';
    }
    else if (password.length == 0) {
        numberControl.style.color = 'black';
        icon.className = 'fa-solid fa-x';
    }
    else {
        numberControl.style.color = 'red';
        icon.className = 'fa-solid fa-x';
    }

}

// SpecialValidation
function specialValidation() {
    let password = document.getElementById('password').value;
    const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let specialControl = document.getElementById('specialControl');
    let icon = document.getElementById('specialIcon');

    if (pattern.test(password) == true) {
        specialControl.style.color = 'green';
        icon.className = 'fa-solid fa-check';
    }
    else if (password.length == 0) {
        specialControl.style.color = 'black';
        icon.className = 'fa-solid fa-x';
    }
    else {
        specialControl.style.color = 'red';
        icon.className = 'fa-solid fa-x';
    }
}

// PreventSpaces
function preventSpaces() {
    let list = document.getElementById('list');
    let password = document.getElementById('password');

    // Controlla se la password contiene spazi
    if (password.value.includes(' ')) {
        // Controlla se l'alert esiste già per evitare duplicati
        if (!document.getElementById('spacesAlert')) {
            let spacesControl = document.createElement('li');
            spacesControl.id = 'spacesAlert';
            spacesControl.innerHTML = '<i class="fa-solid fa-x"></i> La password non può contenere spazi vuoti';
            spacesControl.style.color = 'red';
            list.append(spacesControl);
        }
    } else {
        // Se non ci sono spazi, rimuovi l'alert se esiste
        const alert = document.getElementById('spacesAlert');
        if (alert) {
            alert.remove();
        }
    }
}

// AllValidations 
function passwordControl() {
    preventSpaces();
    lengthValidation();
    upperValidation();
    numberValidation();
    specialValidation();
}



// Ricordare: className sostituisce tutte le classi, mentre classList.add/toggle le aggiunge senza rimuovere quelle già presenti 