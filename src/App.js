import Cabecalho from './components/cabecalho'
import Landing from './Landing'
import PopularDishes from './PopularDishes'
import Chef from './Chef'
import ClientSays from './ClientSays'
import MobileApp from './MobileApp'

export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <Landing/>
      <PopularDishes/>
      <Chef/>
      <ClientSays/>
      <MobileApp/>
    </div>
  )
}
