import { Link } from "react-router-dom"

function Header(){

    return (
       <header>
        <div className="headerTopo">
       <h1>Curso Técnico em Desenvolvimento de sistemas</h1>
      </div>
      <nav className="headerMenu">
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/sobreCurso">Curso</Link></li>
            <li><Link to = "/disciplinasCurriculares">Disciplinas Básicas</Link></li>
            <li><Link to = "/disciplinasTecnicas">Disciplinas Técnicas</Link></li>
            <li><Link to = "/equipe">Equipe</Link></li>
        </ul>
      </nav>
       </header>
    )
  }

  export default Header