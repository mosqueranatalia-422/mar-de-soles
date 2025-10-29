// ====== FUNCIÓN DE INICIO DE SESIÓN ======
export function iniciarSesion(Username, password, navigate) {
  if (!Username || !password) {
    console.error("No se encontraron los campos de usuario o contraseña.");
    return;
  }

  if (Username === "admin" && password === "admin") {
    localStorage.setItem("usuarioLogeado", Username);
    navigate("/");
  } else {
    alert("Credenciales incorrectas...");
  }
}

// ====== FUNCIÓN DE REGISTRO ======
export function Inicio(Usuario, navigate) {
  if (!Usuario) {
    console.error("No se encontró el campo de usuario.");
    alert("Por favor ingresa tu correo");
    return;
  }

  alert("Registro exitoso");
  navigate("/registro");
}

// ====== FUNCIÓN DE RECUPERAR CONTRASEÑA ======
export function recuperarCuenta(correo) {
  if (!correo.trim()) {
    alert("Por favor ingresa tu correo o número de celular");
  } else {
    alert("Si tu cuenta existe, te enviaremos un enlace de recuperación.");
  }
}

// ====== FUNCIÓN DE CERRAR SESIÓN ======
export function cerrarSesion(navigate) {
  localStorage.removeItem("usuarioLogeado");
  navigate("/registro");
}

// ====== FUNCIÓN DE VERIFICAR SESIÓN ACTIVA ======
export function verificarSesion(navigate) {
  const usuario = localStorage.getItem("usuarioLogeado");
  if (!usuario) {
    navigate("/registro");
  }
}
