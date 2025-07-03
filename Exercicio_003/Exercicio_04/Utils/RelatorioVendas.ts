import { Venda } from "../Interfaces/IVenda";

export function gerarResumoVendas(vendas: Venda[]): Pick<Venda, 'idVenda' | 'valorTotal' | 'status'>[] {
    return vendas.map(v => ({
      idVenda: v.idVenda,
      valorTotal: v.valorTotal,
      status: v.status
    }));
  }
  
  export function atualizarStatusVenda(
    vendaOriginal: Venda,
    novoStatus: Partial<Venda>
  ): Venda {
    return { ...vendaOriginal, ...novoStatus };
  }
  
  export function registrarVenda(venda: Readonly<Venda>): void {
    console.log('Registrando venda:', venda);
  }
  
  export function prepararVendaParaCliente(venda: Venda): Omit<Venda, 'clienteId' | 'status'> {
    const { clienteId, status, ...rest } = venda;
    return rest;
  }