import React from "react";
import "../styles/login";

const Login = () => {
    return (
        <div className="Login">
        <div className="Login-container">
            <img src={logo} alt="logo" className="logo" />
            <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">
                Correo Electronico
            </label>
            <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password" className="label">
                Contraseña
            </label>
            <input
                type="password"
                name="password"
                placeholder="*********"
                className="input input-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                type="submit"
                onClick={handleSubmit}
                className="primary-button login-button"
            >
                INGRESAR
            </button>
            <a href="/recovery-password">¿Olvidaste tu Contraseña?</a>
            </form>
            <button
            className="secondary-button signup-button"
            onClick={handleSubmit}
            >
            CREAR CUENTA
            </button>
        </div>
        </div>
    );
};

export default Login;
