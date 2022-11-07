
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }else{
                RegistrarPersona(); 
                event.preventDefault()             
                
            }

            form.classList.add('was-validated')
        }, false)
    })
    })()

function RegistrarPersona(){
    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let correo = document.querySelector("#txtCorreo").value;
    let celular = document.querySelector("#txtCelular").value;
    let role = document.querySelector("#txtRol").value;

    let url='http://localhost:3000/personas';
    let datos ={
        nombres: nombres,
        apellidos:apellidos,
        correo:correo,
        celular:celular,
        role:role
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
}