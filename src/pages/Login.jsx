import React, { useState } from 'react';
import '../assets/styles/Login.css';

    function Login() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [isLoading, setIsLoading] = useState(false); // Añadimos el estado faltante

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            try {
                console.log('Intentando iniciar sesión con:', { email, password });
                if (email && password) {
                    alert(`Inicio de sesión exitoso con: ${email}`);
                } else {
                    alert('Por favor, complete todos los campos');
                }
            } catch (error) {
                console.error('Error en el inicio de sesión:', error);
                alert('Error al intentar iniciar sesión');
            } finally {
                setIsLoading(false);
            }
    };



    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1 className="login-title">Academic Ally</h1>

                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        placeholder="correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                        required
                    />

                    <input
                        type="password"
                        placeholder="contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                        required
                    />

                    <button
                        type="submit"
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Cargando...' : 'Iniciar sesión'}
                    </button>

                    <button
                        type="button"
                        className="register-button"
                    >
                        Registrarse
                    </button>

                    <div className="forgot-password">
                        <a href="#forgot">Olvidé mi contraseña</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;