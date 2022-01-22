  type User ={
    name: string;
    email: string;
    address: {
      city: string;
      state?: string;
      // Aqui eu posso falar que a cidade e estado não são obrigatorios no TS. Vamos dizer que o estado não é obrigatório colocando um ? depois do nome 'state?:'
    }
  }

  // No parametro user, era pra ter os dados dele
  function showWelcomeMessage(user: User) {
    return `Hello ${user}, welcome to the app. Your e-mail is ${user.email}. Your city is ${user.address.city}, and you state is ${user.address.state}`;
  }

  const user = {
    name: 'John',
    email: 'email@john.com',
    address: {
      city: 'São Paulo',
      state: 'SP'
    }
  }

  showWelcomeMessage(user);

  /* 
  Quando vamos fazer uma alteração no código, ou utilizar de uma variável, ou chamar uma função, a gente não sabe exatamente qual é o formato das informações que tem ali dentro. O user ali em cima, pode ser qualquer coisa. Se colocar showWelcomeMessage('quejo');, ele não vai dar erro, porque o JS permite fazer por conta da tipagem dinâmica.

  Ele permite a gente passar para uma varável que a gente espera um tipo diferente, por exemplo, ela ta esperando um objeto, mas eu posso passar um texto, um vetor, um número, etc. Entretanto, isso é extremamente problemático para o software.

  Caso isso aconteça na vida real, a hora que chegar a execução dessa função: ou ela vai retornar algo muito errado, ou ela nem vai retornar e vai dar um erro durante a execução. E é ai que entramos com o TypeScript.

  O TypeScript permite adicionar tipagens, adicionar qual que é o formato das informações que eu tô esperando dentro dos argumentos da minha função, ou qual é o formato das informações que eu tô esperando retornar de uma função.

  Como tem um user ai dentro, eu posso definir um tipo para ele, eu posso definir um tipo para o retorno da minha função.

  ! Tipos sempre devem ser definidos como a letra maiúscula. Ex: type User = {}
  * No TS, a gente pode definir um tipo de um objeto utilizando type ou interface. Hoje em dia há pouca diferença entre ambos, mas indo pelo lado mais semântico, type é mais utilizado. interface é mais para herança para herdar contratos e coisas assim.
  */

// Agora lá no user, eu vou dizer pra ele que ele precisa seguir o formato que tá em cima (o type User). Só colocar : no parametro e isso vai valer para qualquer lugar que a variavel esteja. Nesse caso, ela tá dentro de um parametro de uma funcao, mas se ela tivesse definindo: const user: User tambem daria pra definir. Todo lugar que eu tiver uma variavel e eu botar : e o tipo daquela variavel, o TS vai entender que eu tenhho que seguir com esse formato dentro dessa variavel;

// Com as alterações feitas, erros surgem. O TypeScript é um Static type checking, ou seja, ele faz a checagem de tipos da nossa aplicação enquanto estamos desenvolvendo. Quando a aplicação vai pra produção, a aplicacao nao vai mais ser executada com TS, e sim com JS. Antes de botar o código online em produção, tenho que converter todo os código TS para JS, que é o código entendi pelos browsers, node. Por isso, nunca vamos usar o TS diretamente em produção. Só se estiver usando Deno, que ele consegue entender o TS de forma direta.

/* 
  ! Vantagens do TypeScript

  * Não deixar a gente errar no formato das coisas dentro da aplicacao
  * Inteligência adicional pra codar
  
  ? No TS, não precisamos tipar todas as variaveis da aplicação. O TS tem algo chamado iferência de tipos, então ele consegue determinar qual que é os tipos das variaveis na maioria dos casos.
  ? Por exemplo, se chamar essa função showWelcomeMessage(); e assinar valor/retorno variavel dela como message, passando o mouse por cima da variavel, o TS vai dizer que ela tem que ser uma string. Como ele determina isso? O retorno da função é uma string, então ele consegue entender isso de forma automatica. Desse modo também funciona: https://i.imgur.com/ymOQ46l.png
  * const message = showWelcomeMessage(user)
*/