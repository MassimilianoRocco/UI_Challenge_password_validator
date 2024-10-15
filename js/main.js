function lengthValidation(){
    let password = document.getElementById('password').value;
    let passwordLength = password.length;
    let lengthControl= document.getElementById('lengthControl');
    if(passwordLength>= 9){
        lengthControl.style.color = 'green';
    }
    else if(password.length==0){
        lengthControl.style.color = 'black';
    }
    else{
        lengthControl.style.color = 'red';
    }
}

function upperValidation(){
    
}

function numberValidation(){

}

function specialValidation(){

}

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


function passwordControl(){
    preventSpaces();
    lengthValidation();
}