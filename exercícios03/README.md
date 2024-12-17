# ✨ Exercício: Soma de Dois Números em JavaScript

## 📖 Descrição
Este repositório contém um exemplo simples de JavaScript que solicita ao usuário dois números através de prompts e exibe a soma desses números usando um alerta.

## ⚙️ Funcionalidades
- **`window.prompt`**: Solicita ao usuário a entrada de dois números.
- **Conversão de Tipo**: Converte a entrada do usuário para números.
- **Cálculo de Soma**: Calcula a soma dos dois números fornecidos.
- **`window.alert`**: Exibe a soma dos números em uma mensagem de alerta.

## 📜 Código
Aqui está o código utilizado no exercício:

```javascript
var N1 = Number(window.prompt('Digite um número: ')); 
var N2 = Number(window.prompt('Digite outro número: ')); 
var S = N1 + N2;
window.alert(`A soma de ${N1} e ${N2} é igual a ${S}`);
