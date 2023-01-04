import styled from "styled-components"
import Fork from "../icons/Fork.png"

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    margin: 1rem;

    @media (max-height: 900px){
        display: flex;
        flex-direction: column;

    }
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: ceter;

    p{
        margin: 1rem;
        color: #AA9CBB;
        font-weight: bold;
        cursor: pointer;

        :hover{
           color: #5e5569;
        }
    }

    @media (max-width: 600px){
        display: flex;
        justify-content: space-between;
        
        p{
            margin: 0.5rem;
        }
    }
    
`

const Buttoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        height:2rem;
        width: 4rem;
        margin: 0.5rem;
        border-radius: 1rem;
        border: none;
        background-color: #3E70F1;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: 0.1s;
        :hover{
            background-color: #19316d;
        }
    }
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    h1{
        margin: 1rem;
    }
`
export default function Cabecalho() {

    return(
        <Main>
            <Logo>
                <h1>Foodie</h1>
                <img alt="Logo" src={Fork}/>
            </Logo>
            <Links>
                <p>Home</p>
                <p>Store</p>
                <p>Services</p>
                <p>Contact</p>
                <p>SOBRE</p>
            </Links>
            <Buttoes>
                <button>Login</button>
                <button>Sign Up</button>
            </Buttoes>
        </Main>
    )
}