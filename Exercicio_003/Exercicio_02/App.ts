import { Eletronico } from "./Interfaces/IEletronico";
import { Vestuario } from "./Interfaces/IVestuario";
import { CatalogoGenerico } from "./Models/CatalogoGenerico";

const tv: Eletronico = { id: 1, nome: 'Smart TV 55"', preco: 2800, marca: 'Samsung' };
const laptop: Eletronico = { id: 2, nome: 'Notebook Gamer', preco: 6500, marca: 'Dell' };

const camiseta: Vestuario = { id: 3, nome: 'Camiseta Polo', preco: 120, tamanho: 'M' };
const calca: Vestuario = { id: 4, nome: 'Calça Jeans', preco: 200, tamanho: 'G' };

const catEletronico = new CatalogoGenerico<Eletronico>();
catEletronico.adicionarProdutos(tv);
catEletronico.adicionarProdutos(laptop);

const catVestuario = new CatalogoGenerico<Vestuario>();
catVestuario.adicionarProdutos(camiseta);
catVestuario.adicionarProdutos(calca);

console.log('Eletrônicos disponíveis:');
console.table(catEletronico.listarProdutos());

console.log('Vestuário disponível:');
console.table(catVestuario.listarProdutos());

const termoBusca = 'jeans';
console.log(`\nBuscando por "${termoBusca}" no catálogo de vestuário...`);
const resultados = catVestuario.buscarPorNome(termoBusca);

if (resultados.length > 0) {
  console.log('Produtos encontrados:');
  console.table(resultados);
} else {
  console.log('Nenhum produto encontrado com esse nome.');
}