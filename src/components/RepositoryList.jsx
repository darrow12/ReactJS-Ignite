import { RepositoryItem } from "./RepositoryItem"

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/darrow12/La-Queijada'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}

/* 
  O conceito de propriedade consiste em que eu posso enviar uma informação do componente pai/mãe (Nesse caso, do RepositoryItem, o pai é o RepositoryList).
  Ou seja, o RepositoryList pode enviar informações para o RepositoryItem
*/