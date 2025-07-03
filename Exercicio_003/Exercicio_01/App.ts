import { Livros } from "./Exercicio_01/models/Livro";

const livro1 = new Livros("O senhor dos anéis", 'J.R.R Tolkein', 1954);

if(livro1.emprestar()) {
    console.log(`O livro ${livro1.titulo} foi emprestado com sucesso!`)
} else {
    console.log(`O livro ${livro1.titulo} não está desponivel para empréstimo`)
}