import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { StyleHeader } from "./styles"

export const Header = () => {
    const { user, logout } = useContext(UserContext)

    return (
        <StyleHeader>
            <div>
                <h1>Olá, {user.name}</h1>
                <button onClick={logout} type="button">Sair</button>
            </div>
        </StyleHeader>
    )
}