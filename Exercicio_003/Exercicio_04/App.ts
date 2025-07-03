import { Venda } from "./Interfaces/IVenda";
import { gerarResumoVendas, atualizarStatusVenda, registrarVenda, prepararVendaParaCliente } from "./Utils/RelatorioVendas";

const vendas: Venda[] = [
  { idVenda: 'v1', clienteId: 'c1', valorTotal: 150, status: 'pendente', itens: [] },
  { idVenda: 'v2', clienteId: 'c2', valorTotal: 250, status: 'concluida', itens: [] },
  { idVenda: 'v3', clienteId: 'c3', valorTotal: 100, status: 'cancelada', itens: [] }
];

console.log('Resumo de vendas:', gerarResumoVendas(vendas));

const vendaAtualizada = atualizarStatusVenda(vendas[0], { status: 'concluida' });
console.log('Venda atualizada:', vendaAtualizada);

const vendaReadonly: Readonly<Venda> = vendas[1];
registrarVenda(vendaReadonly);

console.log('Venda para cliente:', prepararVendaParaCliente(vendas[0]));

console.log('Vendas concluídas:');
vendas.forEach(v => {
  if (v.status === 'concluida') {
    console.log(` - ${v.idVenda}: R$${v.valorTotal}`);
  }
});
