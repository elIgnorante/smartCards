import { Navigate, useLocation } from 'react-router-dom';

/**
 * PrivateRoute revisa si el usuario está autenticado.
 * Si está autenticado, renderiza los hijos; de lo contrario, redirige a la página de inicio de sesión.
 * Autor: Álvaro Zermeño
 *
 */

export const PrivateRoute = ({ children }) => {
	const { state } = useLocation();

	return state?.logged ? children : <Navigate to='/login' />;
};