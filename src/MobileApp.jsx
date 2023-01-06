import styled from "styled-components"
import SmartPhone from "./icons/Smartphone.png"
import GooglePlay from "./icons/GooglePlay.png"
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`

const Square = styled.div`
    width: 60rem;
    height: 20rem;
    border-radius: 4rem;
    background-color: #6C36FF;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px){
       width: 80%;
       height: 25rem;
    }

    img{
        width: 25rem;
        height: 25rem;
        transform: translateX(-10rem);
        
        @media (max-width: 900px){
        display: none;
        }
    }

    h1{
        text-align: center;
    }
`

const DownloadIcon = styled.div`
    transform: translateX(10rem);
    margin-top: 2rem;

    img{
        width: 9em;
        height: 4rem;
        cursor: pointer;
        @media (max-width: 900px){
        display: block;
        }
    }
`

const Collum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function MobileApp() {
    return(
        <Main>
            <Square>
                <img src={SmartPhone} alt="SmartPhone" />
                <Collum>
                    <h1>Download our <br /> Mobile App</h1>
                    <DownloadIcon>
                         <img src={GooglePlay} alt="GooglePlay" />
                    </DownloadIcon>
                </Collum>
            </Square>
        </Main>
    )
}