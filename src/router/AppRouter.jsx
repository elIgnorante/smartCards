// Router principal de la aplicación

/**
 * AppRouter es el router principal de la aplicación.
 * Define las rutas para la página de inicio, el inicio de sesión, el registro y el dashboard.
 * Autor: Álvaro Zermeño
 */
import { Route, Routes } from "react-router-dom";


import { DashboardRouter } from "../dashboard";
import { HomePage } from "../HomePage";
import { LoginPage, RegisterPage } from "../auth";
import { PrivateRoute } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />


{/* Rutas privadas */}
        <Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardRouter />
							</PrivateRoute>
						}
					/>
      </Routes>
    </>
  );
};
