const {
  findUserByUsername,
  createUser,
  comparePassword
} = require("../services/user.service");

// Registra un nuevo usuario.
async function register(req, res, next) {
  try {
    const { username, password } = req.body;

    // Validación básica de los datos recibidos.
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "El usuario y la contraseña son obligatorios"
      });
    }

    if (password.length < 4) {
      return res.status(400).json({
        success: false,
        message: "La contraseña debe tener mínimo 4 caracteres"
      });
    }

    const existingUser = await findUserByUsername(username);

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "El usuario ya está registrado"
      });
    }

    await createUser(username, password);

    return res.status(201).json({
      success: true,
      message: "Usuario registrado correctamente"
    });
  } catch (error) {
    next(error);
  }
}

// Valida las credenciales para el inicio de sesión.
async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "El usuario y la contraseña son obligatorios"
      });
    }

    const user = await findUserByUsername(username);

    // Si el usuario no existe, la autenticación falla.
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Error en la autenticación"
      });
    }

    const validPassword = await comparePassword(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Error en la autenticación"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Autenticación satisfactoria"
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login };
