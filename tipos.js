"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var idade2 = 4.5;
// String
var nome = 'Victor';
// Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 345, 456, 46];
// Tuple
var jogadores;
jogadores = ['Victor', 3, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any : usa quando não sabe o que ela é
var retornoDaAPI = [123, 'Victor', false];
var retornoDaAPI2 = {
//......
};
// Void : usa quando a function não tem retorno
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object : usa quando tem um objeto a ser passado
function criar(object) {
    //....
}
criar({
    propriedade: 1,
});
// criar 'Victor' da erro porque é um string
// Never : quando nunca ocorre
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types : quando algo tem um ou outro, ou mais de um tipo /// | = ou
var nota = 5;
function exibirNota(nota) {
    console.log("nota \u00E9  " + nota);
}
exibirNota('10');
exibirNota(10);
// Type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Victor',
        sobrenome: 'Sousa',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// Valores nulos ou opcionais: quando ter algo que é opcional é só usar o '?'
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Victor',
    telefone1: '12232324',
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
// (<number>minhaIdade).toString();
// const input = document.getElementById("numero1") as HTMLInputElement;
var input = document.getElementById("numero1");
console.log(input.value);
