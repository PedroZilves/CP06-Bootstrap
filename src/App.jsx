import Aviso from './components/Aviso'
import Cartao from './components/Cartao'
import Lista from './components/Lista'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Slides from './components/Slides'
import Tabela from './components/Tabela'
import './App.scss'

function App() {

  const divStyle = {
    backgroundImage: 'url("/fundo.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'auto',

    
  }

  return (
    <>
      <div style={divStyle}>

      <Menu/>
        <h1 className='text-center mt-5 '>Loja Nerd</h1>

      <Slides/>

        <h3 className='text-center '>Produtos mais vendidos:</h3>
      <Cartao/>

      <Lista/>

      <Aviso/>

      <Rodape/>
      </div>
    </>
  )
}

export default App
