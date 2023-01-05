import styled from "styled-components"
import DishesIcons from "./components/DishesIcons"
import GiantFood from "./icons/GiantFood.jpg"
import ShrimpSalad from "./icons/ShrimpSalad.jpg"
import PennePasta from "./icons/PennePasta.jpg"
import Sausage from "./icons/Sausage Fried Rice.jpg"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    border-top: #3A2A50 solid 1px;

    @media (max-width: 900px){
        margin-top: 8rem;

    }
   
    h1{
        margin: 2rem;
    }
`

const Comidas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media (max-width: 900px){
     flex-direction: column;
    
    }
`

export default function PopularDishes() {
    return(
        <Main>
            <h1>Popular Dishes</h1>
            <Comidas>
                <DishesIcons imagem={GiantFood}texto="Chicken Salad"/>
                <DishesIcons imagem={ShrimpSalad} texto="Shrimp Salad"/>
                <DishesIcons imagem={PennePasta} texto="Penne Pasta"/>
                <DishesIcons imagem={Sausage} texto="Fried Rice"/>
            </Comidas>
        </Main>
    )
}