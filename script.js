const nome = 'Infnet';
const anoDeFundacao = 2009;
const nomeDiretor = 'Cidcley';
const telefone = 987640543;
const colegio = {
  nome,
  anoDeFundacao,
  nomeDiretor,
  telefone,
  exibir: function() {
    alert(`${this.nome} foi fundada em ${this.anoDeFundacao}.`);
  },
  obterDiretor: function() {
    alert(`O nome do diretor da ${this.nome} é ${this.nomeDiretor}`)
  },
};
delete colegio.anoDeFundacao;
colegio.exibir();