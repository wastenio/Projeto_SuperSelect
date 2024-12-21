// Register.jsx
import React, { useState } from 'react';

const Register = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10); // Criptografia da senha
    localStorage.setItem('user', JSON.stringify({ name, email, password: hashedPassword }));
    alert('Cadastro realizado com sucesso!');
    onRegisterSuccess(); // Notifica o componente principal sobre o sucesso
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleRegisterSubmit}>
        <label>Nome:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

        <label>E-mail:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <label>Senha:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

        <label>Confirmar Senha:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />

        <button type="submit">Cadastrar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;
