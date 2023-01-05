import styled from "styled-components"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`

export default function MobileApp() {
    return(
        <Main>
            <h1>Teste</h1>
        </Main>
    )
}