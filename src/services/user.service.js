const fs = require("fs/promises");
const path = require("path");
const bcrypt = require("bcryptjs");

const usersFile = path.join(__dirname, "../../data/users.json");

// Lee los usuarios almacenados.
async function readUsers() {
  const content = await fs.readFile(usersFile, "utf8");
  return JSON.parse(content);
}

// Guarda la lista actualizada de usuarios.
async function writeUsers(users) {
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2));
}

// Busca un usuario por nombre.
async function findUserByUsername(username) {
  const users = await readUsers();
  return users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
}

// Crea un usuario y almacena la contraseña como hash.
async function createUser(username, password) {
  const users = await readUsers();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    username,
    password: hashedPassword
  };

  users.push(newUser);
  await writeUsers(users);
  return newUser;
}

// Compara la contraseña recibida con el hash almacenado.
async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = {
  findUserByUsername,
  createUser,
  comparePassword
};
