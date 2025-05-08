import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';
import Filmes from './paginas/Filmes';
import Detalhes from './paginas/Detalhes';
import Lancamentos from './paginas/Lancamentos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/movie/:id" element={<Detalhes />} />
        <Route path="/lancamentos" element={<Lancamentos />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
