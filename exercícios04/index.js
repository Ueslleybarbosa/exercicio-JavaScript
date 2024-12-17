var nome = window.prompt('Qual é o seu nome?');
document.write(`Olá <strong>${nome}</strong>, o seu nome tem um total de <strong>${nome.length}</strong> caracteres!<br>`);
document.write(`Seu nome em maiúsculas fica <strong>${nome.toUpperCase()}</strong><br>`);
document.write(`Seu nome em minúsculas fica <strong>${nome.toLowerCase()}</strong>`);
