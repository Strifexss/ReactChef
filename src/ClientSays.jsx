import styled from "styled-components"
import ClientsSquare from "./components/ClientsSquare"
import Pessoa1 from "./icons/Pessoa1.jpg"
import Pessoa2 from "./icons/Pessoa2.jpg"
import Pessoa3 from "./icons/Pessoa3.jpg"
import Pessoa4 from "./icons/Pessoa4.jpg"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  
`

const Clientes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 900px){
        flex-direction: column;
    }

`    

export default function ClientSays() {
    return(
        <Main>
            <h1>Our Client Says</h1>
            <Clientes>
                <ClientsSquare imagem={Pessoa1} nome="Milehal Marsh"/>
                <ClientsSquare imagem={Pessoa2} nome="Samuel Pessoa"/>
                <ClientsSquare imagem={Pessoa4} nome="Samantha Taylor"/>
                <ClientsSquare imagem={Pessoa3} nome="Ricardo Milani"/>
            </Clientes>
        </Main>
    )
}