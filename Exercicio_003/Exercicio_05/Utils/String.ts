export default function formatarNome(nomeCompleto: string): string {
    return nomeCompleto
      .split(' ')
      .map((nome, index) =>
        index === 0 ? nome.toUpperCase() : nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
      )
      .join(' ');
  }
  
  export function contarVogais(texto: string): number {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (const char of texto) {
      if (vogais.includes(char)) {
        contador++;
      }
    }
    return contador;
  }
  