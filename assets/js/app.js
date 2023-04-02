const inputs = document.querySelectorAll("input");
const mensajeInput = document.querySelector("textarea");

mensajeInput.addEventListener('blur', (event) => {
  valida(event.target);
});

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("formulario__campo-invalido");
    input.parentElement.querySelector(".formulario__error").innerHTML = "";
  } else {
    input.parentElement.classList.add("formulario__campo-invalido");
    input.parentElement.querySelector(".formulario__error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "patternMismatch",
  "tooShort"
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    patternMismatch: "El correo no es válido"
  },
  mensaje: {
    valueMissing: "Este campo mensaje no puede estar vacío",
    tooShort: "El mensaje debe contener más de 10 caracteres."
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
