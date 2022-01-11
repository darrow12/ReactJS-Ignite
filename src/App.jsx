import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}

/* 

! Geralmente, só essa estrutura já é um componente react:
  export function App() {
  return <h1>hello world</h1>
}

  * Começar um componente com letra maiúscula;
  * Um componente por arquivo;
*/

// Fragment é uma tag do HTML sem nenhum nome, sem conteudo, só <>  e </>

// Renderizar é o ato de um componente ser exibido em tela, conteúdo foi contruido em tela

// Quando se tem um componente abaixo do outro, sempre precisa existir um componente por volta deles