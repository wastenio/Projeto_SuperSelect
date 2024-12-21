const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModels = require("../models/userModels.js");

const register = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const userExists = userModels.findUserByEmail(email);
    if (userExists) {
      return req.status(400).json({ message: "Email já cadastrado" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await userModels.createUser(userName, email, passwordHash);

    res.status(201).json({ message: "Usuário criado com sucesso", userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModels.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Email inválido" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return res.status(400).json({ message: "Senha inválida" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT, {
      expiresIn: "1h",
    });
    console.log(token);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
