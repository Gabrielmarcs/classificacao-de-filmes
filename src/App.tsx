import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';
import Filmes from './paginas/Filmes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/filmes" element={<Filmes />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
