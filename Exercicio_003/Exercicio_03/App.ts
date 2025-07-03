import { processarDados } from "./Utils/dataProcessor";

const dadosRecebidos: any[] = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, produtosId: 'ABC-123', valor: 99.9 },
    { id: 3, descricao: 'Algo desconhecido' },
];

processarDados(dadosRecebidos);