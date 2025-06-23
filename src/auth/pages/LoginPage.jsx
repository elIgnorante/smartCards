import { useNavigate } from "react-router-dom";
import { NavbarAuth } from "../components";
import { MailIcon, PasswordIcon, GoogleIcon, UserIcon } from "../../assets";
import flashicon from "../../assets/images/FlashIcon.png";

import { useForm } from "../hooks";

export const LoginPage = () => {
  const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

	const onLogin = e => {
		e.preventDefault();

		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});

		onResetForm();
	};

  return (
    <>
      <div className="mainLogin">
        <section className="sectionForm">
          <NavbarAuth />
          <section className="formContent">
            <div className="mainform">
              <div className="headerForm">
                <h1 className="titleForm">Login</h1>
                <span className="spanForm">
                  Ingresa los datos necesarios
                </span>
              </div>

              <div className="formContainer">
                <form className="formLogin" onSubmit={onLogin}>

                  <div className="formGroup">
                    <div className="divInput">
                      <UserIcon />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={onInputChange}
                        placeholder="Nombre de usuario"
                      />
                    </div>
                  </div>

                  <div className="formGroup">
                    <div className="divInput">
                      <MailIcon />

                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="formGroup">
                    <div className="divInput">
                      <PasswordIcon />
                      <input
                        className="inputform"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        placeholder="Contraseña"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btnPrimary"
                  >
                    Login
                  </button>
                </form>
              </div>

              <div className="footerForm">
                <span className="spanfooter">Otras opciones</span>

                <div className="googleOpcion">
                  <button type="button" className="btnGoogle">
                    <GoogleIcon />
                    Ingresar con Google
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="sectionShow">
          <div className="showContent">
            <h3>¡Te esperan aventuras muy buenas! ¡Inicia sesión ahora!</h3>
            <div className="iconShow">
              <img src={flashicon} alt="flashicon.png" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
