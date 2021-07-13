// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const idade2: number = 4.5;

// String
const nome: string = 'Victor'

// Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 345, 456, 46];

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Victor', 3, true];

// Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any : usa quando não sabe o que ela é
const retornoDaAPI: any[] = [123, 'Victor', false];
const retornoDaAPI2: any = {
  //......
};

// Void : usa quando a function não tem retorno
function printarNaTela(msg: string): void {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object : usa quando tem um objeto a ser passado
function criar(object: object) {
  //....
}
criar({
  propriedade: 1,
})
// criar 'Victor' da erro porque é um string

// Never : quando nunca ocorre
function loopInfinito(): never {
  while (true) { }
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha() {
  return erro('Algo falhou');
}

// Union Types : quando algo tem um ou outro, ou mais de um tipo /// | = ou
const nota: string | number = 5;
function exibirNota(nota: number | string) {
  console.log(`nota é  ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

// Type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
  nome: 'Victor',
  sobrenome: 'Sousa',
  dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log('Nome do funcionário: ', funcionario.nome);
  }
}

// Valores nulos ou opcionais: quando ter algo que é opcional é só usar o '?'
let altura: number | null = 1.6;
altura = null;

type contato = {
  nome: string;
  telefone1: string;
  telefone2?: string;
}
const contato = {
  nome: 'Victor',
  telefone1: '12232324',
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
// (<number>minhaIdade).toString();

// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);