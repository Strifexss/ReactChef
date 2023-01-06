import styled from "styled-components"
import ChefIcon from "./icons/Chef.png"

const Main = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 4rem;

    img{
        width: 100%;
        height: 100%;
    }

    button {
        margin: 1rem;
        border: none;
        width: 10rem;
        height: 4rem;
        border-radius: 2rem;
        background-color: #3870FF;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: 0.1s;

        @media (max-width: 900px){
            width: 10rem;
            height: 4rem;
    
    }

        :hover{
            background-color: #1d3779;
        }
    }

    h1{
        font-size: 5rem;
        text-align: center;

        @media (max-width: 900px){
        font-size: 2rem; 
    }
    }

    p{
        text-align: center;
    }

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Flexar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Chef() {
    return(
       <Main>
            <Flexar>
                <h1>We Have the Best <br /> Chef Team of World</h1>    
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, voluptatibus est earum ut vitae, similique asperiores fuga nobis sint reiciendis ratione sequi ea optio quo molestiae itaque, aliquid ipsam minima?</p>
                <button>Meet Your Team</button>
            </Flexar>
            <Flexar>
                <img src={ChefIcon} alt="Chef" />
            </Flexar>
        </Main>
    )
}