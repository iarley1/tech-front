import { useContext } from "react"
import { Header } from "../../components/Header"
import { StyleDashboardPage } from "./styles"
import { UserContext } from "../../contexts/UserContext"
import { CardContact } from "../../components/ContactsCard"
import { AddModal } from "../../components/modals/ModalAddContact"
import { ModalUpdate } from "../../components/modals/ModalUpdateContact"

export const DashboardPage = () => {
    const { user, showModalAdd, showModalUpdate, openModal } = useContext(UserContext)

    return(
        <StyleDashboardPage>
            <Header />
            <hr />
            <div className="contacts">
                <h2>Contatos</h2>
                <button onClick={() => openModal("add")}>+</button>
            </div>
            { user!.contacts && user!.contacts.length === 0 ? <h3 className="no_contact">Nenhum contato castrado</h3> : <ul>
                { user!.contacts && user!.contacts.map( (contact: any, index: number) => <CardContact key={index} contact={contact}/> ) }
            </ul> } 
            { showModalAdd && <AddModal />  }
            { showModalUpdate && <ModalUpdate />  }
        </StyleDashboardPage> 
    )
}