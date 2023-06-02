import { useContext } from "react"
import { StyleCard } from "./styles"
import { UserContext } from "../../contexts/UserContext"

export const CardContact = ({ contact }: any) => {
    const { openModal, setContactData } = useContext(UserContext)

    return (
        <StyleCard onClick={() => {openModal(""); setContactData(contact)}}>
            <div>
                <h2>{ contact.name }</h2>
                <p>{ contact.email }</p>
            </div>
            <p className="number">{contact.phoneNumber}</p>
        </StyleCard>
    )
}