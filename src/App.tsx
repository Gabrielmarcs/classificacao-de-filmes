import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';

import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Rodape />
    </BrowserRouter>
  )
}

export default App
