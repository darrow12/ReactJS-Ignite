// React coloca todos as propriedades dentro de um único argumento chamado props
export function RepositoryItem(props) {
  return (
    <li>
    <strong>{props.repository.name ?? 'Default'}</strong>
    {/* Caso o repositório esteja vazio, coloque um nome 'default' para todos que não tem | isso desconsidera que o 0 é um valor inválido | o sinal || (ou) também funciona */}
    {/* Caso não queira fazer daquele jeito de colocar o repository nos 4, é só colocar aqui: props.repository?.name ?? 'Default' | Ele vai verificar se o repository tá nulo ou nao, caso estiver, ele nem procura pelo nome e retorna logo o default*/}
    <p>{props.repository.description}</p>

    <a href={props.repository.link}>
      Acessar repositório
    </a>
  </li>
  );
}

// Sempre que quero retornar mais de uma linha de html, eu coloco parenteses. Se for uma linha, mantém nela mesmo



// Resumo do conceito de propriedades: a forma de conseguir passar informações de um componente pai/mãe pros componentes filhos
// Triade dos conhecimentos importantes do React: Componentes, Propriedades e Estado