export class Livros {
    titulo: string;
    autor: string; 
    anoPublicacao: number;
    estaDisponivel: boolean;

    constructor (titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.estaDisponivel = true;
    }

    emprestar () {
        if(this.estaDisponivel){
            this.estaDisponivel = false;
            return true;
        } else{
            return false;
        }
    }

    devolver () {
        if (this.estaDisponivel) {
            this.estaDisponivel = true;
            return true;
        } else{
            return false;
        }
    }
} 

