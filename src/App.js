import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from "./componentes/Error";
import Equipe from "./componentes/Equipe";
import SobreCurso from "./componentes/SobreCurso";

import DisciplinasCurriculares from "./componentes/DisciplinasCurriculares";
import DisciplinasTecnicas from "./componentes/DisciplinasTecnicas";

import ListarDisciplinasTecnicas from "./componentes/ListarDisciplinasTecnicas";
import ListarDisciplinasCurriculares from "./componentes/ListarDisciplinasCurriculares";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes >
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Main />} />
          <Route path="/SobreCurso" element={<SobreCurso />} />
          <Route path="/DisciplinasTecnicas" element={<DisciplinasTecnicas />} />
          <Route path="/DisciplinasCurriculares" element={<DisciplinasCurriculares />} />

          <Route path="/ListarDisciplinasTecnicas/:id" element={<ListarDisciplinasTecnicas />} />
          <Route path="/ListarDisciplinasCurriculares/:id" element={<ListarDisciplinasCurriculares />} />

          <Route path="/equipe" element={<Equipe />} />

        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
