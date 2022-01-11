import { useState } from 'react';

export function Counter() {
  // Por padrão, o React não fica monitorando as variáveis para ver se elas tiveram seus valores alterados pra então ele renderizar o conteúdo do componente de novo em tela
  // let counter = 0;


  const [counter, setCounter] = useState(0);
  // [] para desestruturar um array, entao o outro lado tá retornando um array, e eu to pegando o array, dividindo ele em duas variaveis
  // E ele não precisa mais ser let, porque ele não vai mudar
  // Esse setCounter vai dar possibilidade de eu alterar o valor dessa primeira variavel chamada counter 


  /* 
    * 0 continua sendo o valor inicial da variavel, do estado, mas com o estado por volta

    * Como estamos usando essa função de estado, ele não retorna só o valor da variavel, como temos na declaração de uma variavel tradicional. Na verdade, ele retorna duas coisas, e ele retorna essas duas coisas em um array, entao pra pegar essas duas cosias, eu posso fazer:

    counter[0] / valor da variavel em si
    counter[1] / o segundo retorno da funcao useState, tá dentro de counter[1]
    E a melhor forma maneira de escrever isso no código é utilizando atribuição via desestruturação | antes de desestruturar: let counter = useState(0);
  */
  
  function increment() {
    setCounter(counter + 1)
    // counter += 1; | Antes do setCounter(), eu tava usando só isso
    // counter = counter + 1;
    // counter ++ 1;
  }
  
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}

// Estado no React: São variáveis que ele vai monitorar e toda vez que o valor for alterado, ai sim ele vai renderizar o conteudo do componente de novo. Ou seja, ele não precisa ficar olhando pra todas as variaveis do sistema, ele vai olhar só pras variaveis do estado. Toda vez que o estado for alterado, ele altera na tela tbm

// Toda função do react que começa com use, a gente chama ela de Hook (gancho)



/* 
  ! Curiosidade foda

  ? O significado da variavel 'let' é: Let it change
*/


// O que aprendi?
// uma forma de conseguir ter variaveis que quando elas alterarem na aplicação, vao refletir nas alterações na interface
// Qualquer outro tipo de variavel que eu armazenar dentro do componente, eu posso mudar ela, ter variaveis, mas elas só vao estar disponiveis no Javascript e nao vao ser refletidas no HTML da pagina