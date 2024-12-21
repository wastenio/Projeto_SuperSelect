const pool = require('../config/db.js');

const findUserByEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
    return rows[0]
}

const createUser = async (userName, email, passwordHash) => {
    const [result] = await pool.query('INSERT INTO users (userName, email, password) VALUES (?, ?, ?)', [userName, email, passwordHash]
    )
    return result.insertId
}

module.exports = {findUserByEmail, createUser}