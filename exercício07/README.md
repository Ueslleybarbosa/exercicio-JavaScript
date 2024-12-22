# Eventos DOM: Soma de Valores

## Descrição

Este repositório demonstra como usar eventos DOM para interagir com elementos de uma página web. O código JavaScript captura os valores de dois campos de entrada, calcula a soma desses valores e exibe o resultado na página quando o botão é clicado.

## Funcionalidade do Código JavaScript

1. **Seleção de Elementos**:
   - O JavaScript seleciona os elementos HTML necessários para a operação, incluindo os campos de entrada para os números, o botão de soma e o elemento onde o resultado será exibido.

2. **Adição de Event Listener**:
   - Um ouvinte de eventos (`EventListener`) é adicionado ao botão de soma. Esse ouvinte espera pelo evento de clique no botão e, quando isso acontece, executa uma função específica.

3. **Função de Soma**:
   - A função de soma é chamada quando o botão é clicado. Esta função:
     - Captura os valores inseridos nos campos de entrada.
     - Converte esses valores para números.
     - Calcula a soma dos valores.
     - Atualiza o conteúdo do elemento de resultado para mostrar a soma calculada.

## Explicação das Operações

- **Seleção de Elementos**:
  - Usando seletores CSS, o JavaScript identifica e armazena referências aos elementos da página que serão manipulados.

- **Event Listener**:
  - Um ouvinte é configurado para detectar cliques no botão. Quando o botão é clicado, a função de soma é executada.

- **Função de Soma**:
  - Converte os valores dos campos de entrada de strings para números.
  - Calcula a soma desses números.
  - Atualiza o elemento de resultado na página com o valor da soma, formatado de forma legível.
