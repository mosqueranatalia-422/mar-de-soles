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

// ==============================
// ✅ MANEJO DE EVENTO DE ENVÍO DE OPINIONES
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnEnviar");

  // ✅ Validación: si no existe el botón, no ejecutar nada
  if (!btn) {
    console.warn("btnEnviar no encontrado en este documento.");
    return;
  }

  btn.addEventListener("click", () => {
    console.log("Botón clickeado ✅");

    const nombre = document.getElementById("nombre")?.value.trim();
    const opinion = document.getElementById("opinion")?.value.trim();

    if (!nombre || !opinion) {
      alert("Por favor, completa tu nombre y tu opinión.");
      return;
    }

    // Recuperar opiniones anteriores
    let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];

    // Crear la nueva opinión con fecha
    let fecha = new Date().toLocaleString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    opiniones.push({ nombre, opinion, fecha });

    // Guardar en localStorage
    localStorage.setItem("opiniones", JSON.stringify(opiniones));

    // Redirigir
    window.location.href = "opiniones.html";
  });
});
