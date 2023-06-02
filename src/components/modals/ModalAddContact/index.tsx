import { useContext } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from "../../../contexts/UserContext";
import { iRegisterContact, registerContactSchema } from "../../../schemas/contactSchema";
import { StyledModal } from "./styles";
import InputMask from 'react-input-mask';
import 'animate.css';

export const AddModal = () => {
    const { addContact, loadingButton, closeModal, erroMessage } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterContact> ({
      mode: "onBlur",
      resolver: zodResolver(registerContactSchema)
    });
  
    const submit = (data: iRegisterContact) => {
      addContact(data)
    }
  
    return (
      <StyledModal>
        <div className="modal-box animate__animated animate__backInRight">
          <header>
            <div className="header-div">
              <h3>Cadastrar contato</h3>
              <button onClick={() => closeModal("add")} type="button">X</button>
            </div>
          </header>
          <form noValidate onSubmit={handleSubmit(submit)}>
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
            <button type="submit" >{loadingButton ? <div className="spinner"></div> : "Cadastrar"}</button>
          </form>
        </div>
      </StyledModal>
    );
  }