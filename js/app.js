/** variables */
const btnEnviar = document.querySelector("#enviar");
// const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-email");

/** variables para campos */
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

/** Expresión regular para validar el email en javascript. Sitio: https://emailregex.com/ */
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const eventListeners = () => {
  // cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  // campos del formulario a validar
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  //   Reinicia el formulario, pero no lo voy a usar, porque el botón reset lo dejo como type = "reset"
  //   btnReset.addEventListener("click", resetearFormulario);

  // enviar el formulario
  formulario.addEventListener("submit", enviarEmail);
};

/** funciones */
const iniciarApp = () => {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
};

/** valida el formulario */
const validarFormulario = (e) => {
     
  if (er.test(e.target.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }

  if (e.target.value.length > 0) {
    // eliminando los errores
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
    /** borrando las clases para un input no válido */
    e.target.classList.remove("border", "border-red-500");
    /** agregando las clases para un input válido */
    e.target.classList.add("border", "border-green-500");
  } else {
    /** borrando las clases para un input válido */
    e.target.classList.remove("border", "border-green-500");
    /** agregando las clases para un input no válido */
    e.target.classList.add("border", "border-red-500");
    /** invocando a la función mostrandoError */
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      // eliminando los errores
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      /** borrando las clases para un input no válido */
      e.target.classList.remove("border", "border-red-500");
      /** agregando las clases para un input válido */
      e.target.classList.add("border", "border-green-500");
    } else {
      /** borrando las clases para un input válido */
      e.target.classList.remove("border", "border-green-500");
      /** agregando las clases para un input no válido */
      e.target.classList.add("border", "border-red-500");
      /** invocando a la función mostrandoError */
      /** invocando a la función mostrandoError */
      mostrarError("El email no es válido");
    }
  }
};

/** mostrando mensaje de error */
const mostrarError = (mensaje) => {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-3",
    "text-center",
    "error"
  );

  /** querySelectorAll para que retorne un arreglo */
  const errores = document.querySelectorAll(".error");
  /** así puedo usar errores.length */
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
};

/** función para resetear el formulario */
const resetearFormulario = () => {
  /** borrando todos los datos del form */
  formulario.reset();
  /** reiniciando la app */
  iniciarApp();
};

/** enviar el formulario */
const enviarEmail = (e) => {
  e.preventDefault();
  /** mostrando el spinner que está por defecto oculto */
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";
  /** Después de 3 segundos oculta el spinner y muestra el mensaje */
  setTimeout(() => {
    spinner.style.display = "none";
    // mostrando el mensaje de éxito
    const parrafo = document.createElement("p");
    parrafo.textContent = "Mensaje enviado correctamente";
    parrafo.classList.add(
      "text-center",
      "bg-green-500",
      "text-white",
      "font-bold",
      "p-2",
      "my-10"
    );
    //inserta el parrafo antes del spinner
    formulario.insertBefore(parrafo, spinner);

    /** Después de 3 segundos se limpia el formulario y se borra el mensaje de éxito */
    setTimeout(() => {
      parrafo.remove(); //elimina el mensaje de éxito
      resetearFormulario(); //limpia el formulario)
    }, 3000);
  }, 3000);
};

eventListeners();
