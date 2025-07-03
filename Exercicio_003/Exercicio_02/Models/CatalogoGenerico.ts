import { itemCatalogo } from "../Interfaces/IIntemCatalogo";

export class CatalogoGenerico <T extends itemCatalogo> {
    private produtos: T [] = [];

    adicionarProdutos(produto: T) {
        this.produtos.push(produto);
    }

    listarProdutos(): T[] {
        return this.produtos;
    }

    buscarPorNome(nome: string): T[] {
        const termos = nome.toLowerCase();
        const resultados: T[] = [];

        for(const p of this.produtos) {
            if(p.nome.toLowerCase().includes(termos)){
                resultados.push(p);
            }
        }
        return resultados;
    }
}