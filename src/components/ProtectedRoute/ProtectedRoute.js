// импорт зависимостей
import { Navigate, Outlet } from "react-router-dom";
// компонент для защиты авторизации
const ProtectedRoute = (props) => {
  
  return props.auth ? (<Outlet />) : (<Navigate to='/' replace />)
  
}

export default ProtectedRoute;