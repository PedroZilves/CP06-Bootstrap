import Aviso from './components/Aviso'
import Cartao from './components/Cartao'
import Lista from './components/Lista'
import Menu from './components/Menu'
import Slides from './components/Slides'

function App() {

  return (
    <>
    <Menu/>
      <h1>Loja geek</h1>

      <Slides/>

      <Cartao/>

      <Lista/>

      <Aviso/>
    </>
  )
}

export default App
