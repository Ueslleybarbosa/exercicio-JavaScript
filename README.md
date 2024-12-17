# ✨ Exercício: Manipulação de Strings em JavaScript

## 📖 Descrição
Este repositório contém um exemplo simples de JavaScript que solicita ao usuário seu nome através de um prompt e exibe diversas informações sobre o nome utilizando a função `document.write`.

## ⚙️ Funcionalidades
- **`window.prompt`**: Solicita ao usuário a entrada de seu nome.
- **Manipulação de Strings**: Exibe o nome do usuário, o comprimento do nome, e o nome em maiúsculas e minúsculas.
- **`document.write`**: Escreve as informações diretamente no documento HTML.

## 📜 Código
Aqui está o código utilizado no exercício:

```javascript
var nome = window.prompt('Qual é o seu nome?');
document.write(`Olá <strong>${nome}</strong>, o seu nome tem um total de <strong>${nome.length}</strong> caracteres!<br>`);
document.write(`Seu nome em maiúsculas fica <strong>${nome.toUpperCase()}</strong><br>`);
document.write(`Seu nome em minúsculas fica <strong>${nome.toLowerCase()}</strong>`);
