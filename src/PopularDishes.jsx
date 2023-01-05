import styled from "styled-components"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    border-top: #3A2A50 solid 1px;

    @media (max-width: 900px){
        margin-top: 8rem;

    }

    h1{
        margin: 2rem;
    }
`

export default function PopularDishes() {
    return(
        <Main>
            <h1>Popular Dishes</h1>
        </Main>
    )
}