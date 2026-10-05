const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = 3000;

// Permite solicitudes desde clientes web y herramientas de prueba.
app.use(cors());

// Permite recibir datos enviados en formato JSON.
app.use(express.json());

// Ruta para comprobar que el servicio está disponible.
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Servicio web JACRYMO activo" });
});

// Rutas de registro e inicio de sesión.
app.use("/api/auth", authRoutes);

// Manejo general de errores.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servicio web JACRYMO ejecutándose en http://localhost:${PORT}`);
});
