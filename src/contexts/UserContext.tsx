import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { iLoginUser, iRegisterUser } from "../schemas/userSchema"
import { api } from "../api/api"
import { AxiosError } from "axios"
import { iContact, iRegisterContact, iUpdateContact } from "../schemas/contactSchema"

interface iUserContext{
    user: any;
    loginUser: (data: iLoginUser) => void
    registerUser: (data: iRegisterUser) => void
    loading: boolean
    loadingButton: boolean
    erroMessage: boolean
    addContact: (data: iRegisterContact) => void
    openModal: (typeModal: string) => void
    closeModal: (typeModal: string) => void
    logout: () => void
    showModalAdd: boolean
    showModalUpdate: boolean
    contactData: iContact | null
    setContactData: React.Dispatch<React.SetStateAction<null>>
    deleteContact: (idContact: number | undefined) => void
    updateContact: (idContact: number | undefined, data: iUpdateContact) => void
 }

interface iUserProviderProps {
    children: React.ReactNode
}

interface iRequestError {
    message: string
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iUserProviderProps) => {
    const [loading, setLoading] = useState(true)
    const [loadingButton, setLoadingButton ] = useState(false)
    const [showModalAdd, setShowModalAdd] = useState(false)
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [erroMessage, setErroMessage] = useState(false)
    const [user, setUser] = useState(null)
    const [contactData, setContactData] = useState(null)

    const navigate = useNavigate()

    const openModal = (typeModal: string) => {
        if(typeModal === "add"){
            setShowModalAdd(true)
        } else {
            setShowModalUpdate(true)
        }
    }

    const closeModal = (typeModal: string) => {
        if(typeModal === "add"){
            setShowModalAdd(false)
        } else {
            setShowModalUpdate(false)
        }
        setErroMessage(false)
    }

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    const loginUser = async (data: iLoginUser) => {
        try {
            setLoadingButton(true)
            setLoading(true)
            setErroMessage(false)
            const res = await api.post("/login", data)
            setUser(res.data)
            localStorage.setItem("@USERTOKEN", res.data.token)
            navigate("/dashboard")
        } catch (error) {
            const currentError = error as AxiosError<iRequestError>
            if(currentError.response?.data.message){
                setErroMessage(true)
            }
        } finally {
            setLoading(false)
            setLoadingButton(false)
        }
    }

    const registerUser = async (data: iRegisterUser) => {
        try {
            setLoadingButton(true)
            setLoading(true)
            setErroMessage(false)
            await api.post("/users", data)
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch (error) {
            setErroMessage(true)
        } finally {
            setLoading(false)
            setLoadingButton(false)
        }
    }

    const addContact = async (data: iRegisterContact) => {
        const token = localStorage.getItem("@USERTOKEN")

        try {
            setErroMessage(false)
            setLoadingButton(true)
            await api.post("/contacts", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            closeModal("add")
        } catch (error) {
            setErroMessage(true)
        } finally {
            setLoadingButton(false)
        }
    }

    const updateContact = async (idContact: number | undefined, data: iUpdateContact) =>{
        const token = localStorage.getItem("@USERTOKEN")

        try {
            setErroMessage(false)
            await api.patch(`/contacts/${idContact}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            closeModal("")
        } catch (error) {
            setErroMessage(true)
        }
    }

    const deleteContact = async (idContact: number | undefined) =>{
        const token = localStorage.getItem("@USERTOKEN")
        
        try {
            await api.delete(`/contacts/${idContact}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            closeModal("")
        } catch (error) {
            
        }
    }

    useEffect(() => {
        const authUser = async () => {
            const token = localStorage.getItem("@USERTOKEN")

            if (!token) {
                setLoading(false)
                setUser(null)
                return
            }

            try {
                const res = await api.get("/users/profile", {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setUser(res.data)
            } catch (error) {
                localStorage.clear() 
            } finally {
                setLoading(false)
            }
        }
        authUser()
    },[user])

    return (
        <UserContext.Provider value={{ loading, loginUser, user, registerUser, loadingButton, erroMessage, addContact, openModal, closeModal, showModalAdd, logout, showModalUpdate, setContactData, contactData,deleteContact, updateContact }}>
            { children }
        </UserContext.Provider>
    )
}