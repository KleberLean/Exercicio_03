import formatarNome, {contarVogais} from "./Utils/String";
import { OperacoesMatematicas, MAX_VALOR } from "./Utils/numeros";

const nomeFormatado = formatarNome('joão silva souza');
console.log('Nome formatado:', nomeFormatado);

const texto = 'Olá, quantas vogais há aqui?';
const numeroDeVogais = contarVogais(texto);
console.log(`Número de vogais em "${texto}":`, numeroDeVogais);

const numeros = [10, 25, 5, 40, 15];
const soma = OperacoesMatematicas.somarArray(numeros);
console.log('Soma dos números:', soma);

const somaEhPar = OperacoesMatematicas.ehPar(soma);
console.log('A soma é par?', somaEhPar);

if (soma > MAX_VALOR) {
  console.log('Soma excede o valor máximo permitido.');
} else {
  console.log('Soma dentro do limite.');
}