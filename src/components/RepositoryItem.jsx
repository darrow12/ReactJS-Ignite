// React coloca todos as propriedades dentro de um único argumento chamado props
export function RepositoryItem(props) {
  return (
    <li>
    <strong>{props.repository ?? 'Default'}</strong>
    {/* Caso o repositório esteja vazio, coloque um nome 'default' para todos que não tem | isso desconsidera que o 0 é um valor inválido | o sinal || (ou) também funciona */}
    <p>Forms in React</p>

    <a href="">
      Acessar repositório
    </a>
  </li>
  );
}

// Sempre que quero retornar mais de uma linha de html, eu coloco parenteses. Se for uma linha, mantém nela mesmo