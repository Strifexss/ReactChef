import styled from "styled-components";
import PlayButton from "./icons/PlayButton.png";

const Main = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        transform: translateY(7rem);
    }
`
const Flexar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    button {
        background-color: #EE6101;
        font-weight: bold;
        color: #FFE8B8;
        width: 5rem;
        height: 2.5rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: 0.1s;

        :hover{
            background-color: #853804;
        }
    }

    img{
        margin: 1rem;
        cursor: pointer;
    }

    p {
        cursor: pointer;
    }
`
const Textos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    h1 {
        font-size: 4rem;
    }

    @media (max-width: 600px){
        h1 {
            font-size:2rem;
        }
    }
`

const Textosbuttons = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 1rem;

    button {
        background-color: #EE6101;
        font-weight: bold;
        color: #FFE8B8;
        width: 5rem;
        height: 2.5rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: 0.1s;
        margin: 1rem;
        :hover{
            background-color: #853804;
        }
    }
`

const Order = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    button {
        background-color: #EE6101;
        font-weight: bold;
        color: #FFE8B8;
        width: 5rem;
        height: 2.5rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: 0.1s;

        :hover{
            background-color: #853804;
        }
    }

    img{
        margin: 1rem;
        cursor: pointer;
    }

    p {
        cursor: pointer;
    }
`

export default function Landing() {
    return(
        <Main>
            <Flexar>
                <Textos>
                    <h1>Order Best Food of Town whenever you Want</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus eos cumque velit eum in.</p>
                    <Textosbuttons>
                        <button>Explore</button>
                        <Order>
                            <img src={PlayButton}/>
                            <p>How to Order</p>
                        </Order>
                    </Textosbuttons>
                </Textos>
            </Flexar>
            <h1>Teste</h1>
        </Main>
    )
}