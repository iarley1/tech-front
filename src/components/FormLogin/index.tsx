import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { iLoginUser, loginSchema } from "../../schemas/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { StyleLoginForm } from "./styles"
import { useNavigate } from "react-router-dom"

export const FormLogin = () => {
    const navigate = useNavigate()
    const { loginUser, loadingButton, erroMessage } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm <iLoginUser>({
        mode: "onTouched",
        resolver: zodResolver(loginSchema)
    })

    const submit: SubmitHandler<iLoginUser> = (data) => {
        loginUser(data)
    }

    return (
        <StyleLoginForm noValidate onSubmit={handleSubmit(submit)}>
            <h1>Login</h1>
            { erroMessage && <p>Usuário ou senha inválidos.</p> }
            <div>
                <label>Email</label>
                <input  type="email" {...register("email")} required/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Senha</label>
                <input type="password" {...register("password")} required />
                {errors.password &&  <p>{errors.password.message}</p>}
            </div>

            <button disabled={loadingButton} type="submit" >{loadingButton ? <div className="spinner"></div> : "Entrar"}</button>

            <button type="button" onClick={() => navigate("/register")} >Cadastre-se</button>
        </StyleLoginForm>
    )
}