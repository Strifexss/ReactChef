import Cabecalho from './components/cabecalho'
import Landing from './Landing'
import PopularDishes from './PopularDishes'
import Chef from './Chef'

export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <Landing/>
      <PopularDishes/>
      <Chef/>
    </div>
  )
}
