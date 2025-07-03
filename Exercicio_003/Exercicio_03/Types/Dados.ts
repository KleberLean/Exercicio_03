export interface DadosBase {
    id: any;
}

export interface DadosUsuario{
    nome: string;
    email: string;
}

export interface DadosProdutos{
    produtosId: string;
    valor: number;
}

export type UsuarioCompleto = DadosBase & DadosUsuario;

export type ItemPedido = DadosBase & DadosProdutos;