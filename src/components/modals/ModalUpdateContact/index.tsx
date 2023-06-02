import { useContext } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from "../../../contexts/UserContext";
import { iUpdateContact, registerContactSchema } from "../../../schemas/contactSchema";
import { StyledModalUpdate } from "./styles";
import InputMask from 'react-input-mask';
import 'animate.css';

export const ModalUpdate = () => {
    const { loadingButton, closeModal, erroMessage, contactData, deleteContact, updateContact } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm<iUpdateContact> ({
      mode: "onBlur",
      resolver: zodResolver(registerContactSchema)
    });
  
    const submit = (data: iUpdateContact) => {
        if(data.email === contactData?.email){
            delete data.email
        }
        updateContact(contactData?.id, data)
    }

    return (
      <StyledModalUpdate>
        <div className="modal-box animate__animated animate__backInRight">
          <header>
            <div className="header-div">
              <h3>Atualizar contato</h3>
              <button onClick={() => closeModal("")} type="button">X</button>
            </div>
          </header>
          <form noValidate onSubmit={handleSubmit(submit)}>
          { erroMessage && <p>Email ja cadastrado</p> }
            <div>
                <label>Name</label>
                <input defaultValue={contactData?.name} placeholder="Nome" {...register("name")} required/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input defaultValue={contactData?.email} placeholder="Email" {...register("email")} required/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Numero de telefone</label>
                <InputMask
                    defaultValue={contactData?.phoneNumber}
                    mask="(99) 99999-9999"
                    maskChar=""
                    placeholder="(xx) xxxxx-xxxx"
                    {...register("phoneNumber")}/>
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
            <div className="buttons">
                <button type="submit" >{loadingButton ? <div className="spinner"></div> : "Atualizar"}</button>
                <button onClick={() => deleteContact(contactData?.id)}>Deletar</button>
            </div>
          </form>
        </div>
      </StyledModalUpdate>
    );
  }