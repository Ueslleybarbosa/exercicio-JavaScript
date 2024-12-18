# JavaScript DOM

Este código manipula elementos HTML utilizando JavaScript, aplicando estilos CSS e exibindo conteúdo na página web.

## Explicação:

1. **Selecionar o primeiro `<h1>` e mudar a cor do texto**:
   - A função `window.document.querySelector('h1')` seleciona o primeiro elemento `<h1>` encontrado no documento.
   - A propriedade `t1.style.color = 'red'` altera a cor do texto do elemento `<h1>` para **vermelho**.

2. **Selecionar o primeiro parágrafo (`<p>`) e exibir seu texto**:
   - A função `window.document.getElementsByTagName('p')[0]` seleciona o primeiro parágrafo (`<p>`) da página.
   - A propriedade `p1.innerText` obtém o texto contido no primeiro parágrafo.
   - A função `window.document.write('Esse é o texto - ' + p1.innerText)` exibe no documento o texto "Esse é o texto - " seguido do conteúdo do primeiro parágrafo.

3. **Selecionar o segundo parágrafo (`<p>`) e mudar a cor de fundo**:
   - A função `window.document.getElementsByTagName('p')[1]` seleciona o segundo parágrafo (`<p>`) da página.
   - A propriedade `p2.style.backgroundColor = 'red'` altera a cor de fundo do segundo parágrafo para **vermelho**.

4. **Selecionar um `<div>` com o ID `msg` e mudar a cor do texto**:
   - A função `window.document.querySelector('div#msg')` seleciona o primeiro elemento `<div>` com o id `msg`.
   - A propriedade `msg.style.color = 'blue'` altera a cor do texto dentro do elemento `div` para **azul**.

5. **Alterar a cor de fundo do corpo da página para preto**:
   - A função `window.document.body` seleciona o elemento `<body>` da página.
   - A propriedade `corpo.style.backgroundColor = 'black'` altera a cor de fundo do corpo da página para **preto**.

## Resumo:

O código realiza as seguintes ações:

- Altera a cor do texto do primeiro `<h1>` para **vermelho**.
- Exibe o texto do primeiro parágrafo (`<p>`) na página.
- Muda a cor de fundo do segundo parágrafo (`<p>`) para **vermelho**.
- Modifica a cor do texto do `<div>` com id `msg` para **azul**.
- Altera a cor de fundo da página para **preto**.
