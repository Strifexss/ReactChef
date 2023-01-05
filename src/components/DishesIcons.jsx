import styled from "styled-components"
import HeartIcon from "../icons/HeartIcon.png"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    height: 22rem;
    margin: 1rem;
    transform: scale(90%);
    border: solid 2px #453659;
    border-radius: 2rem;
    cursor: pointer;
    transition: 0.1s;

    img {
        width: 12rem;
        height: 12rem;
        border-radius: 2rem;
    }

    :hover{
        transform: scale(100%);
    }
`

const Valor = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    width: 100%;
    img  {
        width: 2.5rem;
        height: 2.5rem;
    }

    h2{
        border-radius: 2rem;
        width: 5rem;
        height: 2rem;
        background-color: #3870FF;
        text-align: center;
    }
`

export default function DishesIcons(props) {
    return(
        <Main>
            <Valor>
                <h2>$15</h2>
                <img src={HeartIcon} alt="Favorite" />
            </Valor>
            <img src={props.imagem} alt="Food" />
            <h1>{props.texto}</h1>
        </Main>
    )
}