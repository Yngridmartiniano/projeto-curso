import dadosDisciplinasTecnicas from '../dados/dadosDisciplinasTecnicas'

function ListarDisciplinasTecnicas() {

    return(
        <section className='disciplinas'>
        <header className='headerDisciplinas'>
           <h1>DisciplinasTecnicas</h1>
        </header>
          
    <div className='contentDisciplinas'>     
        
        {
            dadosDisciplinasTecnicas.map(
                (item, index) => (
                    <article key={index}>
                    <img src={item. link_imagem}
                    alt='{item.nome}' 
                    title='{item.nome}' />
                    {item.nome} - {item.sigla}
                    </article>
                )
            )
        }
    </div>
    </section>

    )
}
export default ListarDisciplinasTecnicas