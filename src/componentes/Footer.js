import { Link } from "react-router-dom"
function Footer(){

    return (
       <footer>
       <div className="menuFooter">
        <ul>
        <li><Link to = "/">Home</Link></li>
            <li><Link to = "/sobreCurso">Curso</Link></li>
            <li><Link to = "/disciplinasCurriculares">Disciplinas Básicas</Link></li>
            <li><Link to = "/disciplinaTecnicas">Disciplinas Técnicas</Link></li>
            <li><Link to = "/equipe">Equipe</Link></li>
        </ul>
        </div>
       <div className="credenciais"> 
        <h1>Desenvolvido por: Yngrid Martiniano - 2026</h1>
        </div>
        </footer>
    )
  }

  export default Footer