import styled from "styled-components"

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 9rem;
margin:1rem;
cursor: pointer;
border: transparent solid 1px;
@media (max-width: 500px){
        width: 6rem;
        margin: 0.8rem;
    }

:hover{
    border: solid 1px #fff;
    border-radius: 1rem;
}

img {
    width: 3rem;
    height: 3rem;
}

p {
    text-align: center;
    margin: 1rem;
    transform: translateY(0.4rem);
}
`

export default function IconsButtons(props) {
    return(
        <Main>
            <img src={props.image} alt="Truck" />
            <p>{props.texto}</p>
        </Main>
    )
}