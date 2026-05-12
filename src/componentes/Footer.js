function Footer(){

    return (
       <footer>
       <div className="menuFooter">
        <ul>
        <li><Link to = "/SobreCurso"></Link>Curso</li>
            <li><Link to = "/DiciplinaTecnicas"></Link>Diciplinas Básicas</li>
            <li><Link to = "/DiciplinasCurriculares"></Link>Diciplinas Técnicas</li>
            <li><Link to = "/equipe"></Link>Equipe</li>
        </ul>
        </div>
       <div className="credenciais"> 
        <h1>Desenvolvido por: Yngrid Martiniano - 2026</h1>
        </div>
        </footer>
    )
  }

  export default Footer