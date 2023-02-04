import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PublicRoute = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(props.isAuth) { // Если авторизованы, то переноправляем в главную старницу
            navigate('/');
        }
    }, [props.isAuth])

    if(props.isAuth) {
        return;
    }
    return props.children;
}

export default PublicRoute;