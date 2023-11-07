import Aviso from './components/Aviso'
import Cartao from './components/Cartao'
import Lista from './components/Lista'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Slides from './components/Slides'
import Tabela from './components/Tabela'

function App() {

  return (
    <>
      <Menu/>
        
        <h1 className='text-center mt-5'>Loja Nerd</h1>

      <Slides/>

        <h3 className='text-center'>Produtos mais vendidos:</h3>
      <Cartao/>

      <Lista/>

      <Aviso/>

        <h3 className='text-center'>Tabela de preços</h3>
      <Tabela/>

      <Rodape/>
    </>
  )
}

export default App
