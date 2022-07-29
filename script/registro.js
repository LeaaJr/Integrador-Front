let dataRead = function () {
    console.log(
        document.querySelector('#nombres').value,
        document.querySelector('#apellidos').value,
        document.querySelector('#email').value,
        document.querySelector('#password').value,
    );
    let myObjet = {
        //valor
        nombre : document.querySelector('#nombres').value,
        apellido : document.querySelector('#apellidos').value,
        email : document.querySelector('#email').value,
        password : document.querySelector('#password').value,
    
    }

    console.log(myObjet)
    console.log(JSON.stringify(myObjet))

    // PERSISTIR DATOS

    save_localStorage(myObjet);

    window.location = "info.html"



}


let save_localStorage = function(myObj){
    localStorage.setItem("Myinfo", JSON.stringify(myObj));
} 
    

