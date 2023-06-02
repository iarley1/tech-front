import { Routes, Route } from "react-router-dom"
import { RegisterPage } from "../pages/registerPage"
import { DashboardPage } from "../pages/dashboardPage"
import { LoginPage } from "../pages/loginPage"
import { AuthRoutes } from "../components/ProtectedRoute"

export function RoutesPage () {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route element={< AuthRoutes />}>
                <Route path="/dashboard" element={<DashboardPage />}/>
            </Route>
        </Routes>
    )
}