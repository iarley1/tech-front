import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { iRegisterUser, registerSchema } from "../../schemas/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from 'react-input-mask';
import { StyleRegisterForm } from "./styles"
import { useNavigate } from "react-router-dom"

export const FormRegister = () => {
    const navigate = useNavigate()
    const { registerUser, loadingButton, erroMessage } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm <iRegisterUser>({
        mode: "onTouched",
        resolver: zodResolver(registerSchema)
    })

    const submit: SubmitHandler<iRegisterUser> = (data) => {
        registerUser(data)
    }

    return (
        <StyleRegisterForm noValidate onSubmit={handleSubmit(submit)}>
            <h1>Cadastro</h1>
            { erroMessage && <p>Email ja cadastrado</p> }
            <div>
                <label>Name</label>
                <input placeholder="Nome" {...register("name")} required/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input placeholder="Email" {...register("email")} required/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Numero de telefone</label>
                <InputMask 
                    mask="(99) 99999-9999"
                    maskChar=""
                    placeholder="(xx) xxxxx-xxxx"
                    {...register("phoneNumber")}/>
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
            <div>
                <label>Senha</label>
                <input placeholder="Senha" type="password" {...register("password")} required />
                {errors.password &&  <p>{errors.password.message}</p>}
            </div>
            <button type="submit" >{loadingButton ? <div className="spinner"></div> : "Cadastrar"}</button>

            <button type="button" onClick={() => navigate("/")} >Entrar</button>
        </StyleRegisterForm >
    )
}