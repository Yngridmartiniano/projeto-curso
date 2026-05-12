function Header(){

    return (
       <>
        <div className="headerTopo">
       <h1>Curso Técnico em Desenvolvimento de sistemas</h1>
      </div>
      <nav className="headerMenu">
        <ul>
            <li><Link to = "/"></Link>Home</li>
            <li><Link to = "/SobreCurso"></Link>Curso</li>
            <li><Link to = "/DiciplinaTecnicas"></Link>Diciplinas Básicas</li>
            <li><Link to = "/DiciplinasCurriculares"></Link>Diciplinas Técnicas</li>
            <li><Link to = "/equipe"></Link>Equipe</li>
        </ul>
      </nav>
       </>
    )
  }

  export default Header