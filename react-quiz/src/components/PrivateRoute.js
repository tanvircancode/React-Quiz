import { useAuth } from '../contexts/AuthContext';
import { Route } from 'react-router-dom';

export default function PrivateRoute({component : Component, ...rest}) {
    const { currentuser } = useAuth();
    return currentuser ? (
        <Route {...rest}></Route>
    ) : ();
}
