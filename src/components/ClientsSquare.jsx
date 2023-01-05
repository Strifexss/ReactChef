import styled from "styled-components"


const Main = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        width: 10rem;
        height: 11rem;
        border-radius: 50%;
        border: solid 5px #3771FE;
    }

    h2{
        margin-top: 1rem;
    }

    p{
        text-align: center;
        margin-top: 1rem;
    }
`

export default function ClientsSquare(props) {
    return(
        <Main>
            <img src={props.imagem} alt="Client" />
            <h2>{props.nome}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur suscipit tempore non illum! Sint ex et dolorum, consequatur sunt</p>
        </Main>
    )
}