import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from "./componentes/Error";
import Equipe from "./componentes/Equipe";
import DiciplinasCurriculares from "./componentes/DiciplinasCurriculares";
import DiciplinasTecnicas from "./componentes/DiciplinasTecnicas";
import SobreCurso from "./componentes/SobreCurso";
import ListarDiciplinasCurriculares from "./componentes/ListarDiciplinasCurriculares";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes >
          <Route path="*" element={<Erro />} />
          <Route path="/" element={<Main />} />
          <Route path="/SobreCurso" element={<SobreCurso />} />
          <Route path="/DiciplinaTecnicas" element={<DiciplinaTecnicas />} />
          <Route path="/DiciplinasCurriculares" element={<DiciplinasCurriculares />} />

          <Route path="/DiciplinasTecnicas/:id" element={<ListarDiciplinasTecnicas />} />
          <Route path="/DiciplinasCurriculares/:id" element={<ListarDiciplinasCurriculares />} />

          <Route path="/equipe" element={<Equipe />} />

        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
