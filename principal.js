const readline = require('readline-sync');
const Heroi = require('./heroi');

function lerEntrada(mensagem) {
    return readline.question(mensagem);
}

const nome = lerEntrada("Digite o nome do heroi: ");
const idade = lerEntrada("Digite a idade do heroi: ");
const tipo = lerEntrada("Digite o tipo do heroi (mago, guerreiro, monge, ninja): ");

const heroi = new Heroi(nome, idade, tipo);

heroi.atacar();
