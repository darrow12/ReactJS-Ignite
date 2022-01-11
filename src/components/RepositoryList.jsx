import { RepositoryItem } from "./RepositoryItem"

const repositoryName = 'unform2'

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem 
          repository="unform2" 
          description="Forms in React" 
          link="https://github.com/darrow12/La-Queijada" 
        />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}

/* 
  O conceito de propriedade consiste em que eu posso enviar uma informação do componente pai/mãe (Nesse caso, do RepositoryItem, o pai é o RepositoryList).
  Ou seja, o RepositoryList pode enviar informações para o RepositoryItem
*/