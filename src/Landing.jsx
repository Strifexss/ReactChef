import styled from "styled-components";
import PlayButton from "./icons/PlayButton.png";
import GiantFood from "./icons/GiantFood.jpg";
import IconsButtons from "./components/IconsButtons";
import TruckIcon from "./icons/TruckIcon.png"
import BoxIcon from "./icons/BoxIcon.png"
import HouseIcon from "./icons/HouseIcon.png"

const Main = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 3rem;
    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        transform: translateY(7rem);
        margin-top: 1rem;
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
        text-align: center;
    }
`
const Textos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    h1 {
        font-size: 5rem;
        text-align: center;
    }

    @media (max-width: 1280px){
        h1 {
            font-size:2rem;
        }
    }
    
    @media (min-width: 1281px) and (max-width: 1599px){
    h1{
      font-size: 3rem;
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
        border: none;
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

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const GiantImage = styled.div`
    img{
        width: 40rem;
        height: 30rem;
        border-radius: 2rem; 
    }

    @media (max-width: 900px){
        img {
            width: 20rem;
            height: 20rem;
            border-radius: 2rem;
        }
    }

    @media (min-width: 900px) and (max-width: 1280px){
    img{
      height: 22rem;
      width: 25rem;
    }
    }
   
    @media (min-width: 1281px) and (max-width: 1599px){
    img{
        height: 35rem;
      width: 33rem;
    }
    }
`
const FlexIconButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
                            <img alt="Play" src={PlayButton}/>
                            <p>How to Order</p>
                        </Order>
                    </Textosbuttons>
                </Textos>
            </Flexar>
            <RightSide>
                <GiantImage>
                    <img alt="GiantFood" src={GiantFood}/>
                </GiantImage>
                <FlexIconButtons>
                    <IconsButtons image ={TruckIcon} texto="Delivery"/>
                    <IconsButtons image={BoxIcon} texto="PickUp"/>
                    <IconsButtons image={HouseIcon} texto="DineIn"/>
                </FlexIconButtons>
            </RightSide>
        </Main>
    )
}