
// /** validación de formulario 1 */

// /** Variables */
// /** variables para campos */
// const email = document.querySelector("#email");
// const asunto = document.querySelector("#asunto");
// const mensaje = document.querySelector("#mensaje");

// const btnEnviar = document.querySelector("#enviar");
// const resetBtn = document.querySelector('#resetBtn');
// const formularioEnviar = document.querySelector('#enviar-email');

// /** eventos */
// eventListeners();
// const eventListeners = () => {
     
//      // Inicia la aplicación y deshabilita submit
//      document.addEventListener('DOMContentLoaded', iniciarApp);
     
//      // campos del formulario
//      email.addEventListener('blur', validarFormulario);
//      asunto.addEventListener('blur', validarFormulario);
//      mensaje.addEventListener('blur', validarFormulario);

//      // Boton de enviar en el submit
//      formularioEnviar.addEventListener('submit', enviarEmail);

//      // Boton de reset
//      resetBtn.addEventListener('click', resetFormulario);
// };


// /** funciones */
// const iniciarApp = () => {
//      // console.log("iniciando");
//      btnEnviar.disabled = true;
//      btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
// }

// // Valida que el campo tengo algo escrito
// const validarFormulario = (e) => {
    
//      if(e.target.value.length > 0 ) {
//           campo.style.borderBottomColor = 'green';
//           campo.classList.remove('error');
//      } else {
//           e.target.classList.add('border', 'border-red-500');
//      }

//      // Validar unicamente el email
//      if(this.type === 'email') {
//           validarEmail(this);
//      }

//      if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
//         btnEnviar.disabled = false;
//         btnEnviar.classList.remove('opacity-50');
//         btnEnviar.classList.remove('cursor-not-allowed');
//      }
// }

// // Resetear el formulario 
// const resetFormulario = (e) => {
//      formularioEnviar.reset();
//      e.preventDefault();
// }

// // Cuando se envia el correo
// const enviarEmail = (e) => {

//      e.preventDefault();

//      // Spinner al presionar Enviar
//      const spinner = document.querySelector('#spinner');
//      spinner.style.display = 'flex';

//      // Gif que envia email
//      const enviado = document.createElement('p');
//      enviado.textContent = 'Mensaje Enviado Correctamente';
//      enviado.classList.add('bg')

//      // Ocultar Spinner y mostrar gif de enviado
//      setTimeout( () => {
//           spinner.style.display = 'none';

//           document.querySelector('#loaders').appendChild( enviado );

//           setTimeout(() =>  {
//                enviado.remove();
//                formularioEnviar.reset();
//           }, 5000);
//      }, 3000);     
// }

// const validarEmail = (campo) => {
//      const mensaje = campo.value;

//      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
//      if( re.test(mensaje.toLowerCase()) ) {
//           campo.style.borderBottomColor = 'green';
//           campo.classList.remove('error');
//      } else {
//           campo.style.borderBottomColor = 'red';
//           campo.classList.add('error');
//      }
// }


/** variables */
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-email');

/** variables para campos */
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');



const eventListeners = () => {
     // cuando la app arranca
     document.addEventListener('DOMContentLoaded', iniciarApp);
     
     // campos del formulario a validar
     email.addEventListener('blur', validarFormulario);
     asunto.addEventListener('blur', validarFormulario);
     mensaje.addEventListener('blur', validarFormulario);
          
}

/** funciones */
const iniciarApp = () => {
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
     
}


/** valida el formulario */
const validarFormulario = (e) => {

     // console.log(e.target.type);
     //accediendo a lo que el usuario escribe en el input
     // console.log(e.target.value)
     
     if(e.target.value.length > 0 ) {
          console.log('si hay algo');
     } else{
          e.target.classList.add('border', 'border-red-500');
          mostrarError('Todos los campos son obligatorios');
     }

     if(e.target.type === 'email'){
          const resultado = e.target.value.indexOf('@');
          if(resultado < 0) {
               mostrarError('El email no es válido');
     }
}}


/** mostrando mensaje de error */
const mostrarError = (mensaje) => {
     
     const mensajeError = document.createElement('p');
     mensajeError.textContent = mensaje;
     mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-3', 'text-center', 'error');
     
     /** querySelectorAll para que retorne un arreglo */
     const errores = document.querySelectorAll('.error');
     /** así puedo usar errores.length */
     if(errores.length === 0) {
          
          formulario.appendChild(mensajeError);
     }

}


eventListeners();

















