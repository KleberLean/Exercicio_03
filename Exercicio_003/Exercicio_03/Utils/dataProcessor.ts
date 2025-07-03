import { UsuarioCompleto, ItemPedido } from "../Types/Dados";

export function processarDados(dados: any[]): void {
  dados.forEach((item, index) => {
    if (
      item &&
      typeof item.nome === 'string' &&
      typeof item.email === 'string'
    ) {
      const usuario = item as UsuarioCompleto;
      console.log(
        `UsuarioCompleto [${index}]: id=${usuario.id}, nome=${usuario.nome}, email=${usuario.email}`
      );

    } else if (
      item &&
      typeof item.produtosId === 'string' &&
      typeof item.valor === 'number'
    ) {
      const pedido = item as ItemPedido;
      console.log(
        `ItemPedido [${index}]: id=${pedido.id}, produtosId=${pedido.produtosId}, valor=${pedido.valor}`
      );

    } else {
      console.warn('Item com estrutura desconhecida:', item);
    }
  });
}
