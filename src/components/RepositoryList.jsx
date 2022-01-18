import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/darrow12/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);
  // Cuidado pra não deixar o segundo parametro, porque ele vai ficar em loop

  // console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}

/* 
  O conceito de propriedade consiste em que eu posso enviar uma informação do componente pai/mãe (Nesse caso, do RepositoryItem, o pai é o RepositoryList).
  Ou seja, o RepositoryList pode enviar informações para o RepositoryItem
*/